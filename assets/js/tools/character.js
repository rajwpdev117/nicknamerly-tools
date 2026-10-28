/* Nicknamerly — character name generator logic. Depends on nknm-core.js and character-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.character;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|hate|piss|poo/i;
	var STYLES = ['fantasy', 'modern', 'scifi', 'medieval', 'villain', 'hero'];

	function pickGender(g) {
		if (g === 'female') return 'f';
		if (g === 'male') return 'm';
		return NKNM.chance(0.5) ? 'f' : 'm';
	}

	function syl(a, b) {
		return NKNM.pick(a) + NKNM.pick(b);
	}

	function make(style, g) {
		var d = D[style];
		var sex = pickGender(g);
		var first, last, title = '';
		if (style === 'fantasy') {
			first = sex === 'f' ? syl(d.fs, d.fe) : syl(d.ms, d.me);
			first = NKNM.cap(first.toLowerCase());
			last = NKNM.pick(d.sa) + NKNM.pick(d.sb).toLowerCase();
			if (last.length > 13) last = NKNM.pick(d.sa) + NKNM.pick(d.sb).toLowerCase();
		} else {
			first = NKNM.pick(d[sex]);
			last = NKNM.pick(d.s);
			if (d.t && NKNM.chance(style === 'villain' ? 0.3 : style === 'scifi' ? 0.15 : 0.18)) {
				title = NKNM.pick(d.t);
				if (style === 'villain' || style === 'hero') {
					var femTitle = /^(Lady|Duchess|Baroness|Dame)$/.test(title);
					var maleTitle = /^(Lord|Count|Baron|Sir|Master)$/.test(title);
					if ((sex === 'f' && maleTitle) || (sex === 'm' && femTitle)) title = '';
				}
			}
		}
		var name = (title ? title + ' ' : '') + first + ' ' + last;
		return { name: name, first: first };
	}

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	NKNM.register('character', {
		generate: function (o) {
			var style = o.style && o.style !== 'random' ? o.style : NKNM.pick(STYLES);
			var want = initialOf(o.name);
			var best = null;
			for (var i = 0; i < 60; i++) {
				var r = make(style, o.gender);
				if (BAD.test(r.name)) continue;
				best = r;
				if (!want || r.first.charAt(0).toUpperCase() === want) break;
			}
			return best ? best.name : '';
		}
	});
})();
