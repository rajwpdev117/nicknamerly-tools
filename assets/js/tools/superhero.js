/* Nicknamerly — superhero name generator logic. Depends on nknm-core.js and superhero-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.superhero;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var STYLES = ['cosmic', 'tech', 'elemental', 'shadow', 'mystic', 'speed'];

	function word(raw) {
		var s = String(raw || '').replace(/[^A-Za-z0-9'-]/g, ' ').trim().split(/\s+/)[0] || '';
		return s ? NKNM.cap(s.toLowerCase()) : '';
	}

	function suffix(g) {
		var key = g === 'female' ? 'f' : g === 'male' ? 'm' : 'any';
		return NKNM.pick(D.suffix[key]);
	}

	function make(style, g, kw) {
		var d = D[style];
		var a = NKNM.pick(d.a);
		var n = kw || NKNM.pick(d.n);
		var r = Math.random();
		if (r < 0.26) return a + ' ' + n;
		if (r < 0.42) return 'The ' + a + ' ' + (kw || NKNM.pick(d.n));
		if (r < 0.62) return n + ' ' + suffix(g);
		if (r < 0.76) {
			var t = NKNM.pick(d.t);
			var femT = /^(Lady|Miss|Sister)$/.test(t), maleT = /^(Lord|Mister|Sergeant)$/.test(t);
			if ((g === 'female' && maleT) || (g === 'male' && femT)) t = 'Captain';
			return t + ' ' + n;
		}
		if (r < 0.90) {
			var n2 = NKNM.pick(d.n);
			return (n2 === n ? a : n) + ' ' + n2;
		}
		return a + ' ' + suffix(g);
	}

	NKNM.register('superhero', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(STYLES);
			var kw = word(o.name);
			for (var i = 0; i < 40; i++) {
				var name = make(style, o.gender, kw);
				var parts = name.replace(/^The /, '').split(' ');
				if (parts.length > 1 && parts[0].toLowerCase() === parts[parts.length - 1].toLowerCase()) continue;
				if (BAD.test(name)) continue;
				return name;
			}
			return '';
		}
	});
})();
