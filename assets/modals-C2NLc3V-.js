import{T as Vt,_ as qt,g as Ft,l as L}from"./formatters-B27G4IYh.js";import{S as i,b as S,v as Kt,y as T}from"./i18n-CKrigoKG.js";import{a as _t,b as jt,d as k,h as Wt,m as Zt,y as I}from"./utils-BPvJcnXZ.js";import{r as p}from"./gameManager-Htz7Nvs7.js";import{v as f}from"./safeAccess-vsfGgrOF.js";function ve(t){return t instanceof Element?t:null}function Gt(t){return t instanceof HTMLButtonElement}var Yt={attack:"Att",spattack:"Atq.Sp",defense:"Déf",spdefense:"Déf.Sp",speed:"Vit",accuracy:"Préc",evasion:"Esqu"},Xt={attack:"Atk",spattack:"Sp.Atk",defense:"Def",spdefense:"Sp.Def",speed:"Spe",accuracy:"Acc",evasion:"Eva"},Jt=["attack","spattack","defense","spdefense","speed","accuracy","evasion"];function Qt(t,e){return!t||typeof t.getCombatStatStage!="function"?0:t.getCombatStatStage(e)}function te(t,e){if(!t?.hasStatusEffect?.()||!t.statusEffect)return 1;const s=t.statusEffect.type;return e==="attack"||e==="spattack"?s===f.SCARED?.6:s===f.ENRAGED?1.3:s===f.PUNCHER?2:1:e==="defense"||e==="spdefense"?s===f.REINFORCED?1.25:1:e==="speed"?s===f.ENRAGED?1.15:s===f.PARALYZED?.75:s===f.MIRED?.6:1:1}function ee(t,e){if(t&&typeof t.getCombatStatStageMultiplier=="function")return t.getCombatStatStageMultiplier(e);const s=Qt(t,e);return s?Math.max(.1,1+s*.1):1}function se(t,e){return e>t?"buff":e<t?"nerf":null}function ge(t,e,s){const o=Number(s)||0,a=te(t,e),n=ee(t,e),l=!!t?.isEnemy;let r,c;return l?(r=o,c=Math.floor(o*a*n)):e==="speed"?(c=o,r=a>0&&n>0?Math.floor(o/a/n):o):(r=a>0?Math.floor(o/a):o,c=Math.floor(o*n)),{neutral:r,effective:c,tint:se(r,c),text:L(c)}}function ae(t,e="fr"){if(!t||typeof t.getCombatStatStage!="function")return"";const s=e==="en"?Xt:Yt,o=[];for(const a of Jt){const n=t.getCombatStatStage(a);if(!n)continue;const l=n>0?"+":"",r=n>0?"up":"down";o.push(`<span class="stat-stage-badge stat-stage-${r}" title="${s[a]} ${l}${n}">${s[a]}${l}${n}</span>`)}return o.join("")}function W(t){if(!t)return!1;const e=window.getComputedStyle(t);if(e.display==="none"||e.visibility==="hidden")return!1;const s=t.getBoundingClientRect();return s.width>0&&s.height>0}function oe(){const t=["#saveSlotBootModal",".js-modal-overlay",".compact-popup",".stats-modal",".modal",".modal-overlay",".quest-completion-modal",".talent-action-modal",".talent-choice-modal",".talent-change-juice"].join(", "),e=new Set;return Array.from(document.querySelectorAll(t)).filter(s=>!s||e.has(s)?!1:(e.add(s),W(s))).map((s,o)=>{const a=Number.parseInt(window.getComputedStyle(s).zIndex,10);return{el:s,index:o,zIndex:Number.isFinite(a)?a:0}}).sort((s,o)=>s.zIndex!==o.zIndex?s.zIndex-o.zIndex:s.index-o.index).map(s=>s.el).pop()||null}function be(){const t=oe();if(!t)return!1;const e=t.querySelector(['[data-action^="close"]','[data-action="skipCapture"]','[data-action="removeTalentActionModal"]',".btn-talent-choice-cancel",".btn-talent-juice-close",".talent-action-cancel",".stats-close",".close-btn",".close-modal"].join(", "));return Gt(e)&&!e.disabled?(e.click(),!0):t instanceof HTMLElement?(t.click(),!W(t)||!document.body.contains(t)):!1}function fe(t){if(typeof p<"u"&&p&&p.suppressLogs)return;const e=document.getElementById("gameLog");if(!e)return;const s=document.createElement("div");s.className="log-entry";const o=typeof p<"u"&&p&&String(p.language||"fr").toLowerCase().startsWith("en")?"en-US":"fr-FR";if(s.innerHTML=`<span class="log-time">[${new Date().toLocaleTimeString(o)}]</span> ${t}`,e.appendChild(s),e.children.length>50){const n=e.firstChild;n&&e.removeChild(n)}const a=document.getElementById("logModal");a&&a.classList.contains("show")&&(e.scrollTop=e.scrollHeight)}function he(t){const e=S(null,t?.name??""),s=t.rarity&&t.rarity!=="undefined"?t.rarity:"common",o=t.rarityBadgeLabel||t.rarityLabel||t.rarity||"";return`<div class="egg-hatch-particles" aria-hidden="true"><span class="egg-particle"></span><span class="egg-particle"></span><span class="egg-particle"></span><span class="egg-particle"></span><span class="egg-particle"></span><span class="egg-particle"></span><span class="egg-particle"></span><span class="egg-particle"></span></div>
        ${o?`<div class="egg-hatch-rarity rarity-${s}">${o}</div>`:""}
        ${t.title?`<div class="egg-hatch-title">${t.title}</div>`:""}
        <img src="${t.spriteUrl}" alt="${e}" class="egg-hatch-sprite">
        <h3 class="egg-hatch-name" style="font-size: 20px;">${e}</h3>
        <button class="btn btn-save btn-super-confirm" data-action="closeEggHatchModal">${t.confirmLabel||"OK"}</button>
    `}function ne(t){const e=S(null,t?.name??""),s=t.secondaryType?`<span class="type-badge type-${t.secondaryType}">${t.secondaryType}</span>`:"",o=t.rarityBadgeLabel||t.rarity||"";return`<div class="egg-hatch-particles rocket-shadow-particles" aria-hidden="true"><span class="rocket-shadow-particle"></span><span class="rocket-shadow-particle"></span><span class="rocket-shadow-particle"></span><span class="rocket-shadow-particle"></span><span class="rocket-shadow-particle"></span><span class="rocket-shadow-particle"></span><span class="rocket-shadow-particle"></span><span class="rocket-shadow-particle"></span></div>
        ${o?`<div class="egg-hatch-rarity rocket-shadow-rarity-badge rarity-${t.rarity}">${o}</div>`:""}
        ${t.shadowBadgeLabel?`<div class="rocket-shadow-type-badge">${t.shadowBadgeLabel}</div>`:""}
        <div class="egg-hatch-title rocket-shadow-title">${t.title}</div>
        <div class="rocket-shadow-subtitle">${t.subtitle}</div>
        <div class="rocket-shadow-sprite-wrap">
            <img src="${t.spriteUrl}" alt="${e}" class="egg-hatch-sprite rocket-shadow-sprite">
        </div>
        <h3 class="egg-hatch-name rocket-shadow-name" style="font-size: 20px;">${e}</h3>
        <div class="egg-hatch-types rocket-shadow-types">
            <span class="type-badge type-${t.type}">${t.type}</span>
            ${s}
        </div>
        <div class="egg-hatch-stats rocket-shadow-stats">
            <div class="creature-stats">
                ${t.statsHTML}
            </div>
        </div>
        <button type="button" class="btn btn-save btn-super-confirm rocket-shadow-confirm" data-action="closeRocketShadowRewardModal">${t.confirmLabel||"OK"}</button>
    `}function $e(t,e,s,o){if(!t||!e)return;let a="quest-completion-content rocket-shadow-reward-content";o&&o.rarity&&(a+=" rarity-"+o.rarity),e.className=a,e.innerHTML=ne(s),t.classList.add("show")}function ye(){const t=document.getElementById("rocketShadowRewardModal");t&&t.classList.remove("show")}function ie(t){const e=t.isNewCompletion?i("modal.collectionCompleted"):i("modal.collectionLevelUp"),s=t.isNewCompletion?i("modal.collectionUnlocked",null,{name:t.familyName}):i("modal.collectionLeveled",null,{name:t.familyName,level:t.level}),o=(t.members||[]).map(n=>{const l=S(null,n.name),r=!!(n.shinyRequired||n.status==="needs_shiny"),c=k(n.name,r),m=n.status==="missing"?" is-missing":n.status==="needs_shiny"?" is-needs-shiny":n.status==="prestige_0"?" is-prestige-0":"",u=n.status==="ok"?Ft(n.prestige??0):n.status==="prestige_0"?"0":n.status==="needs_shiny"?"✦":"-";return`<div class="collection-member${m}" title="${l}${n.status==="ok"?qt(n.prestige??0):""}">
            <img src="${c}" alt="${l}">
            <span>${u}</span>
        </div>`}).join(""),a=t.effectTexts&&t.effectTexts.length?t.effectTexts.join(", "):t.bonusPerPrestige||"-";return`
        <div class="collection-bonus-modal-title">${e}</div>
        <div class="collection-bonus-modal-subtitle">${s}</div>
        <div class="collection-bonus-modal-grid">${o}</div>
        <div class="collection-bonus-modal-effects">
            <strong>${i("modal.collectionActiveBonus")}</strong> ${a}
        </div>
        <button type="button" class="btn btn-collection-bonus-close" data-action="closeCollectionBonusModal">${i("egg.confirm")}</button>
    `}function ke(t,e,s){!t||!e||(e.innerHTML=ie(s),t.classList.add("show"))}function Se(){const t=document.getElementById("collectionBonusModal");t&&t.classList.remove("show")}function we(t){const e=I(t);if(!e)return;const s=T(typeof p<"u"?p:null,e,t,e.name||t);let o=document.getElementById("toastContainer");o||(o=document.createElement("div"),o.id="toastContainer",o.className="toastContainer",document.body.appendChild(o));const a=document.createElement("div");a.className="toast show",a.style.background="linear-gradient(135deg, rgba(30,20,50,0.95), rgba(70,30,110,0.95))",a.style.borderLeft="6px solid #fbbf24",a.style.boxShadow="0 8px 30px rgba(0,0,0,0.5), 0 0 15px rgba(251, 191, 36, 0.4)",a.style.minWidth="280px",a.style.padding="15px",a.style.display="flex",a.style.alignItems="center",a.style.gap="15px",a.innerHTML=`
        ${e.img?`<img src="${e.img}" class="item-sprite-img${_t(e)}" style="width: 48px; height: 48px; object-fit: contain;">`:`<div style="font-size: 32px; filter: drop-shadow(0 0 5px rgba(255,255,255,0.8));">${e.icon||"OBJ"}</div>`}
        <div style="flex-grow: 1;">
            <div style="color: #fbbf24; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; margin-bottom: 2px;">
                ${i("toast.rareDropInline","Drop {rarity} !",{rarity:typeof p<"u"&&p&&typeof p.getRarityLabel=="function"?p.getRarityLabel(e.rarity):e.rarity==="epic"?"Epic":"Legendary"})}
            </div>
            <div style="color: white; font-weight: bold; font-size: 16px;">${s}</div>
        </div>
    `,o.appendChild(a),setTimeout(()=>{a.classList.remove("show"),a.style.opacity="0",a.style.transform="translateX(100%)",setTimeout(()=>{a.parentNode===o&&o.removeChild(a)},300)},3500)}function Me(t,e,s){const o=document.getElementById("itemSelectOverlay");o&&o.remove();const a=document.createElement("div");a.id="itemSelectOverlay",a.className="stats-modal show item-select-modal",a.style.zIndex="10001",a.onclick=function(l){l.target===a&&a.remove()};let n="";t.length===0?n=`
            <div class="item-select-empty">
                <div class="item-select-empty-icon">OBJ</div>
                <div>${i("modal.itemNone")}</div>
                <div class="item-select-empty-hint">${i("modal.itemHint")}</div>
            </div>
        `:t.forEach(function(l){const r=l.itemKey?I(l.itemKey):null,c=(l.itemKey?jt(l.itemKey):null)||r||{},m=typeof p<"u"?p:null,u=m&&typeof m.getLocalizedItemName=="function"?m.getLocalizedItemName(l.itemKey,l.name||"",c):T(m,c,l.itemKey,l.name),g=m&&typeof m.getLocalizedItemDescription=="function"?m.getLocalizedItemDescription(l.itemKey,l.description||"",c):Kt(m,c,l.itemKey,l.description||"");n+=`
                <div class="item-select-card"
                     data-action="equipItem" data-arg="${l.itemKey}" data-arg2="${e}" data-arg3="${s}">
                    <div class="item-select-icon">${l.iconHtml}</div>
                    <div class="item-select-main">
                        <div class="item-select-name">${u} <span class="item-select-count">x${l.count}</span></div>
                        <div class="item-select-desc">${g}</div>
                    </div>
                    <div class="item-select-action">${i("modal.itemEquip")}</div>
                </div>
            `}),a.innerHTML=`
        <div class="stats-content item-select-content" data-action="stopPropagation" data-action-stop>
            <div class="stats-header">
                <h2>${i("modal.itemSelectTitle")}</h2>
                <button class="stats-close" data-action="closeItemSelectOverlay">&#10005;</button>
            </div>
            <div class="item-select-list">
                ${n}
            </div>
        </div>
    `,document.body.appendChild(a)}function F(){const t=document.getElementById("statsBreakdownOverlay");t&&t.remove()}function le(t){return t==="X"?i("mega.formX","Méga X"):t==="Y"?i("mega.formY","Méga Y"):t==="Z"?i("mega.formZ","Méga Z"):t==="default"?i("mega.formDefault","Méga (classique)"):t}function Le(t,e,s){if(!t||!t.megaStoneUnlocked)return"";const o=Wt(String(t.name||""));if(o.length===0)return"";const a=String(t.megaVariant||o[0]),n=i("mega.variantLabel","Forme méga"),l=String(i("mega.variantHint","")).replace(/"/g,"&quot;"),r=Number.isFinite(Number(e))?Number(e):0,c=String(s||"team"),m=o.map(u=>`<option value="${u.replace(/"/g,"&quot;")}"${a===u?" selected":""}>${le(u)}</option>`).join("");return`
        <div class="mega-variant-select-wrap">
            <label class="mega-variant-select-label">${n}
                <select class="mega-variant-select" data-action="setCreatureMegaVariant" data-arg="${r}" data-arg2="${c.replace(/"/g,"&quot;")}" title="${l}">
                    ${m}
                </select>
            </label>
        </div>`}function Te(t){if(F(),!t||!t.stats||!t.meta)return;const e=t.meta,s=t.stats,o=t.variants||{},a=v=>L(Math.round(v)),n=v=>`×${(Math.round(v*1e3)/1e3).toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}`,l=v=>`${v>=0?"+":""}${(v*100).toFixed(1)}%`,r=v=>(v>=0?"+":"")+a(v),c={hp:{label:i("modal.creature.hpFull","PV"),icon:"&#10084;&#65039;"},attack:{label:i("modal.creature.atkShort","Att"),icon:"&#9876;&#65039;"},spattack:{label:i("modal.creature.spAtkShort","Atq.Sp"),icon:"&#128165;"},defense:{label:i("modal.creature.defShort","Def"),icon:"&#128737;&#65039;"},spdefense:{label:i("modal.creature.spDefShort","Def.Sp"),icon:"&#128160;"},speed:{label:i("modal.creature.speedShort","Vit"),icon:"&#128095;"}},m=i("modal.statsBreakdown.title","Détails des stats"),u=i("modal.statsBreakdown.intro","Origine de chaque stat finale pour ce Pokémon."),g=i("modal.statsBreakdown.base","Base espèce (niv. {level})",{level:e.level}),y=i("modal.statsBreakdown.iv","IV ({val}/{max})"),Z=i("modal.statsBreakdown.ivWithMult","IV ({val}/{max}) × {mult} prestige"),G=i("modal.statsBreakdown.pokerus","Pokérus"),Y=i("modal.statsBreakdown.subtotal","Sous-total additif"),B=i("modal.statsBreakdown.rarity","Rareté"),C=i("modal.statsBreakdown.prestige","Prestige"),x=i("modal.statsBreakdown.shiny","Shiny"),E=i("modal.statsBreakdown.tier","Tier (ennemi)"),X=i("modal.statsBreakdown.synergy","Synergies + Collection"),J=i("modal.statsBreakdown.tokens","Jetons de prestige (+5 % chacun)"),Q=i("modal.statsBreakdown.totalMult","Multiplicateur total"),N=e.murailleRatio&&e.murailleRatio>0?`${(e.murailleRatio*100).toFixed(e.murailleRatio%.01===0?0:1)}`:"10",tt=i("modal.statsBreakdown.talent","Talent Muraille (+{pct} % PV)",{pct:N}),et=i("modal.statsBreakdown.talentChip","Muraille (+{pct} % PV → ATK)",{pct:N}),P=i("modal.statsBreakdown.zone","Zone"),st=i("modal.statsBreakdown.shadow","Shadow"),at=i("modal.statsBreakdown.final","Total final"),ot=i("modal.statsBreakdown.withoutIv","Sans IV"),nt=i("modal.statsBreakdown.withoutPokerus","Sans Pokérus"),it=i("modal.statsBreakdown.ivImpact","Apport IV"),lt=i("modal.statsBreakdown.pokerusImpact","Apport Pokérus"),ct=i("modal.statsBreakdown.talentNone","Aucun talent actif sur les stats"),rt=i("modal.statsBreakdown.notShadow","Statut Shadow non actif"),dt=i("modal.statsBreakdown.pokerusActiveLevel","Pokérus {roman} ACTIF (×{mult})"),mt=i("modal.statsBreakdown.pokerusInactive","Pokérus inactif"),ut=i("modal.statsBreakdown.shadowDetail","Shadow (PV ×1.25 / ATK ×1.4 / DEF ×1.10 / VIT ×1.25)"),pt=i("modal.close","Fermer"),H=String(e.ultimateSlotTransferPct??0),vt=i("modal.statsBreakdown.ultimateSlot","Slot ultime (+{pct}%)",{pct:H}),gt=i("modal.statsBreakdown.ultimateSlotChip","Slot ultime : {name} (+{pct}%)",{name:e.ultimateSlotMentorName||"",pct:H}),bt=i("modal.statsBreakdown.ultimateSlotEmpty","Slot ultime (vide)"),ft=n(e.multipliers.rarity),ht=`${n(e.multipliers.prestige)} (P${e.prestige})`,$t=e.isShiny?n(e.multipliers.shiny):"×1",yt=e.isEnemy?`${n(e.multipliers.tier)} (T${e.tier})`:"×1",U=e.multipliers.zone??1,kt=n(U),w=e.combatStatStages,A=w&&Object.values(w).some(v=>Number(v)!==0)?{getCombatStatStage:v=>Number(w?.[v])||0}:null,St=String(p?.language||"fr").toLowerCase().startsWith("en")?"en":"fr",wt=i("modal.statsBreakdown.combatStages","Modifs de stats (combat)"),Mt=A?`<div class="stats-breakdown-combat-stages"><span class="sb-chip sb-chip-muted"><b>${wt}</b> ${ae(A,St)}</span></div>`:"",Lt=`
        <div class="stats-breakdown-chips">
            <span class="sb-chip"><b>${B}</b> ${ft}</span>
            <span class="sb-chip"><b>${C}</b> ${ht}</span>
            <span class="sb-chip"><b>${x}</b> ${$t}</span>
            ${e.isEnemy?`<span class="sb-chip"><b>${E}</b> ${yt}</span>`:""}
            ${U!==1?`<span class="sb-chip"><b>${P}</b> ${kt}</span>`:""}
            <span class="sb-chip ${e.hasPokerus?"sb-chip-good":"sb-chip-muted"}">${e.hasPokerus?dt.replace("{roman}",["","I","II","III","IV","V"][e.pokerusLevel]||String(e.pokerusLevel||"")).replace("{mult}",n(e.multipliers.pokerus).replace("×","")):mt}</span>
            <span class="sb-chip ${e.passiveTalent==="muraille"?"sb-chip-good":"sb-chip-muted"}">${e.passiveTalent==="muraille"?et:ct}</span>
            <span class="sb-chip ${e.isShadow?"sb-chip-good":"sb-chip-muted"}">${e.isShadow?ut:rt}</span>
            ${e.ultimateSlotUnlocked?`<span class="sb-chip ${e.ultimateSlotMentorName?"sb-chip-good":"sb-chip-muted"}">${e.ultimateSlotMentorName?gt:bt}</span>`:""}
        </div>
    `,Tt=v=>{const d=s[v],h=o[v]||{withoutIv:d.final,withoutPokerus:d.final,ivContribution:0,pokerusContribution:0},V=c[v],q=e.tokens&&e.tokens[v]||0,xt=q>0?`<tr><td>${J}</td><td>+${q*5}%</td></tr>`:"",Et=d.talentBonus>0?`<tr class="sb-good"><td>${tt}</td><td>${r(d.talentBonus)}</td></tr>`:"",Nt=d.shadowMult!==1?`<tr class="${d.shadowMult>1?"sb-good":"sb-bad"}"><td>${st}</td><td>${a(d.beforeShadow)} → ${n(d.shadowMult)} → ${a(d.final)}</td></tr>`:"",Pt=(d.ultimateSlotBonus??0)>0?`<tr class="sb-good"><td>${vt}</td><td>${r(d.ultimateSlotBonus??0)}</td></tr>`:"",Ht=(d.zoneMult??1)!==1?`<tr><td>${P}</td><td>${n(d.zoneMult??1)}</td></tr>`:"",Ut=e.isEnemy?`<tr><td>${E}</td><td>${n(d.tierMult)}</td></tr>`:"",At=d.pokerusMult!==1?`<tr class="sb-good"><td>${G}${e.pokerusLevel?` ${["","I","II","III","IV","V"][e.pokerusLevel]||""}`:""}</td><td>${n(d.pokerusMult)}</td></tr>`:"",Dt=d.ivPrestigeMult>1?Z.replace("{val}",String(d.iv)).replace("{max}",String(d.ivMax)).replace("{mult}",n(d.ivPrestigeMult)):y.replace("{val}",String(d.iv)).replace("{max}",String(d.ivMax)),zt=d.ivPrestigeMult>1?`${r(d.ivContribution)} (${d.iv} × ${n(d.ivPrestigeMult)})`:r(Number(d.iv)),Ot=d.final>0?h.ivContribution/d.final:0,Rt=d.final>0?h.pokerusContribution/d.final:0;return`
            <details class="stats-breakdown-stat" open>
                <summary>
                    <span class="sb-stat-icon">${V.icon}</span>
                    <span class="sb-stat-name">${V.label}</span>
                    <span class="sb-stat-value">${a(d.final)}</span>
                </summary>
                <div class="sb-stat-body">
                    <table class="sb-table">
                        <tbody>
                            <tr><td>${g}</td><td>${a(d.base)}</td></tr>
                            <tr class="sb-good"><td>${Dt}</td><td>${zt}</td></tr>
                            <tr class="sb-subtotal"><td>${Y}</td><td>${a(d.additive)}</td></tr>
                            <tr><td>${B}</td><td>${n(d.rarityMult)}</td></tr>
                            <tr><td>${C}</td><td>${n(d.prestigeMult)}</td></tr>
                            ${e.isShiny?`<tr><td>${x}</td><td>${n(d.shinyMult)}</td></tr>`:""}
                            ${At}
                            ${Ut}
                            ${Ht}
                            <tr><td>${X}</td><td>${n(d.synergyMult)}</td></tr>
                            ${xt}
                            <tr class="sb-subtotal"><td>${Q}</td><td>${n(d.totalMult)}</td></tr>
                            ${Et}
                            ${Nt}
                            ${Pt}
                            <tr class="sb-final"><td><b>${at}</b></td><td><b>${a(d.final)}</b></td></tr>
                        </tbody>
                    </table>
                    <div class="sb-impacts">
                        <div class="sb-impact">
                            <div class="sb-impact-label">${it}</div>
                            <div class="sb-impact-value sb-good-text">${r(h.ivContribution)} (${l(Ot)})</div>
                            <div class="sb-impact-sub">${ot}: ${a(h.withoutIv)}</div>
                        </div>
                        <div class="sb-impact ${e.hasPokerus?"":"sb-impact-muted"}">
                            <div class="sb-impact-label">${lt}</div>
                            <div class="sb-impact-value ${e.hasPokerus?"sb-good-text":""}">${e.hasPokerus?`${r(h.pokerusContribution)} (${l(Rt)})`:"—"}</div>
                            <div class="sb-impact-sub">${nt}: ${a(h.withoutPokerus)}</div>
                        </div>
                    </div>
                </div>
            </details>
        `},It=["hp","attack","spattack","defense","spdefense","speed"].map(Tt).join(""),M=t.creatureName||e.name||"",Bt=String(i("mega.sheetMegaHint","")).replace(/"/g,"&quot;"),D=t.spriteUrl?`<img src="${t.spriteUrl}" alt="${M}" class="stats-breakdown-sprite">`:"",z=e.hasPokerus?'<img src="img/PKRS.png" alt="" class="sb-stats-pkrs" width="22" height="22" loading="lazy">':"",O=t.megaSpriteUrl?`<img src="${t.megaSpriteUrl}" alt="" class="stats-breakdown-sprite-mega sb-stats-mega-thumb" width="40" height="40" loading="lazy" title="${Bt}">`:"",R=t.megaVariantSelectHTML||"",Ct=D||z||R||O?`<div class="stats-breakdown-sprite-col">${D}${z}${R}${O}</div>`:"",b=document.createElement("div");b.id="statsBreakdownOverlay",b.className="stats-modal show stats-breakdown-modal",b.style.zIndex="10001",b.onclick=function(v){v.target===b&&F()},b.innerHTML=`
        <div class="stats-content stats-breakdown-content" data-action="stopPropagation" data-action-stop>
            <div class="stats-header">
                <h2>${m}${M?` — ${M}`:""}</h2>
                <button class="stats-close" data-action="closeStatsBreakdownModal" aria-label="${pt}">&#10005;</button>
            </div>
            <div class="stats-breakdown-body">
                <div class="stats-breakdown-summary">
                    ${Ct}
                    <div class="stats-breakdown-summary-text">
                        <div class="sb-intro">${u}</div>
                        ${Lt}
                        ${Mt}
                    </div>
                </div>
                <div class="stats-breakdown-list">
                    ${It}
                </div>
            </div>
        </div>
    `,document.body.appendChild(b)}function K(){const t=document.getElementById("evolutionChoiceOverlay");t&&t.remove()}function Ie(t){if(K(),!t||!Array.isArray(t.options)||t.options.length===0)return;const e=document.createElement("div");e.id="evolutionChoiceOverlay",e.className="stats-modal show evolution-choice-modal",e.style.zIndex="10001",e.onclick=function(o){o.target===e&&K()};let s="";t.options.forEach(function(o,a){const n=String(o.evolves_to||"Inconnu"),l=S(typeof p<"u"?p:null,n),r=String(o.requiredItem||""),c=r?I(r):null,m=r?`${c&&c.icon?c.icon+" ":""}${T(typeof p<"u"?p:null,c||{},r,c&&c.name?c.name:r)}`:i("modal.requiredLevel",null,{level:o.requiredLevel||1}),u=k(n,!1,!1);s+=`
            <button class="btn evolution-choice-option" data-action="evolveCreatureWithOption" data-arg="${t.creatureIndex}" data-arg2="${t.location}" data-arg3="${a}">
                <img src="${u}" alt="${l}" class="evolution-choice-sprite">
                <span class="evolution-choice-name">${l}</span>
                <span class="evolution-choice-req">${i("modal.requiredLabel")}: ${m}</span>
            </button>
        `}),e.innerHTML=`
        <div class="stats-content evolution-choice-content" data-action="stopPropagation" data-action-stop>
            <div class="stats-header">
                <h2>${i("modal.evolutionSelectTitle",null,{name:t.creatureName||"Pokemon"})}</h2>
                <button class="stats-close" data-action="closeEvolutionChoiceModal">&#10005;</button>
            </div>
            <div class="evolution-choice-list">
                ${s}
            </div>
        </div>
    `,document.body.appendChild(e)}function _(){const t=document.getElementById("megaStoneUnlockOverlay");t&&t.remove()}function Be(t,e){if(!e)return;_();const s=t||(typeof p<"u"?p:null);if(!s||typeof s.t!="function")return;const o=Zt(e.name,e);if(!o)return;const a=s.t("mega.unlockModalTitle"),n=s.t("mega.unlockModalBody",{name:e.name,megaName:o.megaFormName}),l=s.t("mega.unlockModalOk"),r=k(String(o.megaFormName),e.isShiny,!1),c=k(e.name,e.isShiny,!1),m=g=>{let y="";return g==null?y="":(typeof g=="string"||typeof g=="number"||typeof g=="boolean")&&(y=String(g)),y.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")},u=document.createElement("div");u.id="megaStoneUnlockOverlay",u.className="stats-modal js-modal-overlay show mega-stone-unlock-modal",u.setAttribute("role","dialog"),u.setAttribute("aria-modal","true"),u.setAttribute("aria-labelledby","megaStoneUnlockTitle"),u.style.zIndex="10002",u.addEventListener("click",function(g){g.target===u&&_()}),u.innerHTML=`
        <div class="stats-content mega-stone-unlock-content" data-action="stopPropagation" data-action-stop>
            <div class="stats-header">
                <h2 id="megaStoneUnlockTitle">${a}</h2>
                <button type="button" class="stats-close" data-action="closeMegaStoneUnlockModal" aria-label="${m(l)}">&#10005;</button>
            </div>
            <div class="mega-stone-unlock-body">
                <div class="mega-stone-unlock-sprites" aria-hidden="true">
                    <img class="mega-stone-unlock-sprite-base" src="${c}" alt="">
                    <span class="mega-stone-unlock-arrow" aria-hidden="true">&#8594;</span>
                    <img class="mega-stone-unlock-sprite-mega" src="${r}" alt="">
                </div>
                <p class="mega-stone-unlock-intro">${n}</p>
                <div class="mega-stone-unlock-actions">
                    <button type="button" class="btn btn-save" data-action="closeMegaStoneUnlockModal">${l}</button>
                </div>
            </div>
        </div>
    `,document.body.appendChild(u)}function j(){const t=document.getElementById("ultimateSlotUnlockOverlay");t&&t.remove()}function Ce(t){j();const e=t||(typeof p<"u"?p:null);if(!e||typeof e.t!="function"||typeof document>"u"||!document.body)return!1;const s=e.t("ultimateSlot.unlockModalTitle"),o=e.t("ultimateSlot.unlockModalBody"),a=e.t("ultimateSlot.unlockModalOk"),n=e.t("ultimateSlot.unlockModalOpen"),l=e.t("ultimateSlot.short"),r=m=>{let u="";return m==null?u="":(typeof m=="string"||typeof m=="number"||typeof m=="boolean")&&(u=String(m)),u.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")},c=document.createElement("div");return c.id="ultimateSlotUnlockOverlay",c.className="stats-modal js-modal-overlay show ultimate-slot-unlock-modal",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),c.setAttribute("aria-labelledby","ultimateSlotUnlockTitle"),c.style.zIndex="10002",c.addEventListener("click",function(m){m.target===c&&j()}),c.innerHTML=`
        <div class="stats-content ultimate-slot-unlock-content" data-action="stopPropagation" data-action-stop>
            <div class="stats-header">
                <h2 id="ultimateSlotUnlockTitle">${r(s)}</h2>
                <button type="button" class="stats-close" data-action="closeUltimateSlotUnlockModal" aria-label="${r(a)}">&#10005;</button>
            </div>
            <div class="ultimate-slot-unlock-body">
                <div class="ultimate-slot-unlock-icon" aria-hidden="true">
                    <button type="button" class="sort-btn ultimate-slot-unlock-preview-btn" disabled tabindex="-1">
                        <span>${r(l)}</span>
                    </button>
                </div>
                <p class="ultimate-slot-unlock-intro">${r(o)}</p>
                <div class="ultimate-slot-unlock-actions">
                    <button type="button" class="upgrade-btn ultimate-slot-unlock-cta" data-action="openUltimateSlotFromIntroModal">${r(n)}</button>
                </div>
            </div>
        </div>
    `,document.body.appendChild(c),document.getElementById("ultimateSlotUnlockOverlay")===c}function ce(t){const e=t.secondaryType?`<span class="type-badge type-${t.secondaryType}">${t.secondaryType}</span>`:"",s=i("state.levelShort","Lvl"),o=t.isShadow?" shadow":"",a=t.closeAction||"closeCreatureModal",n=t.rarityDisplayLabel??t.rarity??"",l=!!t.compactLayout,r=l||t.hideExpBar?"":`<div class="creature-modal-exp-bar">
                <div class="creature-modal-exp-fill" style="width:${t.expPercent||0}%;"></div>
            </div>`,c=l&&t.titleLine?`<div class="egg-hatch-compact-title"><span class="creature-name-pixel">${t.titleLine}</span></div>`:"",m=l?"":`<div class="creature-modal-stats-header">
                        <div class="creature-modal-stats-box-title">
                            <span class="creature-name-pixel">${t.titleLine}</span>
                            <span class="creature-modal-header-actions">${t.ivButton??""}</span>
                        </div>
                        <div class="creature-modal-level-block">
                            <div class="creature-modal-level-text">
                                ${s} ${t.level} / ${t.maxLevel}
                            </div>
                            ${r}
                        </div>
                    </div>`,u=l||t.hideMoveCards?"":`<div class="creature-modal-cards">
                    <div class="creature-modal-move-column">
                        ${t.moveHTML??""}
                    </div>
                    <div class="creature-modal-info">
                        ${t.talentHTML??""}
                        ${t.ultimateHTML??""}
                        ${t.itemHTML??""}
                    </div>
                </div>`,g=t.hideActions?"":`<div class="creature-modal-actions">
                    ${t.actionsHTML??""}
                </div>`;return`
        <button class="stats-close creature-modal-close" data-action="${a}">&times;</button>
        ${c}
        <div class="${l?"creature-modal-grid creature-modal-grid--egg-hatch-compact":"creature-modal-grid"}">
            <div class="creature-modal-sprite-wrap${o}">
                <div class="creature-modal-sprite-frame">
                    ${!l&&t.favoriteButtonHTML?t.favoriteButtonHTML:""}
                    <img src="${t.spriteUrl}" alt="${t.creatureName}" class="creature-modal-sprite">
                </div>
                <div class="creature-modal-badges">
                    <div class="creature-modal-badges-types">
                        <span class="type-badge type-${t.type}">${t.type}</span>
                        ${e}
                    </div>
                    <div class="creature-modal-badges-rarity">
                        <span class="rarity-label ${t.rarity}">${n}</span>
                    </div>
                    ${t.pokerusActive?`<div class="creature-modal-pokerus-row">
                            <img src="img/PKRS.png"
                                 alt="PKRS"
                                 class="creature-modal-pokerus-icon"
                                 onmouseenter="game.scheduleTooltip(event, 'Pokérus${t.pokerusLevelLabel?" "+t.pokerusLevelLabel:""}', '${(t.pokerusRemainingLabel||"").replace(/'/g,"\\'")}')"
                                 onmouseleave="game.hideTooltip()">
                            ${t.pokerusLevelLabel?`<span class="creature-modal-pokerus-level">${t.pokerusLevelLabel}</span>`:""}
                           </div>`:""}
                    ${t.megaStoneUnlocked&&(t.megaFormDisplayName||t.megaVariantSelectHTML)?`
                        ${t.megaVariantSelectHTML||""}
                        <div class="creature-modal-mega-form-label" title="${String(i("mega.sheetMegaHint","")).replace(/"/g,"&quot;")}">
                            <span class="creature-modal-mega-name">${t.megaFormDisplayName||""}</span>
                        </div>`:""}
                </div>
            </div>
            <div class="creature-modal-main">
                ${l?"":t.tokenDisplay??""}
                <div class="creature-modal-stats-box">
                    ${m}
                    <div class="creature-modal-stats-row">
                        ${t.statsRowsHTML??""}
                    </div>
                </div>
                ${u}
            </div>
            ${l?"":g}
        </div>
    `}function $(t,e,s,o,a){const n=t.t("modal.creature.ivTitle"),l=t.t("modal.creature.ivDesc"),r=a!=null?` <span class="stat-iv stat-iv-tooltip" onmouseenter="game.scheduleTooltip(event, '${n}', '${l}')" onmouseleave="game.hideTooltip()">IV (${a})</span>`:"";return`<div class="stat-item-inner">
        <span class="stat-icon">${o}</span>
        <span class="stat-label"><strong>${e}</strong></span>
        <span class="stat-right">
            <span class="stat-value">${L(s)}</span>${r}
        </span>
    </div>`}function xe(t,e){const s=typeof t.getLocalizedPokemonName=="function"?t.getLocalizedPokemonName(e.name):e.name,o=`${e.isShadow?"[Shadow] ":""}${s}${e.isShiny?` ${Vt("Shiny")}`:""}`,a=k(e.name,e.isShiny,!1),n=String(e.rarity||"common"),l=typeof t.getRarityLabel=="function"?t.getRarityLabel(n):n,r=`
        <div class="stat-item">${$(t,"HP",e.maxHp,"&#10084;&#65039;",e.ivHP)}</div>
        <div class="stat-item">${$(t,t.t("modal.creature.atkShort"),e.attack,"&#9876;&#65039;",e.ivAttack)}</div>
        <div class="stat-item">${$(t,t.t("modal.creature.spAtkShort"),e.spattack,"&#128165;",e.ivSpAttack)}</div>
        <div class="stat-item">${$(t,t.t("modal.creature.defShort"),e.defense,"&#128737;&#65039;",e.ivDefense)}</div>
        <div class="stat-item">${$(t,t.t("modal.creature.spDefShort"),e.spdefense,"&#128160;",e.ivSpDefense)}</div>
        <div class="stat-item">${$(t,t.t("modal.creature.speedShort"),e.speed,"&#128095;",e.ivSpeed)}</div>
    `;return ce({titleLine:o,spriteUrl:a,creatureName:s,type:e.type,secondaryType:e.secondaryType||"",rarity:n,rarityDisplayLabel:l,isShadow:!!e.isShadow,statsRowsHTML:r,hideMoveCards:!0,hideActions:!0,closeAction:"closeEggHatchModal",compactLayout:!0})}function Ee(){const t=document.getElementById("creatureModal");t&&t.classList.remove("show")}export{$e as C,ge as D,ae as E,ve as O,we as S,Ce as T,ne as _,K as a,Me as b,F as c,oe as d,W as f,he as g,ce as h,Ee as i,Gt as k,be as l,ie as m,Le as n,_ as o,fe as p,Se as r,ye as s,xe as t,j as u,ke as v,Te as w,Be as x,Ie as y};
