/* Nicknamerly — username generator logic. Depends on nknm-core.js and username-data.js. */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.username;
	if (!NKNM || !D) return;

	var STYLES = ['cool', 'gaming', 'cute', 'funny', 'professional'];
	var MAX_LEN = 20;

	function plain(s) {
		return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
	}
	function lower(s) { return s.toLowerCase(); }
	function pascal(s) { return NKNM.cap(s); }
	function digits() {
		var r = NKNM.randInt(100);
		if (r < 12) return String(NKNM.randInt(900) + 100);
		return String(NKNM.randInt(90) + 10);
	}
	function sep() { return NKNM.pick(['_', '_', '.']); }
	function maybeNum(p, s) { return NKNM.chance(p) ? s + digits() : s; }
	function leet(s) {
		return s.replace(/[aeio]/gi, function (c) { return { a: '4', e: '3', i: '1', o: '0' }[c.toLowerCase()]; });
	}

	/** One user keyword → a single clean word (A-Za-z only, max 12). Two words are joined in PascalCase. */
	function baseWord(raw) {
		var words = plain(raw).replace(/[^A-Za-z\s]/g, ' ').trim().split(/\s+/).filter(Boolean);
		if (!words.length) return '';
		var w = words.slice(0, 2).map(function (x) { return pascal(lower(x)); }).join('');
		if (w.length > 12) w = pascal(lower(words[0])).slice(0, 12);
		return w.length >= 2 ? w : '';
	}

	function style(styleName, base) {
		var d, a, b;
		switch (styleName) {
			case 'cool':
				d = D.cool;
				a = NKNM.pick(d.adj); b = NKNM.pick(d.noun);
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
			case 'gaming':
				d = D.gaming;
				a = NKNM.pick(d.first); b = NKNM.pick(d.second);
				if (base) {
					return NKNM.pick([
						function () { return maybeNum(0.4, base + b); },
						function () { return a + base; },
						function () { return 'xX' + base + 'Xx'; },
						function () { return base + NKNM.pick(d.suffix); },
						function () { return 'Its' + base + digits(); },
						function () { return leet(base) + b; },
						function () { return base + sep() + NKNM.pick(d.suffix); }
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
			case 'cute':
				d = D.cute;
				a = NKNM.pick(d.adj); b = NKNM.pick(d.noun);
				if (base) {
					return NKNM.pick([
						function () { return lower(base) + sep() + lower(b); },
						function () { return a + base; },
						function () { return base + b; },
						function () { return lower(a) + sep() + lower(base); },
						function () { return maybeNum(0.3, lower(base) + lower(b)); }
					])();
				}
				return NKNM.pick([
					function () { return lower(a) + sep() + lower(b); },
					function () { return lower(a) + sep() + lower(b); },
					function () { return maybeNum(0.25, a + b); },
					function () { return lower(b) + sep() + lower(NKNM.pick(d.noun)); },
					function () { return lower(a) + lower(b) + NKNM.pick(['xo', 'uwu', '']); }
				])();
			case 'funny':
				d = D.funny;
				if (base) {
					return NKNM.pick([
						function () { return NKNM.pick(d.first) + base; },
						function () { return base + NKNM.pick(d.role); },
						function () { return 'Not' + base; },
						function () { return base + 'The' + NKNM.pick(d.role); },
						function () { return NKNM.pick(d.food) + base; },
						function () { return base + NKNM.pick(['Mc', '']) + NKNM.pick(d.food); }
					])();
				}
				return NKNM.pick([
					function () { return NKNM.pick(d.phrases); },
					function () { return NKNM.pick(d.phrases); },
					function () { return NKNM.pick(d.first) + NKNM.pick(d.food); },
					function () { return NKNM.pick(d.food) + NKNM.pick(d.role); },
					function () { return maybeNum(0.2, 'Sir' + NKNM.pick(['Naps', 'Snacks', 'Laughs', 'Scrolls']) + 'ALot'); }
				])();
			default: // professional
				d = D.pro;
				a = NKNM.pick(d.adj); b = NKNM.pick(d.noun);
				if (base) {
					return NKNM.pick([
						function () { return lower(base) + NKNM.pick(['.', '_', '']) + NKNM.pick(d.role); },
						function () { return NKNM.pick(d.pre) + lower(base); },
						function () { return lower(base) + '.' + lower(b); },
						function () { return lower(base) + NKNM.pick(['hq', 'hub', 'daily']); },
						function () { return NKNM.pick(['hey', 'hello']) + lower(base); }
					])();
				}
				return NKNM.pick([
					function () { return lower(a) + lower(b); },
					function () { return lower(a) + sep() + lower(b); },
					function () { return lower(a) + '.' + lower(b); },
					function () { return lower(b) + NKNM.pick(['.', '_']) + NKNM.pick(d.role); },
					function () { return NKNM.pick(d.pre) + lower(a) + lower(b); }
				])();
		}
	}

	NKNM.register('username', {
		generate: function (o) {
			var st = STYLES.indexOf(o.style) !== -1 ? o.style : NKNM.pick(STYLES);
			var base = o.name ? baseWord(o.name) : '';
			var u = style(st, base);
			if (!u || u.length < 4 || u.length > MAX_LEN) return '';
			return u;
		}
	});
})();
