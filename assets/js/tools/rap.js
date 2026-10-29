/* Nicknamerly — rap name generator logic. Depends on nknm-core.js and rap-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.rap;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo|thug/i;
	var STYLES = ['hiphop', 'trap', 'old', 'drill', 'smooth', 'funny'];

	function word(raw) {
		var s = String(raw || '').replace(/[^A-Za-z0-9'-]/g, ' ').trim().split(/\s+/)[0] || '';
		return s ? NKNM.cap(s.toLowerCase()) : '';
	}

	function make(style, kw) {
		var d = D[style];
		var core = kw || NKNM.pick(d.n);
		var r = Math.random();
		if (r < 0.30) return NKNM.pick(d.p) + ' ' + core;
		if (r < 0.50) return core + ' ' + NKNM.pick(d.s);
		if (r < 0.64) return kw ? NKNM.pick(d.s) + ' ' + kw : 'The ' + NKNM.pick(d.a) + ' ' + (kw || NKNM.pick(d.n));
		if (r < 0.80) return NKNM.pick(d.a) + ' ' + (kw || NKNM.pick(d.n));
		if (r < 0.90) return core + ' the ' + NKNM.pick(D.the);
		var l = kw ? kw.charAt(0) : String.fromCharCode(65 + Math.floor(Math.random() * 26));
		return l + '-' + NKNM.pick(d.s);
	}

	NKNM.register('rap', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(STYLES);
			var kw = word(o.name);
			for (var i = 0; i < 40; i++) {
				var name = make(style, kw);
				var parts = name.replace(/^The /, '').split(' ');
				if (parts.length > 1 && parts[0].toLowerCase() === parts[parts.length - 1].toLowerCase()) continue;
				if (BAD.test(name)) continue;
				return name;
			}
			return '';
		}
	});
})();
