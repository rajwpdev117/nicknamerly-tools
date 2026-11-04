/* Nicknamerly — email name generator word lists. Family-friendly, lowercase. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.email = {
		/* Sample names used when the visitor leaves a name field empty (common US names). */
		first: w('emma liam olivia noah ava ethan sophia mason isabella lucas mia logan amelia james harper benjamin evelyn henry grace daniel chloe jack lily owen zoe wyatt nora caleb ruby leo hannah eli claire ryan'),
		last: w('carter brooks reed bennett hayes collins price morgan cole turner foster hughes bailey rivera ward cooper kelly murphy howard ross gray ellis webb hunt wells stone fisher dixon grant porter'),
		/* Words added after a name for work or portfolio addresses. */
		work: w('studio works hq pro design team co online'),
		creative: {
			a: w('sleepy cozy happy bright quiet sunny lucky gentle clever swift calm mellow golden little'),
			n: w('otter panda fox owl bunny river meadow cloud maple willow pixel sparrow pebble lantern')
		},
		cool: {
			a: w('frost shadow neon cobalt crimson lunar solar iron steel storm onyx ember echo cosmic polar sonic silver'),
			n: w('falcon wolf hawk lynx raven phoenix dragon viper orca comet blade bolt pulse drift')
		},
		clean: {
			n: w('zephyr nova orion vega atlas juno lumen sable kairo zenith flux volt echo kilo lyric saber koda nimbus cipher onyx')
		}
	};
})();
