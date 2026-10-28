/* Nicknamerly — band name generator logic. Depends on nknm-core.js and band-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.band;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var STYLES = ['rock', 'metal', 'punk', 'indie', 'pop', 'funny'];

	function word(raw) {
		var s = String(raw || '').replace(/[^A-Za-z0-9' -]/g, '').trim().split(/\s+/)[0] || '';
		return s ? NKNM.cap(s.toLowerCase()) : '';
	}

	function plural(w) {
		if (/(f|fe)$/i.test(w) && !/(ff|ef)$/i.test(w)) return w.replace(/fe?$/i, 'ves');
		if (/[^aeiou]y$/i.test(w)) return w.slice(0, -1) + 'ies';
		if (/(s|x|z|ch|sh)$/i.test(w)) return w + 'es';
		return w + 's';
	}

	function make(style, kw) {
		var d = D[style];
		var r = Math.random();
		var a = NKNM.pick(d.a);
		var n = kw || NKNM.pick(d.n);
		var p = kw || NKNM.pick(d.p);
		if (r < 0.24) return 'The ' + a + ' ' + (kw ? plural(kw) : NKNM.pick(d.p));
		if (r < 0.46) return a + ' ' + n;
		if (r < 0.60) return (kw || NKNM.pick(d.p)) + ' & ' + NKNM.pick(d.p);
		if (r < 0.74) return (kw ? plural(kw) : NKNM.pick(d.p)) + ' of ' + NKNM.pick(D.of);
		if (r < 0.86) return a + ' ' + n + ' ' + NKNM.pick(['Society', 'Club', 'Project', 'Radio', 'Brigade', 'Collective', 'Union', 'Parade']);
		if (r < 0.94) return 'The ' + (kw || n) + ' ' + NKNM.pick(d.n);
		return NKNM.pick(d.a) + ' ' + p;
	}

	NKNM.register('band', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(STYLES);
			var kw = word(o.name);
			for (var i = 0; i < 40; i++) {
				var name = make(style, kw);
				var parts = name.replace(/^The /, '').split(' ');
				if (parts.length > 1 && parts[0] === parts[parts.length - 1]) continue;
				if (BAD.test(name)) continue;
				return name;
			}
			return '';
		}
	});
})();
