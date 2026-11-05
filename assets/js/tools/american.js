/* Nicknamerly — American name generator logic. Reuses random-data.js (US SSA first names, Census 2010 surnames). */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.random;
	if (!NKNM || !D) return;

	var LAST = D.l;

	/** Drop names that are far more common for the other gender and one known data typo. */
	function clean(own, other) {
		var rank = {};
		other.forEach(function (n, i) { if (rank[n] === undefined) rank[n] = i; });
		return own.filter(function (n, i) { return n !== 'Brain' && !(rank[n] !== undefined && rank[n] * 3 < i); });
	}

	function bands(pool) {
		return {
			all: pool,
			popular: pool.slice(0, 150),
			classic: pool.slice(150, 600),
			unique: pool.slice(600),
			short: pool.filter(function (n) { return n.length <= 4; })
		};
	}

	var POOLS = { f: bands(clean(D.f, D.m)), m: bands(clean(D.m, D.f)) };

	function ranked(list) {
		var r = Math.random();
		return list[Math.floor(list.length * r * r)];
	}

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function startsWith(list, want) {
		return list.filter(function (n) { return n.charAt(0).toUpperCase() === want; });
	}

	function first(sex, style, want) {
		var B = POOLS[sex];
		var list = B[style] || B.all;
		if (want) {
			var f = startsWith(list, want);
			if (!f.length) f = startsWith(B.all, want);
			if (f.length) list = f;
		}
		return style === 'unique' || style === 'short' || want ? NKNM.pick(list) : ranked(list);
	}

	function surname(style) {
		// A starting letter applies to the first name only; surnames stay common and realistic.
		var s = ranked(LAST);
		if (style === 'short') {
			for (var i = 0; i < 6 && s.length > 6; i++) s = ranked(LAST);
		}
		return s;
	}

	NKNM.register('american', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : '';
			var want = initialOf(o.name);
			var type = o.gender || 'mix';
			var sex = type === 'f' || type === 'm' ? type : NKNM.chance(0.5) ? 'f' : 'm';
			var given = first(sex, style, want);
			if (type === 'first') return given;
			var out = given;
			if (type === 'mi') out += ' ' + NKNM.pick('ABCDEFGHJKLMNPRSTW'.split('')) + '.';
			return out + ' ' + surname(style);
		}
	});
})();
