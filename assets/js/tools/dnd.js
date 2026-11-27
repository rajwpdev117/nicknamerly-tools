/* Nicknamerly — D&D name generator. Depends on nknm-core.js, dnd-data.js and the elf, drow,
 * dwarf, dragonborn and tiefling tools (their engines are reused for those races). */
(function () {
	'use strict';

	var NKNM = window.NKNM;
	var D = window.NKNM_DATA && window.NKNM_DATA.dnd;
	if (!NKNM || !D) return;

	var BAD = /sex|cum|fuc|fuk|dik|nig|fag|tit|cock|rape|anal|anus|slut|shit|porn|kkk|nazi|piss|poo/i;
	var OWN = { human: 'Human', halfling: 'Halfling', gnome: 'Gnome', halforc: 'Half-orc' };
	var REUSE = {
		elf: { tool: 'elf', label: 'Elf', styles: ['high', 'wood'] },
		halfelf: { tool: 'elf', label: 'Half-elf', styles: ['half'] },
		drow: { tool: 'drow', label: 'Drow', styles: ['noble', 'common', 'exile'] },
		dwarf: { tool: 'dwarf', label: 'Dwarf', styles: ['mountain', 'hill', 'duergar'] },
		dragonborn: { tool: 'dragonborn', label: 'Dragonborn', styles: ['fire', 'frost', 'storm', 'venom'] },
		tiefling: { tool: 'tiefling', label: 'Tiefling', styles: ['infernal', 'virtue', 'pair'] }
	};
	var ALL = ['human', 'human', 'elf', 'halfelf', 'drow', 'dwarf', 'halfling', 'gnome', 'halforc', 'dragonborn', 'tiefling'];
	var CLASSES = { fighter: 'Fighter', wizard: 'Wizard', rogue: 'Rogue', cleric: 'Cleric', bard: 'Bard', ranger: 'Ranger', barbarian: 'Barbarian', paladin: 'Paladin' };

	function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

	function initialOf(raw) {
		var m = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[A-Za-z]/);
		return m ? m[0].toUpperCase() : '';
	}

	function ownName(race, sex, want, firstOnly) {
		var set = D[race];
		var starts = set.s;
		if (want) {
			var f = starts.filter(function (p) { return p[0].charAt(0).toUpperCase() === want; });
			if (f.length) starts = f;
		}
		for (var i = 0; i < 30; i++) {
			var a = NKNM.pick(starts);
			var b = NKNM.pick(set.e[sex]);
			var name = a[0] + b[0];
			if (a[0].slice(-1).toLowerCase() === b[0].charAt(0).toLowerCase()) continue;
			if (/(.)\1\1/i.test(name) || BAD.test(name)) continue;
			var pron = a[1] + '-' + b[1].toLowerCase();
			var mean = '"' + a[2] + '-' + b[2] + '"';
			if (firstOnly) return { t: name, k: '', m: 'Pronounced ' + pron + ' · means ' + mean };
			var h1 = NKNM.pick(set.h[0]);
			var h2 = NKNM.pick(set.h[1]);
			if (h1[0].slice(-1).toLowerCase() === h2[0].charAt(0).toLowerCase()) h2 = NKNM.pick(set.h[1]);
			var fam = cap((h1[0] + h2[0]).toLowerCase());
			return { t: name + ' ' + fam, k: '', m: name + ' (' + pron + ') = ' + mean + ' · ' + fam + ' = ' + h1[2] + ' + ' + h2[2] };
		}
		return null;
	}

	function raceName(race, o) {
		var g = o.gender || 'any';
		var firstOnly = g === 'first';
		var sex = g === 'f' || g === 'm' || g === 'u' ? g : NKNM.pick(['f', 'm', 'u']);
		if (OWN[race]) {
			var r = ownName(race, sex, initialOf(o.name), firstOnly);
			return r ? { r: r, label: OWN[race] } : null;
		}
		var spec = REUSE[race];
		var tool = NKNM.tools[spec.tool];
		if (!tool) return null;
		var out = tool.generate({ name: o.name, style: NKNM.pick(spec.styles), gender: g, extra: '' });
		if (!out) return null;
		if (typeof out !== 'object') out = { t: String(out), k: '', m: '' };
		return { r: out, label: spec.label };
	}

	// Each class deals its hooks from a shuffled bag, so a batch repeats none until all are used.
	var bags = {};
	function nextHook(key) {
		if (!bags[key] || !bags[key].length) {
			bags[key] = D.hooks[key].slice();
			for (var i = bags[key].length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var t = bags[key][i]; bags[key][i] = bags[key][j]; bags[key][j] = t;
			}
		}
		return bags[key].pop();
	}

	function hook(cls) {
		if (cls === 'none') return '';
		var key = CLASSES[cls] ? cls : NKNM.pick(Object.keys(CLASSES));
		return CLASSES[key] + ' hook: ' + nextHook(key);
	}

	NKNM.register('dnd', {
		generate: function (o) {
			var race = o.style && o.style !== 'random' ? o.style : NKNM.pick(ALL);
			var res = raceName(race, o);
			if (!res) return null;
			var r = res.r;
			var h = hook(o.extra || '');
			var meta = res.label + (r.m ? ' · ' + r.m : '');
			return { t: r.t, k: r.k || '', m: h ? meta + ' · ' + h : meta };
		}
	});
})();
