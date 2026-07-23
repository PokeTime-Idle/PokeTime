/**
 * Poketime Service Worker — Phase 1.4 (Vite build)
 *
 * Lit asset-manifest.json genere par scripts/generate-asset-manifest.js
 * pour connaitre la liste exacte des fichiers a precacher. Le hash du
 * manifest sert de nom de cache -> invalidation automatique a chaque build.
 *
 * Strategies de cache :
 *   - Precache (install) : tous les assets listes dans asset-manifest.json
 *   - Navigation (HTML)   : network-first avec fallback cache
 *   - Scripts/Styles/Worker: network-first (static precache fallback) — évite de servir
 *     d'anciens chunks Vite après un déploiement (404 ui-*.js / index-*.js)
 *   - Images/Fonts locales : cache-first (runtime)
 *   - CDN sprites          : cache-first (opaque responses acceptees)
 */

const MANIFEST_URL = './asset-manifest.json';
let CACHE_VERSION = 'v0'; // Sera remplace par la version du manifest
let STATIC_CACHE = 'poketime-static-v0';
const RUNTIME_CACHE_PREFIX = 'poketime-runtime';
const CDN_CACHE_PREFIX = 'poketime-cdn';

function cacheNames() {
    return {
        static: STATIC_CACHE,
        runtime: `${RUNTIME_CACHE_PREFIX}-${CACHE_VERSION}`,
        cdn: `${CDN_CACHE_PREFIX}-${CACHE_VERSION}`,
    };
}

// Hosts CDN distants dont on accepte de cacher les ressources (sprites Pokemon,
// items, badges).
const TRUSTED_CDN_HOSTS = new Set([
    'raw.githubusercontent.com',
]);

function isSameOrigin(request) {
    const url = new URL(request.url);
    return url.origin === self.location.origin;
}

function isTrustedCdn(request) {
    try {
        const url = new URL(request.url);
        return TRUSTED_CDN_HOSTS.has(url.hostname);
    } catch (_) {
        return false;
    }
}

/** Requests that must not be written to Cache (Vite dev, extensions, etc.). */
function shouldSkipCacheWrite(request) {
    try {
        const url = new URL(request.url);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return true;
        // Vite dev server modules — often uncacheable or huge; put() throws NetworkError.
        if (url.pathname.includes('/@vite/') || url.pathname.includes('/@fs/')
            || url.pathname.includes('/@id/') || url.pathname.startsWith('/@')) {
            return true;
        }
        if (url.pathname.includes('/node_modules/.vite/')) return true;
    } catch (_) {
        return true;
    }
    return false;
}

/**
 * Whether a fetch response may be stored. Cache.put rejects opaque redirects,
 * partial (206) bodies, and some cross-origin responses (NetworkError).
 */
function isCacheableResponse(response) {
    if (!response) return false;
    if (response.type === 'opaqueredirect' || response.type === 'error') return false;
    if (response.type === 'opaque') return true;
    if (response.status === 206) return false;
    return response.ok;
}

/**
 * cache.put() wrapper — never throws; avoids Uncaught (in promise) NetworkError.
 */
async function safeCachePut(cache, request, response) {
    if (shouldSkipCacheWrite(request) || !isCacheableResponse(response)) return;
    try {
        await cache.put(request, response.clone());
    } catch (_) {
        // QuotaExceeded, opaque/CORS mismatch, disturbed body, itch iframe edge cases.
    }
}

async function networkFirst(request, cacheName, options = {}) {
    const allowHtmlFallback = options.allowHtmlFallback !== false;
    const cache = await caches.open(cacheName);
    try {
        const response = await fetch(request);
        if (response) {
            await safeCachePut(cache, request, response);
            if (response.ok) return response;
        }
        const cached = await cache.match(request);
        if (cached) return cached;
        if (allowHtmlFallback) return caches.match('./index.html');
        return new Response('', { status: 404, statusText: 'Not Found' });
    } catch (_) {
        const cached = await cache.match(request);
        if (cached) return cached;
        if (allowHtmlFallback) return caches.match('./index.html');
        return new Response('', { status: 404, statusText: 'Not Found' });
    }
}

async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
        const response = await fetch(request);
        await safeCachePut(cache, request, response);
        if (response) return response;
        const fallback = await cache.match(request);
        if (fallback) return fallback;
        return new Response('', { status: 404, statusText: 'Not Found' });
    } catch (_) {
        const fallback = await cache.match(request);
        if (fallback) return fallback;
        return new Response('', {
            status: 404,
            statusText: 'Not Found',
        });
    }
}

async function cacheFirstAllowOpaque(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
        const response = await fetch(request);
        if (response && (response.ok || response.type === 'opaque')) {
            await safeCachePut(cache, request, response);
        }
        return response;
    } catch (_) {
        return new Response('Service Unavailable', { status: 503, statusText: 'Service Unavailable' });
    }
}

/**
 * Recupere le manifest d'assets et initialise le cache statique.
 * Retourne la liste des URLs a precacher.
 */
async function fetchManifest() {
    try {
        const response = await fetch(MANIFEST_URL);
        if (!response.ok) throw new Error(`Manifest fetch failed: ${response.status}`);
        const manifest = await response.json();
        CACHE_VERSION = manifest.version || 'v0';
        STATIC_CACHE = `poketime-static-${CACHE_VERSION}`;
        return manifest.files || [];
    } catch {
        // Precache failures are non-fatal; no console output in production.
        // Fallback : precacher au minimum index.html et le manifest
        CACHE_VERSION = 'fallback-' + Date.now();
        STATIC_CACHE = `poketime-static-${CACHE_VERSION}`;
        return ['./', './index.html', './asset-manifest.json'];
    }
}

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const files = await fetchManifest();
        const cache = await caches.open(STATIC_CACHE);
        // addAll echoue si un fichier est absent. On utilise add() un par un
        // pour tolerer les fichiers manquants et logger les erreurs.
        const results = await Promise.allSettled(
            files.map(url =>
                cache.add(url).catch(err => {
                    throw err;
                })
            )
        );
        const failed = results.filter(r => r.status === 'rejected').length;
        if (failed > 0) {
            // Some assets may be missing on disk; install still completes.
            void failed;
        }
    })());
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        const { static: staticName, runtime: runtimePrefix, cdn: cdnPrefix } = cacheNames();
        const runtimeName = `${RUNTIME_CACHE_PREFIX}-${CACHE_VERSION}`;
        const cdnName = `${CDN_CACHE_PREFIX}-${CACHE_VERSION}`;
        const keep = new Set([staticName, runtimeName, cdnName]);

        const keys = await caches.keys();
        await Promise.all(
            keys
                .filter((name) => name.startsWith('poketime-') && !keep.has(name))
                .map((name) => caches.delete(name))
        );
        await self.clients.claim();
    })());
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    // CDN distants whitelistes — cache-first avec opaque responses
    if (!isSameOrigin(request) && isTrustedCdn(request)) {
        event.respondWith(cacheFirstAllowOpaque(request, cacheNames().cdn));
        return;
    }

    if (!isSameOrigin(request)) return;

    const isHtmlNavigation = request.mode === 'navigate' || request.destination === 'document';
    if (isHtmlNavigation) {
        event.respondWith(networkFirst(request, cacheNames().static));
        return;
    }

    const destination = request.destination || '';
    if (destination === 'script' || destination === 'style' || destination === 'worker') {
        event.respondWith(networkFirst(request, cacheNames().static, { allowHtmlFallback: false }));
        return;
    }

    if (destination === 'image' || destination === 'font') {
        event.respondWith(cacheFirst(request, cacheNames().runtime));
        return;
    }

    event.respondWith(networkFirst(request, cacheNames().static));
});

self.addEventListener('message', (event) => {
    if (event && event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
