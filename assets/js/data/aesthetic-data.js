/* Nicknamerly — aesthetic username generator word lists. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.aesthetic = {
		soft: {
			a: w('pastel honey peach blush dewy milky lilac cotton velvet sugar sweet fluffy rosy dreamy tiny cozy gentle butter berry soft sunny'),
			n: w('petal cloud daisy marshmallow bloom lullaby cupcake bunny peony moonbeam sprinkle teddy kitten cocoa latte cherry pearl dream cinnamon sparkle')
		},
		dark: {
			a: w('midnight raven velvet ashen hollow crimson gothic haunted shadow noir wicked twilight cursed lunar silent bitter dusk obsidian'),
			n: w('thorn ember crypt moon nightshade raven ash dagger veil whisper ghost eclipse rose orchid grave storm wolf coven omen')
		},
		cottagecore: {
			a: w('mossy wild woodland rustic gentle golden sunlit dewy honeyed meadow herbal quiet little cozy rosy leafy mellow fresh'),
			n: w('meadow willow fern clover hearth linen thistle bramble orchard wildflower honeybee lavender acorn basket cottage bluebell pebble brook garden toadstool')
		},
		y2k: {
			a: w('glitter cyber pixel bubblegum chrome holo neon disco jelly sparkly starry retro electric digital cherry hot candy cosmic'),
			n: w('butterfly starlet static glow flip cola kiss bytes mp3 dolly rhinestone angel barbie tamagotchi gloss lollipop heart cyber hologram')
		},
		minimal: {
			a: w('quiet still calm pure plain mono slow soft bare clear simple faded gentle muted pale hushed ivory sage'),
			n: w('echo haze drift linen stone mist sage slate tide moss air breeze salt dune cloud horizon morning field light')
		},
		vintage: {
			a: w('retro faded antique rosewood amber sepia golden dusty classic velvet vintage jazzy smoky mellow polaroid analog'),
			n: w('vinyl polaroid film cassette sunset jazz diner postcard record sepia lace typewriter carousel gramophone petticoat rosebud cinema bakelite')
		}
	};
})();
