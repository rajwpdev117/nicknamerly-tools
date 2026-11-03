/* Nicknamerly — Discord username generator word lists. Family-friendly, lowercase. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.discord = {
		cool: {
			a: w('frost shadow midnight arctic silent neon cobalt crimson lunar solar ghost iron steel storm onyx ember echo static cosmic void polar sonic atomic silver obsidian'),
			n: w('fox wolf hawk falcon raven lynx cobra panther tiger phoenix dragon viper orca jaguar eagle shark stag mantis comet blade bolt pulse drift')
		},
		gaming: {
			a: w('toxic turbo nitro blitz apex rogue chaos ultra alpha omega venom vortex quantum stealth rapid fatal reckless havoc fury cyber lethal savage hyper'),
			n: w('sniper reaper slayer striker wraith raider titan viper hunter phantom ninja warden crusher blaster gunner ranger stalker bandit clutch pilot knight')
		},
		cute: {
			a: w('tiny fluffy cozy sleepy bubbly sparkly cuddly happy soft sweet dreamy lucky fuzzy snuggly pastel'),
			n: w('panda bunny mochi kitten pixel cloud boba muffin penguin otter pudding cupcake duckling sprout marshmallow waffle button bean dumpling')
		},
		dark: {
			a: w('midnight raven hollow crimson gothic haunted shadow noir wicked twilight cursed silent bitter dusk obsidian'),
			n: w('thorn ember crypt moon nightshade ash dagger veil whisper ghost eclipse rose grave storm coven omen')
		},
		funny: {
			a: w('sir captain professor doctor agent baron sneaky grumpy confused sleepy chaotic suspicious'),
			n: w('noodle waffle pickle taco potato muffin nugget bacon toast cheese burrito biscuit pretzel goblin wizard banana'),
			p: w('lagismycopilot afkandsnacking pressxtodance potatoaim snackbreakplz respawnricky lootgoblin controllerchef noscopenoodle clutchorcry grindsetgoblin cheesetheboss')
		},
		clean: {
			n: w('vortex zephyr nyx onyx rogue blaze kairo zenith orion vega axel echo flux volt nova kilo zero cipher glitch nimbus ember lyric saber atlas koda juno lumen sable')
		}
	};
})();
