/* Nicknamerly — drow name generator logic. Depends on nknm-core.js and drow-data.js. Names are built from invented syllables, each with its own meaning. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.drow;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var KINDS = ['noble', 'common', 'exile'];

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

	function house() {
		for (var i = 0; i < 20; i++) {
			var a = NKNM.pick(D.h[0]);
			var b = NKNM.pick(D.h[1]);
			if (a[0].slice(-1).toLowerCase() === b[0].charAt(0).toLowerCase()) continue;
			return { n: cap((a[0] + b[0]).toLowerCase()), p: a[1] + '-' + b[1].toLowerCase(), m: a[2] + ' + ' + b[2] };
		}
		return { n: 'Velrath', p: 'VEL-rath', m: 'silk + clan' };
	}

	NKNM.register('drow', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(KINDS);
			if (style === 'house') {
				var hh = house();
				return { t: 'House ' + hh.n, k: '', m: 'Pronounced ' + hh.p + ' · ' + hh.n + ' = ' + hh.m };
			}
			var g = o.gender || 'any';
			var firstOnly = g === 'first';
			var sex = g === 'f' || g === 'm' || g === 'u' ? g : NKNM.pick(['f', 'm', 'u']);
			var f = first(sex, initialOf(o.name));
			if (!f) return null;
			if (firstOnly) return { t: f.n, k: '', m: 'Pronounced ' + f.p + ' · means ' + f.m };
			var base = f.n + ' (' + f.p + ') = ' + f.m;
			if (style === 'noble') {
				var h = house();
				return { t: f.n + ' of House ' + h.n, k: '', m: base + ' · House ' + h.n + ' (' + h.p + ') = ' + h.m };
			}
			if (style === 'exile') {
				var e = NKNM.pick(D.x);
				return { t: f.n + ' ' + e[0], k: '', m: base + ' · ' + e[0] + ' = ' + e[1] };
			}
			var c = NKNM.pick(D.t);
			return { t: f.n + ' ' + c[0], k: '', m: base + ' · ' + c[0] + ' = ' + c[1] };
		}
	});
})();
