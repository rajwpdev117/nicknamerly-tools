/* Nicknamerly — Roblox username generator logic. Depends on nknm-core.js and roblox-data.js.
 * Roblox rules: 3-20 characters, letters and numbers, at most one underscore, not at the start or end. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.roblox;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var STYLES = ['cool', 'cute', 'funny', 'pro', 'blocky', 'clean'];

	function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

	function word(raw) {
		return String(raw || '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 10);
	}

	function parts(style, kw) {
		var d = D[style];
		if (style === 'clean') {
			var one = NKNM.pick(d.n);
			if (kw) return NKNM.chance(0.5) ? [kw, one] : [one, kw];
			return [one, NKNM.pick(d.n)];
		}
		var a = NKNM.pick(d.a);
		var n = NKNM.pick(d.n);
		if (kw) return NKNM.chance(0.5) ? [kw, n] : [a, kw];
		return [a, n];
	}

	function make(style, fmt, kw) {
		var d = D[style];
		var p, solo = false;
		if (style === 'funny' && !kw && fmt !== 'under' && NKNM.chance(0.3)) {
			p = [NKNM.pick(d.p)];
			solo = true;
		} else if (style === 'clean' && !kw && fmt !== 'under' && NKNM.chance(0.6)) {
			p = [NKNM.pick(d.n)];
			solo = true;
		} else {
			p = parts(style, kw);
			if (p[0] === p[1] || p[0].indexOf(p[1]) > -1 || p[1].indexOf(p[0]) > -1) return '';
		}
		var mode = fmt === 'mix' || fmt === 'num' ? NKNM.pick(['camel', 'camel', 'lower', 'under']) : fmt;
		if (solo && mode === 'under') mode = 'camel';
		var name;
		if (mode === 'lower') name = p.join('');
		else if (mode === 'under') name = p.map(cap).join('_');
		else name = p.map(cap).join('');
		if (fmt === 'num' || (fmt === 'mix' && NKNM.chance(0.15))) {
			name += NKNM.pick(['07', '11', '22', '33', '44', '88', '99', '1', '2', '3', '00']);
		}
		return name;
	}

	NKNM.register('roblox', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(STYLES);
			var kw = word(o.name);
			var fmt = o.gender || 'mix';
			for (var i = 0; i < 40; i++) {
				var name = make(style, fmt, kw);
				if (!name || name.length > 20 || name.length < 3) continue;
				if (!/^[A-Za-z0-9]+(_[A-Za-z0-9]+)?$/.test(name) || !/[A-Za-z]/.test(name)) continue;
				if (BAD.test(name)) continue;
				return name;
			}
			return '';
		}
	});
})();
