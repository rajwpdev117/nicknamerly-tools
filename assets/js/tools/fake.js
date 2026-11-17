/* Nicknamerly — fake name generator logic. Reuses random-data.js (US SSA first names, Census 2010 surnames). Names only, no addresses or IDs. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.random;
	if (!NKNM || !D) return;

	var LAST = D.l;

	function clean(own, other) {
		var rank = {};
		other.forEach(function (n, i) { if (rank[n] === undefined) rank[n] = i; });
		return own.filter(function (n, i) { return n !== 'Brain' && !(rank[n] !== undefined && rank[n] * 3 < i); });
	}

	function bands(pool) {
		return {
			all: pool,
			common: pool.slice(0, 150),
			uncommon: pool.slice(600),
			short: pool.filter(function (n) { return n.length <= 4; })
		};
	}

	var POOLS = { f: bands(clean(D.f, D.m)), m: bands(clean(D.m, D.f)) };
	var LASTS = { all: LAST, common: LAST.slice(0, 150), uncommon: LAST.slice(300), short: LAST.filter(function (n) { return n.length <= 5; }) };

	function ranked(list) {
		var r = Math.random();
		return list[Math.floor(list.length * r * r)];
	}

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function startsWith(list, want) {
		return list.filter(function (n) { return n.charAt(0).toUpperCase() === want; });
	}

	function given(sex, style, want) {
		var B = POOLS[sex];
		var list = B[style] || B.all;
		if (want) {
			var f = startsWith(list, want);
			if (!f.length) f = startsWith(B.all, want);
			if (f.length) list = f;
		}
		return style === 'uncommon' || style === 'short' || want ? NKNM.pick(list) : ranked(list);
	}

	function surname(style) {
		var list = LASTS[style] || LASTS.all;
		return style === 'uncommon' || style === 'short' ? NKNM.pick(list) : ranked(list);
	}

	// Parts of each generated name, keyed by the full name string, for CSV/JSON export.
	var META = {};

	NKNM.register('fake', {
		rows: function (names) {
			return names.map(function (n) {
				var m = META[n];
				if (m) return { first_name: m.first, middle_name: m.middle, last_name: m.last, full_name: n, gender: m.gender };
				var p = n.split(' ');
				return { first_name: p[0], middle_name: p.slice(1, -1).join(' '), last_name: p[p.length - 1], full_name: n, gender: '' };
			});
		},
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : '';
			var type = o.gender || 'mix';
			var sex = type === 'f' || type === 'm' ? type : NKNM.chance(0.5) ? 'f' : 'm';
			var first = given(sex, style === 'hyphen' ? '' : style, initialOf(o.name));
			var last = surname(style === 'hyphen' ? '' : style);
			if (style === 'hyphen') {
				var second = surname('');
				if (second !== last) last += '-' + second;
			}
			var middle = '';
			if (type === 'mid') {
				var mid = given(sex, style === 'short' ? 'short' : '', '');
				if (mid !== first) middle = mid;
			} else if (type === 'mi') {
				middle = NKNM.pick('ABCDEFGHJKLMNPRSTW'.split('')) + '.';
			}
			var full = first + (middle ? ' ' + middle : '') + ' ' + last;
			META[full] = { first: first, middle: middle, last: last, gender: sex === 'f' ? 'female' : 'male' };
			return full;
		}
	});
})();
