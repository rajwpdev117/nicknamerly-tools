/* Nicknamerly Tools — shared runtime. No dependencies. */
(function () {
	'use strict';

	var NKNM = window.NKNM = window.NKNM || {};
	NKNM.tools = NKNM.tools || {};

	/* ---------- Random helpers ---------- */

	function randInt(max) {
		if (window.crypto && window.crypto.getRandomValues) {
			var a = new Uint32Array(1);
			window.crypto.getRandomValues(a);
			return a[0] % max;
		}
		return Math.floor(Math.random() * max);
	}

	NKNM.pick = function (list) {
		return list[randInt(list.length)];
	};
	NKNM.chance = function (p) {
		return randInt(10000) < p * 10000;
	};
	NKNM.randInt = randInt;

	/* ---------- Text helpers ---------- */

	NKNM.cap = function (s) {
		return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
	};

	/** Keep letters (incl. accented), spaces, hyphens and apostrophes; max 30 chars. */
	NKNM.cleanName = function (raw) {
		var s = String(raw || '').normalize('NFC');
		s = s.replace(/[^\p{L}\s'\-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 30);
		return s;
	};

	/**
	 * Fill a template. Tokens like {adj} are replaced by a pick from vars[adj]
	 * (array) or by vars[adj] (string).
	 */
	NKNM.fill = function (tpl, vars) {
		return tpl.replace(/\{(\w+)\}/g, function (m, key) {
			var v = vars[key];
			if (v === undefined) return '';
			return Array.isArray(v) ? NKNM.pick(v) : v;
		});
	};

	/** Generate `count` unique strings from a generator function. */
	NKNM.unique = function (gen, count, exclude) {
		var out = [];
		var seen = {};
		(exclude || []).forEach(function (x) { seen[x.toLowerCase()] = true; });
		var tries = 0;
		while (out.length < count && tries < count * 40) {
			tries++;
			var g = gen();
			if (!g) continue;
			var rich = typeof g === 'object';
			var n = (rich ? g.t : g).replace(/\s+/g, ' ').trim();
			var k = n.toLowerCase();
			if (n.length < 2 || n.length > 40 || seen[k]) continue;
			seen[k] = true;
			if (rich) { g.t = n; out.push(g); } else { out.push(n); }
		}
		return out;
	};

	/* ---------- Clipboard ---------- */

	function copyText(text) {
		if (navigator.clipboard && window.isSecureContext) {
			return navigator.clipboard.writeText(text);
		}
		return new Promise(function (resolve, reject) {
			var ta = document.createElement('textarea');
			ta.value = text;
			ta.setAttribute('readonly', '');
			ta.style.position = 'fixed';
			ta.style.top = '-1000px';
			document.body.appendChild(ta);
			ta.select();
			try {
				document.execCommand('copy') ? resolve() : reject();
			} catch (e) {
				reject(e);
			}
			document.body.removeChild(ta);
		});
	}

	/* ---------- UI ---------- */

	/**
	 * Username styles for a name: "Captain Crunch" → CaptainCrunch, captain_crunch, C4pt41nCrunch ...
	 * Returns [] when nothing useful can be made.
	 */
	NKNM.variants = function (name) {
		var base = String(name || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
			.replace(/([a-z])([A-Z])/g, '$1 $2')
			.replace(/[^A-Za-z0-9]+/g, ' ').trim();
		if (!base) return [];
		var parts = base.split(' ');
		var lower = parts.map(function (w) { return w.toLowerCase(); });
		var pascal = parts.map(function (w) { return NKNM.cap(w.toLowerCase()); }).join('');
		var leet = pascal.replace(/[aeio]/gi, function (c) {
			return { a: '4', e: '3', i: '1', o: '0' }[c.toLowerCase()];
		});
		var list = [
			pascal,
			lower.join(''),
			lower.join('_'),
			lower.join('.'),
			parts.join('_').toUpperCase(),
			leet,
			'xX' + pascal + 'Xx',
			lower.join('') + (10 + randInt(90))
		];
		var seen = {};
		seen[String(name)] = true;
		return list.filter(function (v) {
			if (!v || v.length > 30 || seen[v]) return false;
			seen[v] = true;
			return true;
		});
	};

	/** Rich result {t: name, k: kanji, m: meaning}: two-line card with a separate kanji copy button. */
	function buildRichItem(r) {
		var li = document.createElement('li');
		li.className = 'nknm-item nknm-item--rich';
		var body = document.createElement('div');
		body.className = 'nknm-rich';
		var t = document.createElement('span');
		t.className = 'nknm-name-text';
		t.textContent = r.t;
		var k = document.createElement('button');
		k.type = 'button';
		k.className = 'nknm-kanji';
		k.setAttribute('data-nknm-copy', r.k);
		k.setAttribute('aria-label', 'Copy ' + r.k);
		k.textContent = r.k;
		var m = document.createElement('span');
		m.className = 'nknm-meaning';
		m.textContent = r.m;
		body.appendChild(t);
		body.appendChild(k);
		body.appendChild(m);
		var btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'nknm-copy';
		btn.setAttribute('data-nknm-copy', r.t);
		btn.setAttribute('aria-label', 'Copy ' + r.t);
		btn.textContent = 'Copy';
		li.appendChild(body);
		li.appendChild(btn);
		return li;
	}

	function buildItem(name, withVariants) {
		if (typeof name === 'object') return buildRichItem(name);
		var li = document.createElement('li');
		li.className = 'nknm-item';
		var span = document.createElement(withVariants ? 'button' : 'span');
		span.className = 'nknm-name';
		if (withVariants) {
			span.type = 'button';
			span.setAttribute('aria-expanded', 'false');
		}
		var text = document.createElement('span');
		text.className = 'nknm-name-text';
		text.textContent = name;
		span.appendChild(text);
		var btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'nknm-copy';
		btn.setAttribute('data-nknm-copy', name);
		btn.setAttribute('aria-label', 'Copy ' + name);
		btn.textContent = 'Copy';
		li.appendChild(span);
		li.appendChild(btn);
		return li;
	}

	function mount(root) {
		var slug = root.getAttribute('data-nknm-tool');
		var tool = NKNM.tools[slug];
		if (!tool || root.__nknm) return;
		root.__nknm = true;

		var form = root.querySelector('.nknm-form');
		var grid = root.querySelector('.nknm-grid');
		var nameEl = root.querySelector('[name="nknm_name"]');
		var name2El = root.querySelector('[name="nknm_name2"]');
		var styleEl = root.querySelector('[name="nknm_style"]');
		var genderEl = root.querySelector('[name="nknm_gender"]');
		var countEl = root.querySelector('[name="nknm_count"]');
		var copyAllBtn = root.querySelector('[data-nknm-copyall]');
		var dlBtn = root.querySelector('[data-nknm-download]');
		var moreBtn = root.querySelector('[data-nknm-more]');
		var status = root.querySelector('[data-nknm-status]');
		var count = parseInt(root.getAttribute('data-nknm-count'), 10) || 20;
		function curCount() { return countEl ? (parseInt(countEl.value, 10) || count) : count; }
		var withVariants = root.getAttribute('data-nknm-variants') === '1';
		var shown = [];

		function closeVariants(li) {
			var box = li.querySelector('.nknm-variants');
			if (box) li.removeChild(box);
			li.classList.remove('is-open');
			var b = li.querySelector('.nknm-name');
			if (b && b.setAttribute) b.setAttribute('aria-expanded', 'false');
		}

		function toggleVariants(li) {
			if (li.classList.contains('is-open')) { closeVariants(li); return; }
			var open = grid.querySelector('.nknm-item.is-open');
			if (open) closeVariants(open);
			var nm = li.querySelector('.nknm-name-text').textContent;
			var list = NKNM.variants(nm);
			if (!list.length) return;
			var box = document.createElement('div');
			box.className = 'nknm-variants';
			var label = document.createElement('p');
			label.className = 'nknm-vlabel';
			label.textContent = 'Username styles for ' + nm + ' (tap to copy)';
			var ul = document.createElement('ul');
			ul.className = 'nknm-chips';
			list.forEach(function (v) {
				var c = document.createElement('li');
				var b = document.createElement('button');
				b.type = 'button';
				b.className = 'nknm-chip';
				b.setAttribute('data-nknm-copy', v);
				b.setAttribute('aria-label', 'Copy ' + v);
				b.textContent = v;
				c.appendChild(b);
				ul.appendChild(c);
			});
			box.appendChild(label);
			box.appendChild(ul);
			li.appendChild(box);
			li.classList.add('is-open');
			li.querySelector('.nknm-name').setAttribute('aria-expanded', 'true');
		}

		function opts() {
			return {
				name: nameEl ? NKNM.cleanName(nameEl.value) : '',
				name2: name2El ? NKNM.cleanName(name2El.value) : '',
				style: styleEl ? styleEl.value : '',
				gender: genderEl ? genderEl.value : ''
			};
		}

		function render(names) {
			var frag = document.createDocumentFragment();
			names.forEach(function (n) { frag.appendChild(buildItem(n, withVariants)); });
			grid.classList.remove('is-fresh');
			grid.textContent = '';
			grid.appendChild(frag);
			void grid.offsetWidth; // restart the entry animation
			grid.classList.add('is-fresh');
			shown = names.map(function (n) { return typeof n === 'object' ? n.t : n; });
			if (status) status.textContent = names.length + ' new names generated.';
		}

		function generate() {
			var o = opts();
			var names = NKNM.unique(function () { return tool.generate(o); }, curCount(), shown);
			// small pools (e.g. two short names) run out of unseen results: allow repeats instead of an empty list
			if (names.length < Math.min(curCount(), 6)) names = NKNM.unique(function () { return tool.generate(o); }, curCount(), []);
			render(names);
		}

		// Fresh list on every visit. Pre-rendered examples stay in the HTML for search engines;
		// same count, so no layout shift. Status text is cleared so screen readers aren't interrupted on load.
		(function () {
			var names = NKNM.unique(function () { return tool.generate({ name: '', style: styleEl ? styleEl.value : '', gender: genderEl ? genderEl.value : '' }); }, count, []);
			render(names);
			grid.classList.remove('is-fresh');
			if (status) status.textContent = '';
		})();

		form.addEventListener('submit', function (e) {
			e.preventDefault();
			generate();
		});
		if (moreBtn) moreBtn.addEventListener('click', generate);
		if (styleEl) styleEl.addEventListener('change', generate);
		if (genderEl) genderEl.addEventListener('change', generate);
		if (countEl) countEl.addEventListener('change', generate);
		function flash(btn, text) {
			var label = btn.getAttribute('data-label') || btn.textContent;
			btn.setAttribute('data-label', label);
			btn.textContent = text;
			setTimeout(function () { btn.textContent = label; }, 1400);
		}
		if (copyAllBtn) copyAllBtn.addEventListener('click', function () {
			copyText(shown.join('\n')).then(function () {
				flash(copyAllBtn, 'Copied ' + shown.length + '!');
				if (status) status.textContent = shown.length + ' names copied to clipboard.';
			}, function () { flash(copyAllBtn, 'Copy failed'); });
		});
		if (dlBtn) dlBtn.addEventListener('click', function () {
			var blob = new Blob([shown.join('\n') + '\n'], { type: 'text/plain' });
			var a = document.createElement('a');
			a.href = URL.createObjectURL(blob);
			a.download = (slug === 'lastname' ? 'last-names' : slug === 'random' ? 'random-names' : slug + '-names') + '.txt';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
			flash(dlBtn, 'Downloaded!');
		});

		grid.addEventListener('click', function (e) {
			var nameBtn = e.target.closest('button.nknm-name');
			if (nameBtn && withVariants) {
				toggleVariants(nameBtn.closest('.nknm-item'));
				return;
			}
			var btn = e.target.closest('[data-nknm-copy]');
			if (!btn) return;
			var text = btn.getAttribute('data-nknm-copy');
			var label = btn.textContent;
			copyText(text).then(function () {
				btn.textContent = 'Copied!';
				btn.classList.add('is-copied');
				if (status) status.textContent = text + ' copied to clipboard.';
				setTimeout(function () {
					btn.textContent = label;
					btn.classList.remove('is-copied');
				}, 1400);
			}, function () {
				if (status) status.textContent = 'Copy failed. Select the name and copy it manually.';
			});
		});
	}

	NKNM.register = function (slug, tool) {
		NKNM.tools[slug] = tool;
		var roots = document.querySelectorAll('[data-nknm-tool="' + slug + '"]');
		for (var i = 0; i < roots.length; i++) mount(roots[i]);
	};
})();
