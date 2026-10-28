/* Nicknamerly — Japanese name generator logic. Depends on nknm-core.js and japanese-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.japanese;
	if (!NKNM || !D) return;

	function all(gender) {
		return gender === 'female' ? D.f : gender === 'male' ? D.m : D.f.concat(D.m);
	}

	/** Names that start like the visitor's name (two letters if possible, else one). */
	function matching(list, initial) {
		if (!initial) return [];
		function starts(p) { return list.filter(function (n) { return n[1].toLowerCase().indexOf(p) === 0; }); }
		var a = starts(initial.slice(0, 2).toLowerCase());
		return a.length ? a : starts(initial.slice(0, 1).toLowerCase());
	}

	/** About half of the results start like the visitor's name; the rest keep the list varied. */
	function given(o) {
		var list = all(o.gender);
		var initial = (o.name || '').replace(/[^A-Za-z]/g, '').slice(0, 2);
		var m = matching(list, initial);
		if (m.length && NKNM.chance(0.5)) return NKNM.pick(m);
		return NKNM.pick(list);
	}

	NKNM.register('japanese', {
		generate: function (o) {
			var s = NKNM.pick(D.s);
			if (o.style === 'surname') {
				return { t: s[1], k: s[0], m: s[2] };
			}
			var g = given(o);
			if (o.style === 'given') {
				return { t: g[1], k: g[0], m: g[2] };
			}
			var meaning = g[1] + ' = ' + g[2] + ' · ' + s[1] + ' = ' + s[2];
			if (o.style === 'jp') {
				return { t: s[1] + ' ' + g[1], k: s[0] + g[0], m: meaning };
			}
			return { t: g[1] + ' ' + s[1], k: s[0] + g[0], m: meaning };
		}
	});
})();
