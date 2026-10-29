/* Nicknamerly — aesthetic username generator logic. Depends on nknm-core.js and aesthetic-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.aesthetic;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var STYLES = ['soft', 'dark', 'cottagecore', 'y2k', 'minimal', 'vintage'];

	function word(raw) {
		var s = String(raw || '').toLowerCase().replace(/[^a-z0-9]/g, '');
		return s.slice(0, 14);
	}

	function make(style, fmt, kw) {
		var d = D[style];
		var a = NKNM.pick(d.a);
		var n = NKNM.pick(d.n);
		var parts = NKNM.chance(0.7) ? [a, n] : [n, NKNM.pick(d.n)];
		if (parts[0] === parts[1] || parts[0].indexOf(parts[1]) > -1 || parts[1].indexOf(parts[0]) > -1) parts = [a, n];
		if (parts[0].indexOf(parts[1]) > -1 || parts[1].indexOf(parts[0]) > -1) return '';
		if (kw) parts = NKNM.chance(0.5) ? [kw, n] : [a, kw];
		var sep = fmt === 'dot' ? '.' : fmt === 'under' ? '_' : fmt === 'solid' || fmt === 'num' ? '' : NKNM.pick(['.', '_', '', '']);
		var name = parts.join(sep);
		if (fmt === 'num' || (fmt === 'mix' && NKNM.chance(0.15))) {
			name += NKNM.pick(['', '', '07', '11', '22', '33', '44', '88', '99', '1', '2', '3', '00']);
			if (/^\d*$/.test(name.slice(-1)) === false) name += '';
		}
		if (fmt === 'mix' && NKNM.chance(0.05) && !/\d$/.test(name)) name += '_';
		return name;
	}

	NKNM.register('aesthetic', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(STYLES);
			var kw = word(o.name);
			var fmt = o.gender || 'mix';
			for (var i = 0; i < 40; i++) {
				var name = make(style, fmt, kw);
				if (!name || name.length > 24 || name.length < 5) continue;
				if (BAD.test(name)) continue;
				return name;
			}
			return '';
		}
	});
})();
