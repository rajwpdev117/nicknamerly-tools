/* Nicknamerly — dragonborn name generator logic. Depends on nknm-core.js and dragonborn-data.js. Names are built from invented syllables, each with its own meaning. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.dragonborn;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var KINDS = ['fire', 'frost', 'storm', 'venom'];

	function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function first(sex, want) {
		var starts = D.s;
		if (want) {
			var f = starts.filter(function (p) { return p[0].charAt(0).toUpperCase() === want; });
			if (f.length) starts = f;
		}
		var ends = D.e[sex];
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

	function clan(kind) {
		for (var i = 0; i < 20; i++) {
			var a = NKNM.pick(D.c[kind]);
			var b = NKNM.pick(D.b);
			if (a[0].slice(-1).toLowerCase() === b[0].charAt(0).toLowerCase()) continue;
			return { n: cap((a[0] + b[0]).toLowerCase()), m: a[1] + ' + ' + b[1] };
		}
		return { n: 'Emberscale', m: 'ember + scale' };
	}

	NKNM.register('dragonborn', {
		generate: function (o) {
			var kind = o.style && o.style !== 'random' ? o.style : NKNM.pick(KINDS);
			var g = o.gender || 'any';
			var firstOnly = g === 'first';
			var sex = g === 'f' || g === 'm' || g === 'u' ? g : NKNM.pick(['f', 'm', 'u']);
			var f = first(sex, initialOf(o.name));
			if (!f) return null;
			if (firstOnly) return { t: f.n, k: '', m: 'Pronounced ' + f.p + ' · means ' + f.m };
			var c = clan(kind);
			if (g === 'nick') {
				var n = NKNM.pick(D.n);
				return { t: f.n + ' "' + n[0] + '" ' + c.n, k: '', m: f.n + ' (' + f.p + ') = ' + f.m + ' · called "' + n[0] + '" as a hatchling = ' + n[1] + ' · ' + c.n + ' = ' + c.m };
			}
			return { t: f.n + ' ' + c.n, k: '', m: f.n + ' (' + f.p + ') = ' + f.m + ' · ' + c.n + ' = ' + c.m };
		}
	});
})();
