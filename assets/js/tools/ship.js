/* Nicknamerly — ship name generator logic. Depends on nknm-core.js and ship-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.ship;
	if (!NKNM || !D) return;

	var VOWELS = 'aeiouy';
	var CLUSTERS = ['st', 'tr', 'br', 'ch', 'sh', 'th', 'nd', 'ck', 'll', 'ss', 'rn', 'rl', 'nn', 'mm', 'ph', 'cr', 'dr', 'fl', 'gl', 'gr', 'pl', 'pr', 'sc', 'sk', 'sl', 'sm', 'sn', 'sp', 'sw', 'tw', 'wh', 'bl', 'cl', 'fr', 'kn', 'nt', 'rt', 'ry', 'ly', 'ny', 'my', 'ng', 'rd', 'ld', 'lt', 'mp', 'lm', 'rm', 'rs', 'ls', 'ns', 'ms'];

	var BAD = /sex|ass|cum|fuc|fuk|dic|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|hoe|pee|poo|kkk|nazi|hate/;

	function isV(c) { return VOWELS.indexOf(c) !== -1; }

	function plain(s) {
		return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z]/g, '');
	}

	/** First word of a name, letters only, capitalised. */
	function firstWord(raw) {
		var w = String(raw || '').trim().split(/\s+/)[0] || '';
		w = plain(w);
		return w ? NKNM.cap(w.toLowerCase()) : '';
	}

	function runLen(s) {
		var maxC = 0, maxV = 0, c = 0, v = 0, same = 1, maxSame = 1;
		for (var i = 0; i < s.length; i++) {
			if (isV(s[i])) { v++; c = 0; } else { c++; v = 0; }
			if (c > maxC) maxC = c;
			if (v > maxV) maxV = v;
			if (i && s[i] === s[i - 1]) { same++; if (same > maxSame) maxSame = same; } else { same = 1; }
		}
		return { c: maxC, v: maxV, same: maxSame };
	}

	/** Syllable boundaries of a lowercase name, as cut positions (1..len-1). */
	function cuts(w) {
		var cs = [];
		var n = w.length;
		var i = 0;
		var firstVowel = -1;
		for (i = 0; i < n; i++) { if (isV(w.charAt(i))) { firstVowel = i; break; } }
		if (firstVowel > 0) cs.push(firstVowel); // after the opening consonants, e.g. Br|ad
		// vowel groups
		var groups = [];
		var m;
		var re = /[aeiouy]+/g;
		while ((m = re.exec(w))) groups.push({ s: m.index, e: m.index + m[0].length });
		// split some vowel pairs into two syllables: ia io ua eo oa ea(at the end) ie(at the end handled as one)
		var syl = [];
		groups.forEach(function (g) {
			var t = w.slice(g.s, g.e);
			if (t.length === 2 && /^(ia|io|ua|eo|oa|ao|ii|oi)$/.test(t)) {
				syl.push({ s: g.s, e: g.s + 1 });
				syl.push({ s: g.s + 1, e: g.e });
			} else {
				syl.push(g);
			}
		});
		// silent final e after a consonant joins the previous syllable
		if (syl.length > 1) {
			var last = syl[syl.length - 1];
			if (last.e === n && w.slice(last.s, last.e) === 'e' && !isV(w.charAt(last.s - 1)) && !/(le|re|me|ne)$/.test(w.slice(-2)) === false) {
				// "le/re/me/ne" endings are usually silent too; treat all final e as silent
			}
			if (last.e === n && w.slice(last.s, last.e) === 'e' && last.s - 1 >= 0 && !isV(w.charAt(last.s - 1))) syl.pop();
		}
		for (i = 0; i < syl.length - 1; i++) {
			var gap = w.slice(syl[i].e, syl[i + 1].s); // consonants between nuclei
			var cut;
			if (gap.length === 0) cut = syl[i].e;
			else if (gap.length === 1) cut = syl[i].e; // V|CV
			else cut = syl[i].e + 1; // VC|CV
			cs.push(cut);
		}
		var seen = {};
		return cs.filter(function (c) { if (c < 1 || c >= n || seen[c]) return false; seen[c] = true; return true; });
	}

	/** Blends prefix(A) + suffix(B). Joins at syllable boundaries rank highest. */
	function blends(a, b) {
		var A = a.toLowerCase(), B = b.toLowerCase();
		var out = [];
		var cA = cuts(A), cB = cuts(B);
		var onsetA = cA.length && !isV(A.charAt(0)) ? cA[0] : -1;
		for (var i = 2; i <= A.length; i++) {
			for (var j = 0; j <= B.length - 2; j++) {
				var pre = A.slice(0, i), suf = B.slice(j);
				var cand = pre + suf;
				var embed = j === 0;
				var wholeA = i === A.length;
				if (wholeA && (embed || cB.indexOf(j) === -1)) continue; // Mike + nny
				if (embed && !(i === onsetA && isV(B.charAt(0)))) continue; // Br + Angelina
				if (cand === A || cand === B || (wholeA && cand.indexOf(B) !== -1) || cand.length < 4 || cand.length > 11) continue;
				if (!embed && !wholeA && (cand.indexOf(A) !== -1 || cand.indexOf(B) !== -1)) continue;
				if (BAD.test(cand)) continue;
				var r = runLen(cand);
				if (r.same > 2 || r.c > 2 || r.v > 2) continue;
				var x = pre.charAt(pre.length - 1), y = suf.charAt(0);
				if (!/[aeiouy]/.test(pre) && !isV(y)) continue;
				if (!isV(x) && !isV(y) && CLUSTERS.indexOf(x + y) === -1) continue;
				if (x === y && 'lsnmtr'.indexOf(x) === -1) continue;
				if (isV(x) && isV(y) && ['ia', 'io', 'ea', 'ie', 'ou', 'ai', 'ay', 'oe', 'ue', 'ey', 'ua', 'eo', 'oa'].indexOf(x + y) === -1) continue;
				var score = 0;
				var alignA = cA.indexOf(i) !== -1, alignB = j === 0 || cB.indexOf(j) !== -1;
				if (alignA && alignB) score += 4; else if (alignA || alignB) score += 1;
				if (isV(x) !== isV(y)) score += 2;
				else if (!isV(x)) score += 1;
				else score -= 1;
				if (x === y) score -= 2;
				var len = cand.length;
				if (len >= 5 && len <= 8) score += 3; else if (len === 9) score += 1; else if (len > 9) score -= 2;
				var share = Math.min(i / A.length, (B.length - j) / B.length);
				if (share >= 0.4) score += 2; else if (share >= 0.3) score += 1; else score -= 1;
				out.push({ name: NKNM.cap(cand), score: score });
			}
		}
		return out;
	}

	function pool(a, b) {
		var all = blends(a, b).concat(blends(b, a));
		var seen = {}, list = [];
		all.forEach(function (o) {
			var k = o.name.toLowerCase();
			if (seen[k]) { if (o.score > seen[k].score) seen[k].score = o.score; return; }
			seen[k] = o;
			list.push(o);
		});
		list.sort(function (p, q) { return q.score - p.score; });
		var best = list.length ? list[0].score : 0;
		var good = list.filter(function (o) { return o.score >= best - 3 && o.score > 0; });
		if (good.length < 6) good = list.filter(function (o) { return o.score > 0; }).slice(0, 12);
		if (!good.length) good = list.slice(0, 8);
		return good;
	}

	var cache = { key: '', list: [] };
	function getPool(a, b) {
		var key = a + '|' + b;
		if (cache.key !== key) cache = { key: key, list: pool(a, b) };
		return cache.list;
	}

	function pickWeighted(list) {
		// favour higher scores: pick index with a bias toward the front
		var r = Math.random();
		return list[Math.floor(list.length * r * r)];
	}

	NKNM.register('ship', {
		generate: function (o) {
			var a = firstWord(o.name), b = firstWord(o.name2);
			if (!a && !b) {
				var pr = NKNM.pick(D.pairs);
				a = pr[0]; b = pr[1];
			} else if (!a) {
				a = NKNM.pick(D.pairs)[0];
			} else if (!b) {
				b = NKNM.pick(D.pairs)[1];
			}
			var list = getPool(a, b);
			if (!list.length) return a + b;
			var blend = pickWeighted(list).name;
			if (list.length < 8 && o.style === 'blend' && NKNM.chance(0.35)) {
				return NKNM.pick([a + b, b + a, a + '-' + b, b + '-' + a]);
			}
			switch (o.style) {
				case 'short':
					for (var t = 0; t < 12 && blend.length > 6; t++) blend = pickWeighted(list).name;
					return blend.length > 7 ? '' : blend;
				case 'hashtag':
					return NKNM.pick(['#' + blend, '#' + blend, '#' + a + b, '#' + a + 'And' + b, '#' + blend + 'Forever', '#Team' + blend]);
				case 'mix':
					return NKNM.pick([blend, blend, blend, '#' + blend, a + ' + ' + b + ' = ' + blend, blend + 'Squad']);
				default:
					return blend;
			}
		}
	});
})();
