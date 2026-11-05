/* Nicknamerly — Discord server name generator logic. Depends on nknm-core.js and discordserver-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.discordserver;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var THEMES = ['gaming', 'study', 'anime', 'chill', 'creative', 'funny', 'community'];

	/** Letters, numbers and single spaces; Title Case; at most 2 words and 20 characters. */
	function topic(raw) {
		var s = String(raw || '').normalize('NFC').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
		var words = s.split(' ').filter(Boolean).slice(0, 2).map(function (x) {
			return x.charAt(0).toUpperCase() + x.slice(1);
		});
		var out = words.join(' ');
		return out.length > 20 ? words[0].slice(0, 20) : out;
	}

	function pattern(shape, kw) {
		var P = [];
		if (shape === 'short') {
			P = kw ? ['{K} {C}', '{K} {C}', '{A} {K}'] : ['{A} {C}', '{N} {C}', '{A} {N}', '{A} {N}'];
		} else if (shape === 'the') {
			P = kw ? ['The {K} {C}', 'The {A} {K}', 'The {K} {N}'] : ['The {A} {C}', 'The {A} {N}', 'The {N} {C}'];
		} else if (shape === 'long') {
			P = kw ? ['{A} {K} {C}', '{K} {A} {C}', 'The {A} {K} {C}'] : ['{A} {N} {C}', '{A} {N} {C}', 'The {A} {N} {C}'];
		} else {
			P = kw
				? ['{K} {C}', 'The {K} {C}', '{A} {K} {C}', '{A} {K}', '{K} {N}', 'The {A} {K}']
				: ['The {A} {C}', '{A} {N}', '{N} {C}', '{A} {C}', '{A} {N} {C}', 'The {N} {C}', 'The {A} {N}'];
		}
		return NKNM.pick(P);
	}

	NKNM.register('discordserver', {
		generate: function (o) {
			var theme = o.style && o.style !== 'random' ? o.style : NKNM.pick(THEMES);
			var d = D[theme] || D.gaming;
			var kw = topic(o.name);
			var shape = o.gender || 'mix';
			for (var i = 0; i < 30; i++) {
				var name = pattern(shape, kw).replace(/\{(\w)\}/g, function (m, k) {
					if (k === 'K') return kw;
					return NKNM.pick(k === 'A' ? d.a : k === 'N' ? d.n : d.c);
				});
				var words = name.split(' ');
				var seen = {};
				var dup = words.some(function (x) {
					var k = x.toLowerCase();
					if (seen[k]) return true;
					seen[k] = true;
					return false;
				});
				if (dup || name.length > 32 || name.length < 4 || BAD.test(name.replace(/\s/g, ''))) continue;
				return name;
			}
			return '';
		}
	});
})();
