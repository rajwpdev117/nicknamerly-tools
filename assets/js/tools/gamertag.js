/* Nicknamerly — gamertag generator logic. Depends on nknm-core.js and gamertag-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.gamertag;
	if (!NKNM || !D) return;

	var STYLES = ['tryhard', 'cool', 'funny', 'cute', 'clean'];
	var LIMITS = { xbox: 12, psn: 16, any: 20 };

	function lower(s) { return s.toLowerCase(); }
	function digits() {
		return NKNM.chance(0.12) ? String(NKNM.randInt(900) + 100) : String(NKNM.randInt(90) + 10);
	}
	function sep() { return NKNM.pick(['_', '_', '.']); }
	function maybeNum(p, s) { return NKNM.chance(p) ? s + digits() : s; }
	function leet(s) {
		return s.replace(/[aeio]/gi, function (c) { return { a: '4', e: '3', i: '1', o: '0' }[c.toLowerCase()]; });
	}
	function baseWord(raw) {
		var words = String(raw).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z\s]/g, ' ').trim().split(/\s+/).filter(Boolean);
		if (!words.length) return '';
		var w = NKNM.cap(lower(words[0]));
		if (w.length > 10) w = w.slice(0, 10);
		return w.length >= 2 ? w : '';
	}

	function make(style, base) {
		var d, a, b;
		switch (style) {
			case 'tryhard':
				d = D.tryhard; a = NKNM.pick(d.first); b = NKNM.pick(d.second);
				if (base) {
					return NKNM.pick([
						function () { return a + base; },
						function () { return maybeNum(0.4, base + b); },
						function () { return 'xX' + base + 'Xx'; },
						function () { return base + NKNM.pick(d.suffix); },
						function () { return leet(base) + b; },
						function () { return 'Its' + base + digits(); }
					])();
				}
				return NKNM.pick([
					function () { return maybeNum(0.35, a + b); },
					function () { return maybeNum(0.35, a + b); },
					function () { return a + b + NKNM.pick(d.suffix); },
					function () { return 'xX' + a + b + 'Xx'; },
					function () { return leet(a + b); },
					function () { return 'The' + a + b; },
					function () { return a + sep() + b + digits(); }
				])();
			case 'cool':
				d = D.cool; a = NKNM.pick(d.adj); b = NKNM.pick(d.noun);
				if (base) {
					return NKNM.pick([
						function () { return maybeNum(0.3, base + b); },
						function () { return maybeNum(0.3, a + base); },
						function () { return lower(base) + sep() + lower(b); },
						function () { return 'The' + base; },
						function () { return maybeNum(0.4, base + sep() + a); }
					])();
				}
				return NKNM.pick([
					function () { return maybeNum(0.3, a + b); },
					function () { return maybeNum(0.3, a + b); },
					function () { return lower(a) + sep() + lower(b); },
					function () { return 'The' + b; },
					function () { return a + b + NKNM.pick(['X', 'Z', 'HD']); }
				])();
			case 'funny':
				d = D.funny;
				if (base) {
					return NKNM.pick([
						function () { return NKNM.pick(d.first) + base; },
						function () { return base + NKNM.pick(d.role); },
						function () { return 'Not' + base; },
						function () { return NKNM.pick(d.food) + base; },
						function () { return base + NKNM.pick(d.term); },
						function () { return NKNM.pick(d.term) + base; }
					])();
				}
				return NKNM.pick([
					function () { return NKNM.pick(d.phrases); },
					function () { return NKNM.pick(d.phrases); },
					function () { return NKNM.pick(d.food) + NKNM.pick(d.role); },
					function () { return NKNM.pick(d.term) + NKNM.pick(d.food); },
					function () { return NKNM.pick(d.first) + NKNM.pick(d.food) + 'ALot'; },
					function () { return maybeNum(0.2, NKNM.pick(d.term) + NKNM.pick(d.role)); }
				])();
			case 'cute':
				d = D.cute; a = NKNM.pick(d.adj); b = NKNM.pick(d.noun);
				if (base) {
					return NKNM.pick([
						function () { return lower(base) + sep() + lower(b); },
						function () { return a + base; },
						function () { return base + b; },
						function () { return maybeNum(0.3, lower(base) + lower(b)); }
					])();
				}
				return NKNM.pick([
					function () { return lower(a) + sep() + lower(b); },
					function () { return maybeNum(0.25, a + b); },
					function () { return maybeNum(0.25, a + b); },
					function () { return lower(a) + lower(b) + NKNM.pick(['xo', 'uwu', '']); }
				])();
			default: // clean
				a = NKNM.pick(D.clean.word);
				if (base) {
					return NKNM.pick([
						function () { return base + digits(); },
						function () { return 'Its' + base; },
						function () { return base + 'HQ'; },
						function () { return maybeNum(0.5, base + a); }
					])();
				}
				return NKNM.pick([
					function () { return a; },
					function () { return a + digits(); },
					function () { return a + NKNM.pick(['HQ', 'TV', 'GG', 'X']); },
					function () { return 'Its' + a; }
				])();
		}
	}

	/** Xbox gamertags have no underscores or dots; PlayStation IDs allow underscores but not dots. */
	function fit(tag, platform) {
		if (platform === 'xbox') tag = tag.replace(/[_.]/g, '');
		else if (platform === 'psn') tag = tag.replace(/\./g, '_');
		var max = LIMITS[platform] || LIMITS.any;
		return tag.length >= 4 && tag.length <= max ? tag : '';
	}

	NKNM.register('gamertag', {
		generate: function (o) {
			var st = STYLES.indexOf(o.style) !== -1 ? o.style : NKNM.pick(STYLES);
			var base = o.name ? baseWord(o.name) : '';
			var t = make(st, base);
			return t ? fit(t, o.gender) : '';
		}
	});
})();
