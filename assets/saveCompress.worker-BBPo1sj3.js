(function() {
	function O(u, i, s) {
		if (u == null) return "";
		let l, o;
		const d = {}, _ = {};
		let a = "", y = "", c = "", p = 2, x = 3, f = 2;
		const n = [];
		let e = 0, t = 0;
		for (let r = 0; r < u.length; r += 1) if (a = u.charAt(r), Object.prototype.hasOwnProperty.call(d, a) || (d[a] = x++, _[a] = !0), y = c + a, Object.prototype.hasOwnProperty.call(d, y)) c = y;
		else {
			if (Object.prototype.hasOwnProperty.call(_, c)) {
				if (c.charCodeAt(0) < 256) {
					for (l = 0; l < f; l++) e = e << 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++;
					for (o = c.charCodeAt(0), l = 0; l < 8; l++) e = e << 1 | o & 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = o >> 1;
				} else {
					for (o = 1, l = 0; l < f; l++) e = e << 1 | o, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = 0;
					for (o = c.charCodeAt(0), l = 0; l < 16; l++) e = e << 1 | o & 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = o >> 1;
				}
				p--, p === 0 && (p = Math.pow(2, f), f++), delete _[c];
			} else {
				const h = d[c];
				if (h === void 0) continue;
				for (o = h, l = 0; l < f; l++) e = e << 1 | o & 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = o >> 1;
			}
			p--, p === 0 && (p = Math.pow(2, f), f++), d[y] = x++, c = String(a);
		}
		if (c !== "") {
			if (Object.prototype.hasOwnProperty.call(_, c)) {
				if (c.charCodeAt(0) < 256) {
					for (l = 0; l < f; l++) e = e << 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++;
					for (o = c.charCodeAt(0), l = 0; l < 8; l++) e = e << 1 | o & 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = o >> 1;
				} else {
					for (o = 1, l = 0; l < f; l++) e = e << 1 | o, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = 0;
					for (o = c.charCodeAt(0), l = 0; l < 16; l++) e = e << 1 | o & 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = o >> 1;
				}
				p--, p === 0 && (p = Math.pow(2, f), f++), delete _[c];
			} else {
				const r = d[c];
				if (r !== void 0) for (o = r, l = 0; l < f; l++) e = e << 1 | o & 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = o >> 1;
			}
			p--, p === 0 && (p = Math.pow(2, f), f++);
		}
		for (o = 2, l = 0; l < f; l++) e = e << 1 | o & 1, t === i - 1 ? (t = 0, n.push(s(e)), e = 0) : t++, o = o >> 1;
		for (;;) if (e = e << 1, t === i - 1) {
			n.push(s(e));
			break;
		} else t++;
		return n.join("");
	}
	function j(u) {
		return u == null ? "" : O(u, 15, (i) => String.fromCharCode(i + 32)) + " ";
	}
	const w = globalThis;
	w.onmessage = (u) => {
		const i = u.data;
		if (!(!i || typeof i.id != "number" || typeof i.json != "string")) try {
			w.postMessage({
				id: i.id,
				compressed: j(i.json)
			});
		} catch (s) {
			w.postMessage({
				id: i.id,
				error: s instanceof Error ? s.message : String(s)
			});
		}
	};
})();
