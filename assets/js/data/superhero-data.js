/* Nicknamerly — superhero name generator word lists. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.superhero = {
		cosmic: {
			a: w('Cosmic Stellar Solar Lunar Astral Radiant Galactic Nova Orbital Infinite Celestial Eclipsed Starborn Void Quantum Gravity'),
			n: w('Comet Nova Eclipse Orbit Pulsar Meteor Galaxy Star Aurora Nebula Photon Zenith Horizon Sentinel Quasar Supernova'),
			t: w('Captain Commander Doctor Star Lady Lord')
		},
		tech: {
			a: w('Cyber Iron Steel Chrome Neon Turbo Digital Quantum Titanium Mecha Atomic Circuit Binary Alloy Hyper Volt'),
			n: w('Circuit Engine Titan Gear Protocol Pulse Cipher Reactor Drone Vector Sentinel Matrix Core Surge Bolt Forge'),
			t: w('Agent Doctor Professor Captain Commander Unit')
		},
		elemental: {
			a: w('Blazing Frozen Thunder Storm Ember Tidal Stone Inferno Crimson Azure Roaring Scorched Frost Wild Gale Molten'),
			n: w('Blaze Frost Storm Tempest Thunder Cinder Tide Avalanche Wildfire Tsunami Cyclone Magma Lightning Geyser Breeze Boulder'),
			t: w('Lord Lady Captain Master Warden')
		},
		shadow: {
			a: w('Shadow Silent Midnight Phantom Dark Black Hollow Crimson Ghost Obsidian Night Twilight Raven Veiled Cloaked Dusk'),
			n: w('Wraith Raven Specter Viper Eclipse Phantom Shade Falcon Panther Nightfall Cipher Bat Fang Dagger Veil Hawk'),
			t: w('The Agent Master Doctor Lord Lady')
		},
		mystic: {
			a: w('Mystic Arcane Ember Enchanted Eternal Sacred Spectral Runic Golden Silver Lunar Radiant Ancient Wandering Astral Oracle'),
			n: w('Sorcerer Oracle Rune Sage Talisman Raven Phoenix Wyvern Warlock Spirit Totem Mage Seer Alchemist Wisp Charm'),
			t: w('Doctor Lady Lord Master Sister')
		},
		speed: {
			a: w('Turbo Rapid Thunder Iron Mighty Savage Blazing Swift Titan Rocket Colossal Unstoppable Bullet Steel Hyper Brute'),
			n: w('Bolt Striker Titan Dash Rocket Comet Colossus Bullet Crusher Juggernaut Sprinter Blitz Hammer Rampage Streak Flash'),
			t: w('Captain Mister Miss Sergeant Commander')
		},
		suffix: {
			any: w('Knight Guardian Striker Warden Ranger Sentinel Hunter Defender Avenger Blade Champion Shield'),
			f: w('Woman Girl Lady Queen Huntress Heroine Valkyrie Empress Siren Amazon'),
			m: w('Man Boy Lord King Hunter Titan Baron Prince Warrior Wolf')
		}
	};
})();
