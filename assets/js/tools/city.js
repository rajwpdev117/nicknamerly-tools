/* Nicknamerly — city name generator logic. Depends on nknm-core.js and city-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.city;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var STYLES = ['fantasy', 'medieval', 'scifi', 'modern', 'dark'];

	/** One-word name: a start plus an ending, e.g. Eldoria, Ashford, Maplewood. */
	function one(d) {
		for (var i = 0; i < 12; i++) {
			var a = NKNM.pick(d.a);
			var b = NKNM.pick(d.b);
			if (a.slice(-1).toLowerCase() === b.charAt(0).toLowerCase()) continue;
			if (/(.)\1\1/i.test(a + b)) continue;
			return a + b;
		}
		return NKNM.pick(d.a) + NKNM.pick(d.b);
	}

	function two(d) {
		var kinds = [];
		if (d.p && d.q) kinds.push('pq', 'pq');
		if (d.x) kinds.push('x');
		if (d.y) kinds.push('y', 'y');
		var k = NKNM.pick(kinds);
		if (k === 'pq') return NKNM.pick(d.p) + ' ' + NKNM.pick(d.q);
		if (k === 'x') return NKNM.pick(d.x) + ' ' + one(d);
		return one(d) + ' ' + NKNM.pick(d.y);
	}

	function of(d) {
		return NKNM.pick(d.o).replace(/~/g, ' ') + ' ' + one(d);
	}

	function make(style, shape) {
		var d = D[style];
		var s = shape;
		if (s !== 'one' && s !== 'two' && s !== 'of') {
			var r = NKNM.randInt(100);
			s = r < 45 ? 'one' : r < 85 ? 'two' : 'of';
		}
		return s === 'one' ? one(d) : s === 'two' ? two(d) : of(d);
	}

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	/** The starting letter applies to the name itself, not to openers like "City of", "Port" or "New". */
	function matches(name, want, d) {
		var generic = {};
		(d.x || []).forEach(function (x) { generic[x.toLowerCase()] = true; });
		d.o.forEach(function (o) { o.split('~').forEach(function (x) { generic[x.toLowerCase()] = true; }); });
		var words = name.split(' ');
		for (var i = 0; i < words.length; i++) {
			if (!generic[words[i].toLowerCase()]) return words[i].charAt(0).toUpperCase() === want;
		}
		return false;
	}

	NKNM.register('city', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(STYLES);
			var want = initialOf(o.name);
			var shape = o.gender || 'mix';
			var best = '';
			for (var i = 0; i < 60; i++) {
				var name = make(style, shape);
				if (!name || name.length > 30) continue;
				var words = name.toLowerCase().split(' ');
				var seen = {};
				var dup = words.some(function (x) {
					if (seen[x]) return true;
					seen[x] = true;
					return false;
				});
				if (dup || BAD.test(name.replace(/\s/g, ''))) continue;
				best = name;
				if (!want || matches(name, want, D[style])) break;
			}
			return best;
		}
	});
})();
