/* Nicknamerly — band name generator word lists. */
window.NKNM_DATA = window.NKNM_DATA || {};
var w = function (s) { return s.split(' '); };
window.NKNM_DATA.band = {
	rock: {
		a: w('Electric Midnight Velvet Golden Burning Wild Broken Rusty Neon Crimson Silver Lonely Desert Highway Thunder Paper Hollow Scarlet Restless Rolling Savage Smoky Stone Sunset Wandering Fading Bare Dirty Iron Loud Raw Sweet Wasted'),
		n: w('Wolf Highway Engine Hurricane Echo Rider Riot Fever Horizon Outlaw Mirror Saint Ghost Thunder Machine Rebel Anthem Coyote Gypsy Sparrow Stallion Drifter Revolver Harbor Static Avenue Cadillac Halo Tide'),
		p: w('Wolves Riders Outlaws Rebels Saints Ghosts Echoes Engines Drifters Strangers Sparrows Rovers Vultures Kings Dreamers Prophets Roses Bullets Satellites Thieves')
	},
	metal: {
		a: w('Black Iron Dead Burning Crimson Eternal Fallen Savage Silent Cursed Hollow Bleeding Frozen Ashen Wicked Infernal Brutal Shadow Dark Rotting Grim Obsidian Steel Blood Nameless Sunken Ravenous Unholy'),
		n: w('Cathedral Throne Abyss Reaper Legion Tomb Inferno Wraith Serpent Altar Fortress Gallows Sovereign Plague Oblivion Dominion Vengeance Warhammer Crypt Dragon Cemetery Ritual Eclipse Nightfall'),
		p: w('Reapers Wolves Legions Sinners Demons Wraiths Serpents Horsemen Ravens Titans Vultures Gods Tyrants Skulls Executioners Pilgrims Saints Hellhounds')
	},
	punk: {
		a: w('Dead Angry Filthy Rotten Loud Broken Cheap Nasty Dirty Rusty Public Stupid Reckless Greasy Sick Wasted Teenage Bad Fast Burnt Feral Local Mean Toxic Dumb'),
		n: w('Riot Habit Garbage Rebel Parade Mess Alley Static Scene Nation Revolt Anthem Disaster Hangover Gutter Switchblade Boredom Basement Kids Radio Mob Circus'),
		p: w('Rats Kids Punks Rejects Vandals Dogs Hooligans Misfits Radicals Strangers Cats Skeletons Idiots Outcasts Pigeons Delinquents Wasters')
	},
	indie: {
		a: w('Quiet Paper Glass Soft Faded Gentle Hollow Golden Winter Cardboard Wooden Little Velvet Sleepy Pale Tiny Honey Salt Lazy Mossy Amber Foxglove Cloudy Distant Linen Pastel Sunday Autumn'),
		n: w('Harbor Lantern Compass Orchard Postcard Meadow Cassette Lighthouse Daydream Balloon Window Kite Valley Static Picnic Satellite Coastline Almanac Blanket Mixtape Porch Lullaby Seasons Station'),
		p: w('Satellites Lanterns Birds Foxes Moths Weekends Letters Tides Orchards Daydreamers Sparrows Maps Ghosts Kites Cassettes Seasons Strangers Postcards Rivers')
	},
	pop: {
		a: w('Electric Neon Sugar Pink Golden Crystal Glitter Midnight Sweet Magic Cosmic Starlight Velvet Bright Wild Diamond Honey Radiant Electric Sparkling Summer Candy Atomic Platinum Dreamy Violet Hot'),
		n: w('Avenue Kiss Heart Paradise Fever Skyline Wonder Lights Rush Candy Dream Pulse Euphoria Sunrise Motion Stereo Gravity Fantasy Carousel Starlight Replay Satellite Mirage Heartbeat Confetti Playlist'),
		p: w('Hearts Dreamers Lovers Stars Sparks Rebels Angels Echoes Kisses Colors Flamingos Wonders Wildflowers Daydreams Stereos Butterflies Comets Sunsets Highs Lights')
	},
	funny: {
		a: w('Angry Soggy Cosmic Drunk Rubber Sleepy Moist Awkward Greasy Flaming Electric Magic Hairy Smelly Feral Questionable Sticky Fluffy Cursed Suspicious Dramatic Crunchy Lactose Spicy Retired Unpaid'),
		n: w('Pancake Waffle Toaster Sandwich Meatball Pickle Noodle Spatula Walrus Potato Banana Burrito Llama Penguin Hamster Nugget Kazoo Cactus Taco Muffin Goblin Pigeon Mustache Gravy Raccoon Accordion'),
		p: w('Pickles Waffles Walruses Nuggets Goblins Hamsters Pancakes Llamas Penguins Noodles Raccoons Burritos Mustaches Toasters Potatoes Pigeons Tacos Muffins Bananas Spatulas Dinosaurs Interns')
	},
	of: w('Gravity Static Thunder Silence Fire Glass Smoke Midnight Summer Rust Mirrors Gold Dust Stone Neon Winter Light Rain Ashes Chaos Velvet Strangers')
};
