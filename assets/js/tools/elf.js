/* Nicknamerly — elf name generator logic. Depends on nknm-core.js and elf-data.js. Names are built from invented syllables, each with its own meaning. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.elf;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var KINDS = ['high', 'wood', 'dark', 'half'];

	function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function startsWith(list, want) {
		return list.filter(function (p) { return p[0].charAt(0).toUpperCase() === want; });
	}

	/** Fantasy first name: a start part plus a gendered ending, with spelling, pronunciation and meaning. */
	function first(kind, sex, want) {
		var set = D[kind === 'half' ? (NKNM.chance(0.5) ? 'high' : 'wood') : kind];
		var starts = set.s;
		if (want) {
			var f = startsWith(starts, want);
			if (f.length) starts = f;
		}
		var ends = set.e[sex];
		for (var i = 0; i < 20; i++) {
			var a = NKNM.pick(starts);
			var b = NKNM.pick(ends);
			var name = a[0] + b[0];
			if (a[0].slice(-1).toLowerCase() === b[0].charAt(0).toLowerCase()) continue;
			if (/(.)\1\1/i.test(name) || BAD.test(name)) continue;
			return { n: name, p: a[1] + '-' + b[1].toLowerCase(), m: '"' + a[2] + '-' + b[2] + '"' };
		}
		return null;
	}

	function house(kind) {
		var set = D[kind];
		for (var i = 0; i < 20; i++) {
			var a = NKNM.pick(set.h[0]);
			var b = NKNM.pick(set.h[1]);
			if (a[0].slice(-1).toLowerCase() === b[0].charAt(0).toLowerCase()) continue;
			return { n: a[0] + b[0], m: a[2] + ' + ' + (b[2] || b[1]) };
		}
		return { n: 'Starweaver', m: 'star + weaver' };
	}

	function elven(kind, sex, want, firstOnly) {
		var f = first(kind, sex, want);
		if (!f) return null;
		var pron = f.p;
		if (firstOnly) return { t: f.n, k: '', m: 'Pronounced ' + pron + ' · means ' + f.m };
		var h = house(kind);
		return { t: f.n + ' ' + cap(h.n.toLowerCase()), k: '', m: f.n + ' (' + pron + ') = ' + f.m + ' · ' + cap(h.n.toLowerCase()) + ' = ' + h.m };
	}

	function christmas(want, firstOnly) {
		var fl = D.xmas.f;
		if (want) {
			var s = startsWith(fl, want);
			if (s.length) fl = s;
		}
		var a = NKNM.pick(fl);
		if (firstOnly) return { t: a[0], k: '', m: a[0] + ' = ' + a[1] };
		var b = NKNM.pick(D.xmas.l);
		return { t: a[0] + ' ' + b[0], k: '', m: a[0] + ' = ' + a[1] + ' · ' + b[0] + ' = ' + b[1] };
	}

	NKNM.register('elf', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : '';
			if (!style) style = NKNM.chance(0.12) ? 'xmas' : NKNM.pick(KINDS);
			var g = o.gender || 'any';
			var firstOnly = g === 'first';
			var sex = g === 'f' || g === 'm' || g === 'u' ? g : NKNM.pick(['f', 'm', 'u']);
			var want = initialOf(o.name);
			if (style === 'xmas') return christmas(want, firstOnly);
			return elven(style, sex, want, firstOnly);
		}
	});
})();
