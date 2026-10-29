/* Nicknamerly — pen name generator logic. Depends on nknm-core.js and pen-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.pen;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var STYLES = ['romance', 'mystery', 'fantasy', 'scifi', 'literary', 'kids'];
	var LETTERS = 'ABCDEFGHIJKLMNOPRSTW';

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function make(style, g) {
		var d = D[style];
		var sex = g === 'female' ? 'f' : g === 'male' ? 'm' : (NKNM.chance(0.5) ? 'f' : 'm');
		var first = NKNM.pick(d[sex]);
		var last = NKNM.pick(d.s);
		if (style !== 'kids' && NKNM.chance(0.14)) {
			var i2 = LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
			var n = first.charAt(0) + '. ' + i2 + '. ' + last;
			return { name: n, first: first };
		}
		return { name: first + ' ' + last, first: first };
	}

	NKNM.register('pen', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(STYLES);
			var want = initialOf(o.name);
			var best = null;
			for (var i = 0; i < 60; i++) {
				var r = make(style, o.gender);
				if (BAD.test(r.name)) continue;
				best = r;
				if (!want || r.first.charAt(0).toUpperCase() === want) break;
			}
			return best ? best.name : '';
		}
	});
})();
