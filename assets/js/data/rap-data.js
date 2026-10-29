/* Nicknamerly — rap name generator word lists. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.rap = {
		hiphop: {
			p: w('MC Lil Young Big Kid Doc Mr. Don Chief'),
			a: w('Golden Midnight Silent Rolling Raw Royal Iron Electric Concrete Neon Broken Savage Crown Rebel Platinum Wild'),
			n: w('Wolf Phantom Comet Flow Legend Prophet Giant Poet Rebel Kingpin Ghost Titan Maverick Nomad Hustler Storm'),
			s: w('Flow Bars Rhyme Verse Mic Cipher Beats Legend Lyrics Poet')
		},
		trap: {
			p: w('Lil Yung Young Big YN Rich Cash'),
			a: w('Icy Wavy Diamond Gold Dark Neon Plush Savage Flashy Platinum Foreign Frozen Velvet Chrome Wild Loud'),
			n: w('Phantom Dollar Chain Wave Flex Ice Drip Jewel Boss Vault Racks Cash Gold Comet Jet Lambo'),
			s: w('Bands Racks Dollar Savage Ice Chain Wavy Flex Money Drip Gold Jet')
		},
		old: {
			p: w('MC DJ Kool Big Slick Fresh Mr. Doc Grand Captain'),
			a: w('Kool Fresh Smooth Slick Funky Groovy Classic Retro Boom Golden Vinyl Rolling Fly Supreme Mighty Cool'),
			n: w('Flash Groove Rhyme Funk Boombox Turntable Rocker Cipher Beat Mixtape Breaker Scratch Rapper Poet Master Rhythm'),
			s: w('Fresh Cool Smooth Slick Flash Funk Groove Rhyme Rocker Master')
		},
		drill: {
			p: w('Lil Yung Chief Big Don Boss'),
			a: w('Dark Cold Steel Shadow Iron Silent Heavy Grey Black Stone Fierce Midnight Cloaked Ruthless Savage Frozen'),
			n: w('Shadow Storm Blitz Tank Steel Smoke Wolf Viper Boss Hawk Panther Ghost Raven Menace Titan Fang'),
			s: w('Chief Don Blitz Tank Steel Shadow Smoke Boss Wolf Titan')
		},
		smooth: {
			p: w('Mr. Sir Doc Kid Young Prince Smooth'),
			a: w('Velvet Silk Honey Golden Midnight Mellow Smooth Satin Sunset Royal Moonlit Crystal Soft Ivory Amber Cool'),
			n: w('Verse Melody Soul Velvet Groove Lyric Harmony Rhythm Poet Silk Sunset Muse Mic Echo Vibe Whisper'),
			s: w('Verse Soul Velvet Melody Vibe Poet Silk Groove Muse Flow')
		},
		funny: {
			p: w('Lil Big Sir Dr. Mr. Young Captain Baron'),
			a: w('Soggy Crunchy Moist Sleepy Angry Spicy Fluffy Cosmic Rubber Greasy Sticky Dramatic Suspicious Retired Magic Cheesy'),
			n: w('Waffle Nugget Pickle Noodle Taco Potato Spaghetti Muffin Meatball Pancake Banana Burrito Toaster Llama Hamster Penguin'),
			s: w('Waffles Nuggets Pickles Noodles Tacos Potatoes Muffins Burritos Pancakes Llamas')
		},
		the: w('Kid Great Real Boss King Wolf Ghost Don Prince Legend Beast Flow')
	};
})();
