/* Nicknamerly — D&D name generator word lists for the races without their own page
 * (human, halfling, gnome, half-orc) plus one-line backstory hooks per class.
 * Names are built from invented syllables; each part has an in-world meaning.
 * Format: [spelling, pronunciation, meaning]. Family parts: [word, '', meaning]. */
window.NKNM_DATA = window.NKNM_DATA || {};
window.NKNM_DATA.dnd = {
	human: {
		s: [['Ald', 'AWLD', 'old'], ['Bran', 'BRAN', 'raven'], ['Cor', 'KOR', 'heart'], ['Ed', 'ED', 'wealth'], ['Gar', 'GAR', 'spear'], ['Hal', 'HAL', 'hall'], ['Mar', 'MAR', 'sea'], ['Ros', 'ROHZ', 'rose'], ['Tam', 'TAM', 'twin'], ['Wil', 'WIL', 'will'], ['Els', 'ELS', 'oath'], ['Ber', 'BER', 'bear'], ['Dun', 'DUN', 'hill'], ['Lia', 'LEE-ah', 'light'], ['Mer', 'MER', 'bright'], ['Ost', 'OST', 'east'], ['Ka', 'KAH', 'pure'], ['Ivor', 'EYE-vor', 'yew']],
		e: {
			f: [['a', 'ah', 'one'], ['wyn', 'win', 'fair'], ['ine', 'een', 'gift'], ['etta', 'et-ah', 'little'], ['ise', 'eez', 'wise'], ['ra', 'rah', 'song']],
			m: [['ric', 'rik', 'ruler'], ['win', 'win', 'friend'], ['mund', 'mund', 'protector'], ['an', 'an', 'son'], ['ard', 'ard', 'brave'], ['den', 'den', 'valley']],
			u: [['en', 'en', 'kin'], ['ry', 'ree', 'keeper'], ['el', 'el', 'star'], ['is', 'is', 'path']]
		},
		h: [
			[['Thorn', '', 'thorn'], ['Ash', '', 'ash'], ['Bright', '', 'bright'], ['Stone', '', 'stone'], ['Mill', '', 'mill'], ['Hart', '', 'deer'], ['Gray', '', 'gray'], ['Wolf', '', 'wolf'], ['River', '', 'river'], ['Oak', '', 'oak'], ['Black', '', 'black'], ['Hawk', '', 'hawk']],
			[['wood', '', 'wood'], ['ford', '', 'river crossing'], ['well', '', 'spring'], ['field', '', 'field'], ['ridge', '', 'ridge'], ['brook', '', 'brook'], ['hall', '', 'hall'], ['ley', '', 'meadow'], ['wick', '', 'village'], ['mere', '', 'lake']]
		]
	},
	halfling: {
		s: [['Pip', 'PIP', 'seed'], ['Mer', 'MER', 'merry'], ['Ros', 'ROZ', 'rose'], ['Tob', 'TOB', 'good'], ['Lil', 'LIL', 'lily'], ['Cor', 'KOR', 'corn'], ['Bel', 'BEL', 'bell'], ['Mil', 'MIL', 'honey'], ['Fen', 'FEN', 'fen'], ['Wil', 'WIL', 'willow'], ['Dan', 'DAN', 'dandelion'], ['Per', 'PER', 'pear'], ['Kel', 'KEL', 'kettle'], ['Pol', 'POL', 'poppy'], ['Sam', 'SAM', 'summer'], ['Nel', 'NEL', 'nutshell']],
		e: {
			f: [['la', 'lah', 'little'], ['ie', 'ee', 'sweet'], ['ly', 'lee', 'bright'], ['wyn', 'win', 'glad'], ['ella', 'el-ah', 'dear']],
			m: [['po', 'poh', 'small'], ['do', 'doh', 'merry'], ['by', 'bee', 'friendly'], ['wick', 'wik', 'home'], ['ric', 'rik', 'lucky']],
			u: [['ey', 'ee', 'kind'], ['in', 'in', 'snug'], ['o', 'oh', 'quick']]
		},
		h: [
			[['Tea', '', 'tea'], ['Brush', '', 'brush'], ['Good', '', 'good'], ['Thistle', '', 'thistle'], ['Honey', '', 'honey'], ['Apple', '', 'apple'], ['Tall', '', 'tall'], ['Hill', '', 'hill'], ['Quick', '', 'quick'], ['Green', '', 'green'], ['Butter', '', 'butter'], ['Moss', '', 'moss']],
			[['leaf', '', 'leaf'], ['gather', '', 'gatherer'], ['bough', '', 'bough'], ['barrel', '', 'barrel'], ['foot', '', 'foot'], ['bottle', '', 'bottle'], ['topple', '', 'tumble'], ['burrow', '', 'burrow'], ['kettle', '', 'kettle'], ['meadow', '', 'meadow']]
		]
	},
	gnome: {
		s: [['Fiz', 'FIZ', 'spark'], ['Bim', 'BIM', 'gear'], ['Nim', 'NIM', 'clever'], ['Tink', 'TINK', 'tinker'], ['Gil', 'GIL', 'gem'], ['Wren', 'REN', 'wren'], ['Zook', 'ZOOK', 'puzzle'], ['Quil', 'KWIL', 'quill'], ['Mop', 'MOP', 'soot'], ['Ori', 'OR-ee', 'gold'], ['Bree', 'BREE', 'breeze'], ['Pell', 'PEL', 'pebble'], ['Dab', 'DAB', 'paint'], ['Sni', 'SNEE', 'sniff'], ['Wob', 'WOB', 'wobble'], ['Jin', 'JIN', 'jingle']],
		e: {
			f: [['wick', 'wik', 'light'], ['ella', 'el-ah', 'bright'], ['nine', 'neen', 'little'], ['bi', 'bee', 'busy'], ['yn', 'in', 'sparkle']],
			m: [['bo', 'boh', 'bold'], ['dle', 'dul', 'tinkerer'], ['nock', 'nok', 'knot'], ['ziz', 'ziz', 'whiz'], ['ble', 'bul', 'bauble']],
			u: [['let', 'let', 'spark'], ['ix', 'iks', 'trick'], ['o', 'oh', 'joy']]
		},
		h: [
			[['Cog', '', 'cog'], ['Gear', '', 'gear'], ['Fizzle', '', 'fizzle'], ['Tumble', '', 'tumble'], ['Spark', '', 'spark'], ['Copper', '', 'copper'], ['Glitter', '', 'glitter'], ['Puzzle', '', 'puzzle'], ['Clock', '', 'clock'], ['Whistle', '', 'whistle'], ['Pebble', '', 'pebble'], ['Ink', '', 'ink']],
			[['spinner', '', 'spinner'], ['wick', '', 'wick'], ['pot', '', 'pot'], ['bolt', '', 'bolt'], ['button', '', 'button'], ['sprocket', '', 'sprocket'], ['tinker', '', 'tinker'], ['bang', '', 'bang'], ['lock', '', 'lock'], ['top', '', 'spinning top']]
		]
	},
	halforc: {
		s: [['Gro', 'GROH', 'strong'], ['Thak', 'THAK', 'axe'], ['Mur', 'MUR', 'storm'], ['Kru', 'KROO', 'iron'], ['Ug', 'UG', 'first'], ['Bash', 'BASH', 'fist'], ['Dur', 'DUR', 'stone'], ['Rok', 'ROK', 'rock'], ['Vol', 'VOL', 'wolf'], ['Zar', 'ZAR', 'fire'], ['Hol', 'HOL', 'howl'], ['Ska', 'SKAH', 'scar'], ['Ogg', 'OG', 'tusk'], ['Brak', 'BRAK', 'break'], ['Gru', 'GROO', 'growl'], ['Yar', 'YAR', 'hunt']],
		e: {
			f: [['ga', 'gah', 'fierce'], ['ka', 'kah', 'hunter'], ['ra', 'rah', 'blood'], ['ash', 'ash', 'ember'], ['ena', 'en-ah', 'shield']],
			m: [['nak', 'nak', 'fist'], ['gar', 'gar', 'spear'], ['dush', 'dush', 'crusher'], ['mok', 'mok', 'tusk'], ['rug', 'rug', 'charger']],
			u: [['ul', 'ul', 'wolf'], ['ek', 'ek', 'blade'], ['az', 'az', 'storm']]
		},
		h: [
			[['Iron', '', 'iron'], ['Skull', '', 'skull'], ['Blood', '', 'blood'], ['Stone', '', 'stone'], ['Storm', '', 'storm'], ['Bone', '', 'bone'], ['Ash', '', 'ash'], ['Wolf', '', 'wolf'], ['Red', '', 'red'], ['Grim', '', 'grim'], ['Scar', '', 'scar'], ['Thunder', '', 'thunder']],
			[['tusk', '', 'tusk'], ['fist', '', 'fist'], ['hide', '', 'hide'], ['splitter', '', 'splitter'], ['jaw', '', 'jaw'], ['born', '', 'born'], ['howl', '', 'howl'], ['breaker', '', 'breaker'], ['maw', '', 'maw'], ['hammer', '', 'hammer']]
		]
	},
	hooks: {
		fighter: ['Deserted a mercenary company over one bad order.', 'Still carries a broken sword from a lost duel.', 'Trains at dawn, no matter what.', 'Owes a debt to the captain who spared them.', 'Won a tournament under a false name.', 'Guards a caravan road nobody else will take.', 'Keeps a tally of every fight on the inside of their shield.', 'Was a royal guard until the king they guarded fell.', 'Fights with their mother’s old axe.', 'Can’t refuse a challenge, even a foolish one.'],
		wizard: ['Was expelled from an academy for reading one forbidden page.', 'Hunts the rival who stole their spellbook.', 'Talks to their owl familiar more than to people.', 'Studies a map that redraws itself every night.', 'Burned down a library by accident and is still paying for it.', 'Collects spells the way others collect coins.', 'Accidentally turned their mentor into a toad, and is looking for the cure.', 'Writes every spell in a code only they can read.', 'Learned magic from a book found in a shipwreck.', 'Is afraid of the dark, despite knowing a light spell.'],
		rogue: ['Left a thieves guild with a ledger they want back.', 'Never sits with their back to a door.', 'Only steals from people who deserve it.', 'Goes by three names in three different cities.', 'Owes money to someone very patient.', 'Picked their first lock at age six.', 'Grew up running messages for a smuggler.', 'Keeps one stolen coin from every heist.', 'Is secretly the heir to a minor noble house.', 'Can talk their way out of anything except family.'],
		cleric: ['Heard their god speak once and has been listening ever since.', 'Carries the ashes of a temple that fell.', 'Heals friends and enemies alike, to the party’s dismay.', 'Doubts their faith after a prayer went unanswered.', 'Was raised in a monastery on a cliff.', 'Keeps a list of everyone they could not save.', 'Follows a god of travelers and has never stayed anywhere long.', 'Was a healer on a battlefield before taking holy vows.', 'Wears a holy symbol made by a child they saved.', 'Hears a quiet voice that may or may not be divine.'],
		bard: ['Has a song about everyone they have ever met.', 'Lost a lute in a bet and wants it back.', 'Was banned from a royal court for one verse.', 'Collects legends no one else believes.', 'Plays a different instrument in every town.', 'Is writing an epic, and you are in it.', 'Ran away from a family of serious scholars.', 'Can’t resist a dramatic entrance.', 'Pays for every meal with a story.', 'Once sang a dragon to sleep, or so they say.'],
		ranger: ['Tracks the beast that destroyed their village.', 'Trusts animals more than people.', 'Knows every trail between the river and the peaks.', 'Was raised by a hermit in the deep woods.', 'Leaves a carved token at every camp.', 'Guards a forest that no map shows.', 'Has a hawk companion that judges everyone.', 'Maps the wild places for a guild of explorers.', 'Lost their way once and still won’t talk about it.', 'Sleeps under the stars, even when there’s a bed.'],
		barbarian: ['Left their tribe after a vision in a storm.', 'Wears the tooth of a beast they killed alone.', 'Laughs loudest right before a fight.', 'Is learning to read, slowly and proudly.', 'Seeks an honorable death, but not yet.', 'Plays a drum from home every night at dusk.', 'Was champion of a fighting pit and walked away free.', 'Talks to the spirits of their ancestors before battle.', 'Hates cities, but loves city food.', 'Broke a giant’s club with their bare hands, as a child.'],
		paladin: ['Swore an oath at a dying friend’s side.', 'Broke an oath once and is trying to earn it back.', 'Protects a village that thinks they are a legend.', 'Rides a horse with more courage than sense.', 'Hunts the undead that wiped out their order.', 'Keeps their oath written on a worn ribbon.', 'Was a farmer until a holy light chose them.', 'Keeps their vows even when no one is watching.', 'Is searching for a lost relic of their order.', 'Was raised by the knight who defeated their father.']
	}
};
