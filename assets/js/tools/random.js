/* Nicknamerly — random name generator logic. Depends on nknm-core.js and random-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.random;
	if (!NKNM || !D) return;

	/** Pick from a most-popular-first list, favouring common names but reaching deep into the list. */
	function pickRanked(list) {
		var r = Math.random();
		return list[Math.floor(list.length * r * r)];
	}
	function first(gender) {
		var g = gender;
		if (g !== 'female' && g !== 'male') g = NKNM.chance(0.5) ? 'female' : 'male';
		return pickRanked(g === 'female' ? D.f : D.m);
	}
	function last() { return pickRanked(D.l); }
	function middle(gender) {
		var m = first(gender);
		return NKNM.chance(0.18) ? m.charAt(0) + '.' : m;
	}

	NKNM.register('random', {
		generate: function (o) {
			var g = o.gender;
			if (g !== 'female' && g !== 'male') g = '';
			switch (o.style) {
				case 'first': return first(g);
				case 'last': return last();
				case 'full3':
					return first(g) + ' ' + middle(g) + ' ' + last();
				default:
					return first(g) + ' ' + last();
			}
		}
	});
})();
