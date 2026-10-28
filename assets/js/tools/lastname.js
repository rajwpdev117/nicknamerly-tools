/* Nicknamerly — last name generator logic. Depends on nknm-core.js and lastname-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.lastname;
	if (!NKNM || !D) return;

	/** Pick from a most-common-first list; `bias` > 1 favours the common end. */
	function ranked(list, from, to, bias) {
		var span = to - from;
		return list[from + Math.floor(span * Math.pow(Math.random(), bias))];
	}
	function fantasy() {
		var a = NKNM.pick(D.p);
		var b = NKNM.pick(D.s);
		return a + b;
	}

	NKNM.register('lastname', {
		generate: function (o) {
			var n = D.l.length;
			switch (o.style) {
				case 'rare': return ranked(D.l, 1500, n, 1);
				case 'fantasy': return fantasy();
				case 'double':
					return ranked(D.l, 0, 2000, 2) + '-' + ranked(D.l, 0, 2000, 2);
				default:
					return ranked(D.l, 0, 1500, 2);
			}
		}
	});
})();
