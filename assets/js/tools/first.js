/* Nicknamerly — first name generator logic. Reuses random-data.js (US SSA first names). Unisex = names well used for both girls and boys. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.random;
	if (!NKNM || !D) return;

	var rf = {}, rm = {};
	D.f.forEach(function (n, i) { if (rf[n] === undefined) rf[n] = i; });
	D.m.forEach(function (n, i) { if (rm[n] === undefined) rm[n] = i; });

	/** Drop names that are far more common for the other gender and one known data typo. */
	function clean(own, otherRank) {
		return own.filter(function (n, i) { return n !== 'Brain' && !(otherRank[n] !== undefined && otherRank[n] * 3 < i); });
	}

	function bands(pool, a, b) {
		return {
			all: pool,
			popular: pool.slice(0, a),
			classic: pool.slice(a, b),
			unique: pool.slice(b),
			short: pool.filter(function (n) { return n.length <= 4; }),
			long: pool.filter(function (n) { return n.length >= 7; })
		};
	}

	// Unisex: used for both sexes at a similar rate (within 4x), minus a few that read as one gender, plus well-known unisex names.
	var OUT = { Baby: 1, Antonia: 1, Guadalupe: 1, Kenya: 1, Nakia: 1, Brain: 1 };
	var EXTRA = ['Alex', 'Robin', 'Cameron', 'Parker', 'Hayden', 'Logan', 'Jesse', 'Leslie', 'Shannon', 'Kelly', 'Dallas', 'Terry', 'Tracy', 'Charlie', 'River', 'Rowan', 'Sam', 'Drew', 'Kai', 'Phoenix', 'Emery', 'Ellis', 'Rory', 'Sawyer', 'Blake', 'Max', 'Shay', 'Rey', 'Eden', 'Sasha', 'Tatum', 'Marley'];
	var seen = {};
	var U = D.f.filter(function (n) {
		return rm[n] !== undefined && rm[n] < rf[n] * 4 && rm[n] * 4 > rf[n];
	}).concat(EXTRA).filter(function (n) {
		if (OUT[n] || seen[n] || (rf[n] === undefined && rm[n] === undefined)) return false;
		seen[n] = true;
		return true;
	});
	function score(n) {
		return Math.min(rf[n] === undefined ? 5000 : rf[n], rm[n] === undefined ? 5000 : rm[n]);
	}
	U.sort(function (a, b) { return score(a) - score(b); });

	var POOLS = { f: bands(clean(D.f, rm), 150, 600), m: bands(clean(D.m, rf), 150, 600), u: bands(U, 30, 70) };

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

	function pick(sex, style, want) {
		var B = POOLS[sex];
		var list = B[style] && B[style].length ? B[style] : B.all;
		if (want) {
			var f = startsWith(list, want);
			if (!f.length) f = startsWith(B.all, want);
			if (f.length) list = f;
		}
		return style === 'unique' || style === 'short' || style === 'long' || want ? NKNM.pick(list) : ranked(list);
	}

	NKNM.register('first', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : '';
			var g = o.gender;
			var sex = g === 'f' || g === 'm' || g === 'u' ? g : NKNM.chance(0.5) ? 'f' : 'm';
			return pick(sex, style, initialOf(o.name));
		}
	});
})();
