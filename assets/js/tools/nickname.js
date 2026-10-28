/* Nicknamerly — nickname generator logic. Depends on nknm-core.js and nickname-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.nickname;
	if (!NKNM || !D) return;

	var STYLES = ['cute', 'cool', 'funny', 'gaming'];
	var ALLIT_INDEX = { cute: 0, cool: 1, funny: 2, gaming: 1 };

	function isVowel(ch, idx) {
		ch = ch.toLowerCase();
		return 'aeiou'.indexOf(ch) !== -1 || (ch === 'y' && idx > 0);
	}

	/** First closed syllable: Christopher → Chris, Jennifer → Jen, Brandon → Bran. */
	function computedShort(n) {
		var len = n.length;
		var i = 0;
		while (i < len && !isVowel(n[i], i)) i++;
		if (i >= len) return n;
		while (i < len && isVowel(n[i], i)) i++;
		var j = i;
		while (j < len && !isVowel(n[j], j)) j++;
		if (j >= len) return n; // only one vowel group: keep the whole name
		var cluster = j - i;
		var s = n.slice(0, i + (cluster >= 2 ? cluster - 1 : cluster));
		if (s.length < 2) s = n.slice(0, 3);
		return s.length >= len - 1 ? n : s;
	}

	// Gender-neutral titles for name-based funny nicknames ("Mister Jenna" would be wrong).
	var NEUTRAL_TITLES = ['Captain', 'Professor', 'Doctor', 'Major', 'Agent', 'Chief', 'General', 'Admiral', 'Commander', 'Coach'];

	function plain(s) {
		return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
	}

	function shortForms(name) {
		var list = (D.common[name.toLowerCase()] || []).slice();
		var c = computedShort(name);
		// Only fall back to the computed syllable when there is no known nickname ("Olivia" must not give "Ol").
		if (!list.length && list.indexOf(c) === -1) list.push(c);
		if (name.length <= 5 && list.indexOf(name) === -1) list.push(name);
		return list;
	}

	/** Sam → Sammy, Matt → Matty, Nick → Nicky, Jo → Josie, Alex → Alexie. */
	function diminutive(s) {
		var low = plain(s);
		if (/(y|ie|i)$/.test(low)) return s;
		if (/[aeiou]$/.test(low)) return s.length <= 2 ? s + 'sie' : s;
		if (/ck$/.test(low) || /([b-df-hj-np-tv-z])\1$/.test(low)) return s + 'y';
		if (s.length <= 4 && /[^aeiou][aeiou][bdfglmnprt]$/.test(low)) return s + s.slice(-1) + 'y';
		return s + 'ie';
	}

	function alliteration(name, style) {
		var row = D.allit[name.charAt(0).toLowerCase()];
		if (!row) return NKNM.pick(style === 'funny' ? ['Silly', 'Goofy'] : style === 'cute' ? ['Sweet', 'Sunny'] : ['Mighty', 'Epic']);
		return NKNM.pick(row[ALLIT_INDEX[style]]);
	}

	function tidy(s) {
		return s
			.replace(/([aeioë])erson\b/g, '$1rson')
			.replace(/([aeoë])inator\b/g, '$1nator')
			.replace(/iinator\b/g, 'inator')
			.replace(/([a-z])\1\1/gi, '$1$1')
			.replace(/\s+/g, ' ')
			.trim();
	}

	function fromName(rawName, style) {
		var name = NKNM.cap(rawName.split(' ')[0].toLowerCase());
		var shorts = shortForms(name);
		var S = NKNM.pick(shorts);
		var noSpace = function (x) { return x.replace(/[\s'’\-]/g, ''); };
		var vars = {
			N: name,
			S: S,
			D: diminutive(NKNM.pick(shorts)),
			I: name.charAt(0).toUpperCase(),
			A: alliteration(name, style),
			coolTitle: D.cool.titles,
			coolSecond: D.cool.second,
			coolFirst: D.cool.first,
			funnyNoun: D.funny.nouns,
			funnyRole: D.funny.roles,
			funnyTitle: NEUTRAL_TITLES,
			gamingFirst: D.gaming.first,
			gamingSecond: D.gaming.second,
			gamingSuffix: D.gaming.suffix
		};
		if (style === 'gaming') {
			vars.S = noSpace(S);
			vars.N = noSpace(name);
		}
		return tidy(NKNM.fill(NKNM.pick(D.nameTemplates[style]), vars));
	}

	function fromWords(style) {
		var set = D[style];
		return tidy(NKNM.fill(NKNM.pick(set.patterns), set));
	}

	NKNM.register('nickname', {
		generate: function (o) {
			var style = STYLES.indexOf(o.style) !== -1 ? o.style : NKNM.pick(STYLES);
			if (o.name && o.name.length >= 2) return fromName(o.name, style);
			return fromWords(style);
		}
	});
})();
