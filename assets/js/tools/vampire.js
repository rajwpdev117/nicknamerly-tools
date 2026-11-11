/* Nicknamerly — vampire name generator logic. Depends on nknm-core.js and vampire-data.js. Gothic names are built from invented syllables, each with its own meaning. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.vampire;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var KINDS = ['gothic', 'modern', 'noble'];
	var MODERN = [
		'A modern name that passes for human at a glance',
		'Ordinary enough to hide among the living',
		'A quiet name for a vampire who blends in',
		'Easy to say, easy to forget, and that is the point'
	];

	function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function first(sex, want) {
		var starts = D.s;
		if (want) {
			var f = starts.filter(function (p) { return p[0].charAt(0).toUpperCase() === want; });
			if (f.length) starts = f;
		}
		var ends = D.e[sex];
		for (var i = 0; i < 20; i++) {
			var a = NKNM.pick(starts);
			var b = NKNM.pick(ends);
			var name = a[0] + b[0];
			if (a[0].slice(-1).toLowerCase() === b[0].charAt(0).toLowerCase()) continue;
			if (/(.)\1\1/i.test(name) || BAD.test(name)) continue;
			return { n: name, p: a[1] + '-' + b[1].toLowerCase(), m: '"' + a[2] + '-' + b[2] + '"' };
		}
		return null;
	}

	function join(set) {
		for (var i = 0; i < 20; i++) {
			var a = NKNM.pick(set[0]);
			var b = NKNM.pick(set[1]);
			if (a[0].slice(-1).toLowerCase() === b[0].charAt(0).toLowerCase()) continue;
			return { n: a[0] + b[0], a: a[1], b: b[1] };
		}
		return { n: set[0][0][0] + set[1][0][0], a: set[0][0][1], b: set[1][0][1] };
	}

	function modern(sex, want, firstOnly) {
		var list = D.modern[sex];
		if (want) {
			var f = list.filter(function (n) { return n.charAt(0) === want; });
			if (f.length) list = f;
		}
		var name = NKNM.pick(list);
		var t = firstOnly ? name : name + ' ' + NKNM.pick(D.modern.l);
		return { t: t, k: '', m: NKNM.pick(MODERN) };
	}

	NKNM.register('vampire', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(KINDS);
			if (style === 'coven') {
				var c = join(D.c);
				return { t: 'The ' + c.n.replace(/([a-z])([A-Z])/, '$1 $2'), k: '', m: 'Coven name: ' + c.a + ' + ' + c.b };
			}
			var g = o.gender || 'any';
			var firstOnly = g === 'first';
			var sex = g === 'f' || g === 'm' || g === 'u' ? g : NKNM.pick(['f', 'm', 'u']);
			var want = initialOf(o.name);
			if (style === 'modern') return modern(sex, want, firstOnly);
			var f = first(sex, want);
			if (!f) return null;
			if (firstOnly) return { t: f.n, k: '', m: 'Pronounced ' + f.p + ' · means ' + f.m };
			var base = f.n + ' (' + f.p + ') = ' + f.m;
			if (style === 'noble') {
				var s = join(D.nb);
				var surname = cap(s.n.toLowerCase());
				var title = NKNM.pick(D.titles[sex]);
				return { t: title + ' ' + f.n + ' ' + surname, k: '', m: base + ' · ' + surname + ' = ' + s.a + ' + ' + s.b };
			}
			var l = join(D.g);
			var last = cap(l.n.toLowerCase());
			return { t: f.n + ' ' + last, k: '', m: base + ' · ' + last + ' = ' + l.a + ' + ' + l.b };
		}
	});
})();
