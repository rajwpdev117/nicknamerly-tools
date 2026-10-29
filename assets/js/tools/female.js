/* Nicknamerly — female name generator logic. Reuses random-data.js (US SSA first names, Census surnames). */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.random;
	if (!NKNM || !D) return;

	var OWN = D.f, OTHER = D.m, LAST = D.l;
	var rank = {};
	OTHER.forEach(function (n, i) { if (rank[n] === undefined) rank[n] = i; });

	// Drop names that are far more common for the other gender (e.g. a stray female name in the male list).
	var POOL = OWN.filter(function (n, i) { return n !== 'Brain' && !(rank[n] !== undefined && rank[n] * 3 < i); });

	var BAND = {
		popular: POOL.slice(0, 150),
		classic: POOL.slice(150, 600),
		unique: POOL.slice(600),
		short: POOL.filter(function (n) { return n.length <= 4; }),
		long: POOL.filter(function (n) { return n.length >= 8; })
	};

	function ranked(list) {
		var r = Math.random();
		return list[Math.floor(list.length * r * r)];
	}

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function pick(style, want) {
		var list = BAND[style] || POOL;
		if (want) {
			var f = list.filter(function (n) { return n.charAt(0).toUpperCase() === want; });
			if (!f.length) f = POOL.filter(function (n) { return n.charAt(0).toUpperCase() === want; });
			if (f.length) list = f;
		}
		return style === 'unique' || style === 'long' || style === 'short' || want ? NKNM.pick(list) : ranked(list);
	}

	NKNM.register('female', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : '';
			var first = pick(style, initialOf(o.name));
			return o.gender === 'full' ? first + ' ' + ranked(LAST) : first;
		}
	});
})();
