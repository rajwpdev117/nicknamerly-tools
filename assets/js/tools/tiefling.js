/* Nicknamerly — tiefling name generator logic. Depends on nknm-core.js and tiefling-data.js. Infernal names are built from invented syllables, each with its own meaning. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.tiefling;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var BLEND = [
		'Sounds fully human, so it draws no attention',
		'An everyday name for a tiefling who wants to blend in',
		'A plain human name, good for hiding in a crowd',
		'Ordinary on purpose: nobody looks twice at it'
	];

	function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function startsWith(list, want, idx) {
		return list.filter(function (p) { return (idx === undefined ? p : p[idx]).charAt(0).toUpperCase() === want; });
	}

	function pickFrom(list, want, idx) {
		if (want) {
			var f = startsWith(list, want, idx);
			if (f.length) return NKNM.pick(f);
		}
		return NKNM.pick(list);
	}

	/** Infernal first name: a start part plus a gendered ending. */
	function infernal(sex, want) {
		var starts = D.s;
		if (want) {
			var f = startsWith(starts, want, 0);
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

	function surname() {
		for (var i = 0; i < 20; i++) {
			var a = NKNM.pick(D.h[0]);
			var b = NKNM.pick(D.h[1]);
			if (a[0].slice(-1).toLowerCase() === b[0].charAt(0).toLowerCase()) continue;
			return { n: cap((a[0] + b[0]).toLowerCase()), m: a[2] + ' + ' + b[1] };
		}
		return { n: 'Cinderveil', m: 'cinder + veil' };
	}

	function virtue(want) {
		var v = pickFrom(D.v, want, 0);
		return { n: v[0], m: v[1] };
	}

	function infernalName(sex, want, firstOnly) {
		var f = infernal(sex, want);
		if (!f) return null;
		if (firstOnly) return { t: f.n, k: '', m: 'Pronounced ' + f.p + ' · means ' + f.m };
		var s = surname();
		return { t: f.n + ' ' + s.n, k: '', m: f.n + ' (' + f.p + ') = ' + f.m + ' · ' + s.n + ' = ' + s.m };
	}

	function virtueName(want, firstOnly) {
		var v = virtue(want);
		if (firstOnly) return { t: v.n, k: '', m: 'Virtue name: ' + v.n.toLowerCase() + ' = ' + v.m };
		var s = surname();
		return { t: v.n + ' ' + s.n, k: '', m: v.n + ' = ' + v.m + ' · ' + s.n + ' = ' + s.m };
	}

	function pairName(sex, want, firstOnly) {
		var f = infernal(sex, want);
		if (!f) return null;
		var v = virtue('');
		var t = f.n + ' "' + v.n + '"';
		var m = f.n + ' (' + f.p + ') = ' + f.m + ' · goes by "' + v.n + '" = ' + v.m;
		if (!firstOnly) {
			var s = surname();
			t += ' ' + s.n;
			m += ' · ' + s.n + ' = ' + s.m;
		}
		return { t: t, k: '', m: m };
	}

	function blendName(sex, want, firstOnly) {
		var first = pickFrom(D.human[sex], want);
		if (firstOnly) return { t: first, k: '', m: NKNM.pick(BLEND) };
		return { t: first + ' ' + NKNM.pick(D.human.l), k: '', m: NKNM.pick(BLEND) };
	}

	NKNM.register('tiefling', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : '';
			if (!style) {
				var r = Math.random();
				style = r < 0.38 ? 'infernal' : r < 0.58 ? 'virtue' : r < 0.78 ? 'blend' : 'pair';
			}
			var g = o.gender || 'any';
			var firstOnly = g === 'first';
			var sex = g === 'f' || g === 'm' || g === 'u' ? g : NKNM.pick(['f', 'm', 'u']);
			var want = initialOf(o.name);
			if (style === 'virtue') return virtueName(want, firstOnly);
			if (style === 'blend') return blendName(sex, want, firstOnly);
			if (style === 'pair') return pairName(sex, want, firstOnly);
			return infernalName(sex, want, firstOnly);
		}
	});
})();
