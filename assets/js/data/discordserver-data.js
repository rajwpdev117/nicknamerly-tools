/* Nicknamerly — Discord server name generator word lists. Family-friendly, Title Case. a = adjectives, n = plural nouns, c = community words. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.discordserver = {
		gaming: {
			a: w('Pixel Turbo Nitro Rogue Apex Epic Neon Cyber Legendary Respawn Critical Arcade Elite Rapid Hyper Final Lucky Chaotic Savage Mythic Quantum Blitz Stealth Glitch Overclocked'),
			n: w('Raiders Wolves Dragons Knights Titans Reapers Phantoms Rangers Legends Gamers Ninjas Wizards Hunters Champions Outlaws Warriors Pilots Specters Crusaders Sentinels Gladiators Speedrunners Looters Strategists'),
			c: w('Squad Guild Clan Arena Lobby Base Hub Den Legion Alliance Crew Camp Hangout Outpost')
		},
		study: {
			a: w('Quiet Focused Bright Curious Caffeinated Productive Lofi Midnight Sunny Cozy Early Deep Sharp Steady Calm Clever'),
			n: w('Scholars Owls Notebooks Pencils Planners Flashcards Thinkers Nerds Bookworms Tutors Students Geniuses Minds Brains Highlighters Researchers'),
			c: w('Library Hall Lounge Club Society Academy Cafe Room Hub Corner Desk Group Haven Workshop')
		},
		anime: {
			a: w('Sakura Midnight Silent Crimson Starlit Moonlit Dreamy Spirited Lucky Wandering Neon Eternal Mystic Blazing Cherry'),
			n: w('Ronin Samurai Spirits Foxes Dragons Ninjas Lanterns Blossoms Senpais Otaku Nekos Kitsune Wanderers Pilots Heroes'),
			c: w('Dojo Cafe Guild Shrine Club Society Haven Academy Lounge Hub Den Realm Village Hideout')
		},
		chill: {
			a: w('Cozy Sleepy Sunny Lazy Mellow Friendly Warm Quiet Happy Tiny Gentle Breezy Peaceful Midnight Golden Lucky Snug'),
			n: w('Pals Friends Buddies Vibes Otters Pandas Clouds Sunsets Blankets Cats Hammocks Marshmallows Nomads Strangers Misfits Penguins'),
			c: w('Lounge Hangout Corner Porch Treehouse Cafe Haven Club Hub Den Nook Camp Garden Patio')
		},
		creative: {
			a: w('Pixel Neon Golden Inky Wild Bright Vivid Velvet Painted Electric Dreamy Analog Moody Quiet Bold Silver Abstract'),
			n: w('Artists Makers Doodles Sketches Beats Melodies Palettes Writers Dreamers Creators Muses Brushes Poets Photographers Chords Composers'),
			c: w('Studio Gallery Workshop Collective Atelier Lab Club Garage Corner Space Hub Guild Stage')
		},
		funny: {
			a: w('Sneaky Grumpy Chaotic Confused Suspicious Sleepy Unhinged Questionable Awkward Dramatic Salty Legendary Wholesome Cursed Hungry Offbeat'),
			n: w('Goblins Potatoes Noodles Pickles Tacos Nuggets Penguins Raccoons Llamas Waffles Bananas Goats Gremlins Muffins Burritos Toasters'),
			c: w('Society Zoo Circus Embassy Headquarters Basement Hideout Council Department Tavern Bureau Clubhouse Kingdom')
		},
		community: {
			a: w('Friendly United Global Open Epic Daily Local Golden Shared Bright Rising Proud Wholesome Welcome Central'),
			n: w('Friends Fans Members Builders Learners Neighbors Dreamers Adventurers Explorers Voices Minds Allies Pioneers Legends Creators'),
			c: w('Community Hub Square Club Alliance Network Collective Circle Society Commons Haven Base Hangout Family')
		}
	};
})();
