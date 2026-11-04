/* Nicknamerly — email name generator logic. Depends on nknm-core.js and email-data.js.
 * Output is only the part before the @. Default output is Gmail-safe: 6-30 characters,
 * letters, numbers and single periods (never first or last). The "Underscore" format may use _ (not valid on Gmail). */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.email;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;

	/** First word of a name, ASCII letters only, lowercase, max 12 characters. */
	function word(raw) {
		var s = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
		s = s.split(/[\s'\-]+/)[0] || '';
		return s.replace(/[^a-z]/g, '').slice(0, 12);
	}

	function join(parts, fmt) {
		var sep = fmt === 'dot' ? '.' : fmt === 'under' ? '_' : fmt === 'solid' || fmt === 'num' ? '' : NKNM.pick(['.', '.', '']);
		return parts.join(sep);
	}

	function pro(o, fmt) {
		var f = word(o.name) || NKNM.pick(D.first);
		var l = word(o.name2) || NKNM.pick(D.last);
		var sep = fmt === 'under' ? '_' : fmt === 'solid' || fmt === 'num' ? '' : fmt === 'dot' ? '.' : NKNM.pick(['.', '.', '']);
		var fi = f.charAt(0);
		var li = l.charAt(0);
		var work = NKNM.pick(D.work);
		var picks = [
			function () { return f + sep + l; },
			function () { return f + sep + l; },
			function () { return fi + sep + l; },
			function () { return f + sep + li; },
			function () { return l + sep + f; },
			function () { return f + sep + l + (fmt === 'under' ? '_' : '.') + work; }
		];
		if (fmt === 'solid' || fmt === 'num') picks.push(function () { return fi + l; }, function () { return f + li; });
		return NKNM.pick(picks)();
	}

	function words(style, o, fmt) {
		var d = D[style];
		var f = word(o.name);
		var a, n, p;
		if (style === 'clean') {
			n = NKNM.pick(d.n);
			p = f ? (NKNM.chance(0.5) ? [f, n] : [n, f]) : (NKNM.chance(0.5) ? [n] : [n, NKNM.pick(D.last)]);
		} else {
			a = NKNM.pick(d.a);
			n = NKNM.pick(d.n);
			p = f ? (NKNM.chance(0.5) ? [f, n] : [a, f]) : [a, n];
		}
		if (p.length === 2 && (p[0] === p[1] || p[0].indexOf(p[1]) > -1 || p[1].indexOf(p[0]) > -1)) return '';
		return join(p, fmt);
	}

	NKNM.register('email', {
		generate: function (o) {
			var style = o.style || 'pro';
			var fmt = o.gender || 'mix';
			for (var i = 0; i < 40; i++) {
				var name = style === 'pro' ? pro(o, fmt) : words(style, o, fmt);
				if (!name) continue;
				if (fmt === 'num' || (fmt === 'mix' && NKNM.chance(0.1))) name += NKNM.pick(['07', '11', '22', '24', '33', '44', '88', '99', '1', '2', '3']);
				if (name.length < 6 || name.length > 30) continue;
				var re = fmt === 'under' ? /^[a-z0-9]+([._][a-z0-9]+)*$/ : /^[a-z0-9]+(\.[a-z0-9]+)*$/;
				if (!re.test(name) || !/[a-z]/.test(name)) continue;
				if (BAD.test(name)) continue;
				return name;
			}
			return '';
		}
	});
})();
