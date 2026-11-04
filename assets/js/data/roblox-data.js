/* Nicknamerly — Roblox username generator word lists. Family-friendly, lowercase (the tool capitalizes them). */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.roblox = {
		cool: {
			a: w('frost shadow neon cobalt crimson lunar solar ghost iron steel storm onyx ember echo cosmic polar sonic atomic silver blaze turbo'),
			n: w('fox wolf hawk falcon raven lynx cobra panther tiger phoenix dragon viper orca jaguar eagle shark comet blade bolt pulse')
		},
		cute: {
			a: w('tiny fluffy cozy sleepy bubbly sparkly cuddly happy soft sweet dreamy lucky fuzzy pastel'),
			n: w('panda bunny mochi kitten pixel cloud boba muffin penguin otter pudding cupcake duckling sprout marshmallow waffle bean dumpling')
		},
		funny: {
			a: w('sir captain professor doctor agent baron sneaky grumpy confused sleepy chaotic'),
			n: w('noodle waffle pickle taco potato muffin nugget bacon toast cheese burrito pretzel goblin wizard banana'),
			p: w('lagismycopilot afkandsnacking pressxtodance potatoaim snackbreakplz lootgoblin controllerchef clutchorcry cheesetheboss oofcollector respawnricky')
		},
		pro: {
			a: w('toxic turbo nitro blitz apex rogue chaos ultra alpha omega venom vortex quantum stealth rapid fatal havoc fury cyber lethal savage hyper'),
			n: w('sniper reaper slayer striker wraith raider titan hunter phantom ninja warden crusher blaster gunner ranger stalker knight pilot')
		},
		blocky: {
			a: w('brick block blocky pixel voxel cubic builder epic mega super ultimate lucky speedy'),
			n: w('builder obby tycoon noob bacon brick oof parkour simulator dropper spawn crafter hero racer pilot')
		},
		clean: {
			n: w('vortex zephyr nyx onyx rogue blaze kairo zenith orion vega axel echo flux volt nova kilo zero cipher glitch nimbus ember lyric saber atlas koda juno lumen sable')
		}
	};
})();
