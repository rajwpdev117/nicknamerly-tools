/* Nicknamerly — nickname generator word lists. Family-friendly, US English. */
window.NKNM_DATA = window.NKNM_DATA || {};
window.NKNM_DATA.nickname = {
	cute: {
		first: ['Honey', 'Sugar', 'Cookie', 'Peachy', 'Bubble', 'Cuddle', 'Sunny', 'Cocoa', 'Snuggle', 'Velvet', 'Fluffy', 'Twinkle', 'Maple', 'Berry', 'Cherry', 'Candy', 'Pudding', 'Marshmallow', 'Cinnamon', 'Butter', 'Jelly', 'Coco', 'Daisy', 'Snowy', 'Rosie', 'Pixie', 'Teddy', 'Lemon', 'Mango', 'Muffin', 'Starry', 'Moonbeam', 'Sprinkle', 'Waffle', 'Toffee', 'Cotton', 'Petal', 'Dewdrop', 'Bunny', 'Caramel', 'Vanilla', 'Gummy', 'Kitty', 'Lolly', 'Minty'],
		second: ['Bean', 'Pie', 'Bear', 'Bun', 'Pop', 'Drop', 'Cakes', 'Plum', 'Puff', 'Bug', 'Boo', 'Muffin', 'Pea', 'Kitten', 'Duck', 'Button', 'Blossom', 'Cheeks', 'Sprout', 'Nugget', 'Bunny', 'Panda', 'Pickle', 'Biscuit', 'Bubbles', 'Dumpling', 'Cupcake', 'Noodle', 'Sunshine', 'Smiles', 'Wiggles', 'Doodle', 'Bee', 'Lamb', 'Peach', 'Sparkle', 'Truffle', 'Sprinkles', 'Cub', 'Fawn'],
		solo: ['Peanut', 'Button', 'Cupcake', 'Pumpkin', 'Sprinkles', 'Bubbles', 'Cookie', 'Muffin', 'Sunshine', 'Peaches', 'Pickle', 'Noodle', 'Nugget', 'Dumpling', 'Jellybean', 'Buttercup', 'Marshmallow', 'Gumdrop', 'Pebbles', 'Snickerdoodle', 'Pudding', 'Biscuit', 'Squishy', 'Teddy', 'Kiwi', 'Mochi', 'Boba', 'Tater Tot', 'Sugarplum', 'Lovebug', 'Honeybun', 'Cinnabun', 'Poppy', 'Pip', 'Dot', 'Bean', 'Chipmunk', 'Smudge', 'Waffles', 'Bao'],
		patterns: ['{first} {second}', '{first} {second}', '{first}{second}', '{solo}', '{solo}', 'Little {solo}', '{first} {solo}']
	},
	cool: {
		first: ['Shadow', 'Midnight', 'Silver', 'Iron', 'Storm', 'Night', 'Ghost', 'Steel', 'Frost', 'Crimson', 'Obsidian', 'Thunder', 'Lunar', 'Solar', 'Phantom', 'Savage', 'Rogue', 'Blaze', 'Neon', 'Onyx', 'Arctic', 'Venom', 'Titan', 'Raven', 'Viper', 'Wild', 'Lone', 'Dark', 'Golden', 'Echo', 'Nova', 'Cobalt', 'Jade', 'Rebel', 'Atomic', 'Eclipse', 'Rapid', 'Silent', 'Sharp', 'Cyber', 'Granite', 'Scarlet'],
		second: ['Fox', 'Wolf', 'Hawk', 'Rider', 'Blade', 'Hunter', 'Falcon', 'Knight', 'Ace', 'Phoenix', 'Tiger', 'Panther', 'Strike', 'Fang', 'Spark', 'Comet', 'Ranger', 'Drifter', 'Maverick', 'Legend', 'Raven', 'Lynx', 'Cobra', 'Jaguar', 'Ghost', 'Nomad', 'Outlaw', 'Pulse', 'Bolt', 'Flame', 'Edge', 'Viper', 'Dragon', 'Bandit', 'Arrow', 'Titan', 'Runner', 'Wing', 'Storm', 'Shark'],
		solo: ['Ace', 'Blaze', 'Maverick', 'Ghost', 'Rebel', 'Jet', 'Dash', 'Flash', 'Rogue', 'Phoenix', 'Viper', 'Sly', 'Duke', 'Bolt', 'Raven', 'Onyx', 'Zephyr', 'Nova', 'Echo', 'Ryder', 'Storm', 'Talon', 'Hawk', 'Tank', 'Ice', 'Neo', 'Atlas', 'Titan', 'Slate', 'Flint', 'Rook', 'Blitz'],
		titles: ['Great', 'Legend', 'Bold', 'Brave', 'Fearless', 'Unstoppable', 'Mighty', 'Wise', 'Magnificent', 'Untamed', 'Boss', 'Machine'],
		patterns: ['{first} {second}', '{first} {second}', '{first}{second}', '{solo}', 'The {solo}', '{solo} {second}']
	},
	funny: {
		titles: ['Captain', 'Sir', 'Lord', 'Professor', 'Doctor', 'Major', 'Agent', 'Count', 'Lady', 'Chief', 'General', 'Mister', 'Madam', 'Baron', 'King', 'Queen', 'Duchess', 'Admiral'],
		nouns: ['Snackbar', 'Pickles', 'Noodles', 'Waffles', 'Pancake', 'Meatball', 'Nugget', 'Burrito', 'Taco', 'Potato', 'Bagel', 'Tater Tot', 'Sprinkles', 'Crumbs', 'Fuzzypants', 'Snorkel', 'Wobble', 'Giggles', 'Doodlebug', 'Bubblegum', 'Cheeseball', 'Jellybean', 'Banana', 'Sock Puppet', 'Spaghetti', 'Fluffernutter', 'Goober', 'Kerfuffle', 'Noodlehead', 'Pudding Cup', 'Gravy', 'Hiccup', 'Toaster', 'Zucchini', 'Muffin', 'Corndog', 'Pretzel', 'Nacho', 'Dumpling', 'Pickle Juice'],
		roles: ['Wizard', 'Ninja', 'Tornado', 'Bandit', 'Monster', 'Master', 'Machine', 'Muncher', 'Goblin', 'Overlord', 'Whisperer', 'Champion', 'Legend', 'Gremlin', 'Commander', 'Detective', 'Pirate', 'Bandito', 'Boss', 'Gobbler'],
		verbs: ['Nap', 'Snack', 'Talk', 'Laugh', 'Dance', 'Snooze', 'Sing', 'Giggle', 'Munch', 'Wiggle', 'Doodle', 'Scroll', 'Binge', 'Nibble', 'Yawn'],
		patterns: ['{titles} {nouns}', '{titles} {nouns}', '{nouns} {roles}', '{nouns} {roles}', 'Sir {verbs}s-a-Lot', 'The {nouns} {roles}', 'Lil’ {nouns}']
	},
	gaming: {
		first: ['Night', 'Dark', 'Shadow', 'Frost', 'Toxic', 'Hyper', 'Pixel', 'Neon', 'Ghost', 'Venom', 'Storm', 'Rapid', 'Cyber', 'Turbo', 'Mega', 'Ultra', 'Void', 'Glitch', 'Static', 'Zero', 'Alpha', 'Omega', 'Rogue', 'Savage', 'Lethal', 'Inferno', 'Quantum', 'Phantom', 'Atomic', 'Crimson', 'Lunar', 'Stealth', 'Chaos', 'Nitro', 'Blitz', 'Apex', 'Nova', 'Vortex', 'Frozen', 'Iron'],
		second: ['Viper', 'Sniper', 'Byte', 'Pixel', 'Rider', 'Slayer', 'Hunter', 'Wolf', 'Reaper', 'Strike', 'Fury', 'Blade', 'Ace', 'Raider', 'Storm', 'Knight', 'Hawk', 'Fang', 'Bolt', 'Ghost', 'Spectre', 'Titan', 'Crusher', 'Warden', 'Ninja', 'Rogue', 'Shot', 'Fire', 'Claw', 'Wraith', 'Bane', 'Rex', 'Fox', 'Lynx', 'Core', 'Drift', 'Pulse', 'Nexus', 'Volt', 'Rush'],
		suffix: ['X', 'Z', 'Pro', 'GG', 'OP', '99', '77', '07', '42', '360', '21', 'XL'],
		patterns: ['{first}{second}', '{first}{second}', '{first}{second}{suffix}', 'x{first}{second}x', 'The{second}', '{second}{suffix}', '{first}_{second}', 'Its{first}{second}']
	},

	/* Alliteration by first letter: cute | cool | funny */
	allit: {
		a: [['Adorable', 'Angel'], ['Awesome', 'Atomic'], ['Absurd', 'Awkward']],
		b: [['Bubbly', 'Bitty'], ['Brave', 'Bold'], ['Bonkers', 'Bouncy']],
		c: [['Cuddly', 'Cozy'], ['Cool', 'Cosmic'], ['Cheeky', 'Clumsy']],
		d: [['Dimpled', 'Darling'], ['Dark', 'Daring'], ['Dizzy', 'Doofy']],
		e: [['Enchanting', 'Eggy'], ['Epic', 'Electric'], ['Eccentric', 'Extra']],
		f: [['Fluffy', 'Fuzzy'], ['Fierce', 'Fearless'], ['Funky', 'Frazzled']],
		g: [['Giggly', 'Gentle'], ['Golden', 'Grim'], ['Goofy', 'Gooey']],
		h: [['Happy', 'Huggy'], ['Heroic', 'Hyper'], ['Hungry', 'Hilarious']],
		i: [['Itty-Bitty', 'Icy'], ['Icy', 'Iron'], ['Itchy', 'Iffy']],
		j: [['Jolly', 'Jelly'], ['Jet', 'Jagged'], ['Jiggly', 'Jumpy']],
		k: [['Kitty', 'Kind'], ['Keen', 'King'], ['Kooky', 'Klutzy']],
		l: [['Lovely', 'Little'], ['Legendary', 'Lone'], ['Loopy', 'Lazy']],
		m: [['Merry', 'Mini'], ['Mighty', 'Midnight'], ['Messy', 'Mushy']],
		n: [['Nifty', 'Nice'], ['Notorious', 'Neon'], ['Nutty', 'Noodly']],
		o: [['Oh-So-Sweet', 'Ooey-Gooey'], ['Outlaw', 'Onyx'], ['Odd', 'Oopsy']],
		p: [['Peachy', 'Precious'], ['Phantom', 'Prime'], ['Pickled', 'Puffy']],
		q: [['Quiet', 'Quaint'], ['Quick', 'Quantum'], ['Quirky', 'Quacky']],
		r: [['Rosy', 'Ruby'], ['Rebel', 'Rapid'], ['Rowdy', 'Rubbery']],
		s: [['Sweet', 'Sunny'], ['Savage', 'Silent'], ['Silly', 'Snacky']],
		t: [['Tiny', 'Twinkly'], ['Titan', 'Thunder'], ['Tickly', 'Toasty']],
		u: [['Upbeat', 'Unicorn'], ['Ultra', 'Untamed'], ['Unruly', 'Uh-Oh']],
		v: [['Velvet', 'Vanilla'], ['Venom', 'Vortex'], ['Very Silly', 'Veggie']],
		w: [['Wiggly', 'Warm'], ['Wild', 'Wicked'], ['Wacky', 'Wobbly']],
		x: [['Xtra-Cute', 'Xtra-Sweet'], ['X-treme', 'X-Factor'], ['Xtra', 'Xtra-Snacky']],
		y: [['Yummy', 'Young'], ['Young', 'Yonder'], ['Yappy', 'Yawny']],
		z: [['Zippy', 'Zesty'], ['Zero', 'Zen'], ['Zany', 'Zonked']]
	},

	/* Name-based templates. {N} first name, {S} short form, {D} diminutive, {I} initial, {A} alliteration. */
	nameTemplates: {
		cute: ['{D}', '{D}', '{S}-Boo', '{S}kins', 'Little {S}', '{S} Bear', 'Sweet {N}', '{S}bug', '{D} Pie', '{A} {S}', '{A} {N}', 'Honey {S}', '{S}-a-Doodle', '{D} Bean', '{S}-Bunny', 'Sunny {S}', '{D}-Pop', '{S}-Cakes', 'Sugar {S}', '{D} Bear', '{S} Muffin', 'Baby {S}', '{D}-Boo', '{S}-Pie', 'Lil’ {D}'],
		cool: ['{S}', 'The {S}', '{A} {S}', '{A} {N}', '{S} the {coolTitle}', 'Big {I}', '{S}zilla', '{S}ster', '{S} {coolSecond}', '{coolFirst} {S}', '{N} the {coolTitle}', '{I}-Rex', 'Boss {S}'],
		funny: ['Captain {S}', 'Sir {S}-a-Lot', '{S}inator', '{S} Mc{S}erson', 'Lil’ {S}', 'Professor {S}pants', '{A} {S}', '{S} the {funnyNoun} {funnyRole}', '{S}-o-Rama', '{S}asaurus', '{funnyTitle} {S}', '{S} McSnackface', 'Big Cheese {S}', '{S} Noodle'],
		gaming: ['{S}{gamingSecond}', 'x{S}x', '{S}{gamingSuffix}', '{gamingFirst}{S}', '{S}_{gamingSecond}', 'The{S}', '{N}{gamingSuffix}', '{gamingFirst}{S}{gamingSuffix}', 'Its{S}', '{S}Plays']
	},

	/* Common US first names → well-known nicknames. Keys are lowercase. */
	common: {
		alexander: ['Alex', 'Xander', 'Lex', 'Al'], alexandra: ['Alex', 'Lexi', 'Sandra', 'Allie'],
		andrew: ['Andy', 'Drew', 'Dre'], anthony: ['Tony', 'Ant'], abigail: ['Abby', 'Gail'],
		benjamin: ['Ben', 'Benny', 'Benji'], brandon: ['Bran', 'Brandy'], christopher: ['Chris', 'Topher', 'Kit'],
		charles: ['Charlie', 'Chuck', 'Chaz'], charlotte: ['Charlie', 'Lottie', 'Char'], christina: ['Chris', 'Tina', 'Chrissy'],
		daniel: ['Dan', 'Danny'], david: ['Dave', 'Davey'], deborah: ['Deb', 'Debbie'], dorothy: ['Dot', 'Dottie'],
		edward: ['Ed', 'Eddie', 'Ted'], elizabeth: ['Liz', 'Lizzie', 'Beth', 'Eliza', 'Betsy'], eleanor: ['Ellie', 'Nora', 'Nell'],
		emily: ['Em', 'Emmy', 'Millie'], emma: ['Em', 'Emmy'], gabriel: ['Gabe', 'Gabby'], gabriella: ['Gabby', 'Ella', 'Brie'],
		gregory: ['Greg', 'Gregg'], isabella: ['Bella', 'Izzy', 'Isa'], jacob: ['Jake', 'Jay'], james: ['Jim', 'Jimmy', 'Jamie'],
		jennifer: ['Jen', 'Jenny', 'Jenna'], jessica: ['Jess', 'Jessie'], jonathan: ['Jon', 'Johnny', 'Nate'], john: ['Johnny', 'Jack'],
		joseph: ['Joe', 'Joey'], josephine: ['Josie', 'Jo'], joshua: ['Josh'], katherine: ['Kate', 'Katie', 'Kat', 'Kit'],
		catherine: ['Cat', 'Cathy', 'Kate'], kimberly: ['Kim', 'Kimmy'], kenneth: ['Ken', 'Kenny'], lawrence: ['Larry', 'Lars'],
		madison: ['Maddie', 'Mads'], margaret: ['Maggie', 'Meg', 'Peggy', 'Daisy'], matthew: ['Matt', 'Matty'], michael: ['Mike', 'Mikey', 'Mick'],
		natalie: ['Nat', 'Nattie'], nathaniel: ['Nate', 'Nat'], nicholas: ['Nick', 'Nicky', 'Cole'], olivia: ['Liv', 'Livvy', 'Ollie'],
		patricia: ['Patty', 'Trish', 'Pat'], penelope: ['Penny', 'Nell'], rebecca: ['Becca', 'Becky'], richard: ['Rick', 'Richie', 'Ricky'],
		robert: ['Rob', 'Bob', 'Bobby', 'Robbie'], ronald: ['Ron', 'Ronnie'], samantha: ['Sam', 'Sammy'], samuel: ['Sam', 'Sammy'],
		sophia: ['Sophie', 'Soph'], stephanie: ['Steph', 'Stevie'], steven: ['Steve', 'Stevie'], stephen: ['Steve', 'Stevie'],
		susan: ['Sue', 'Suzy'], theodore: ['Theo', 'Teddy', 'Ted'], thomas: ['Tom', 'Tommy'], timothy: ['Tim', 'Timmy'],
		victoria: ['Tori', 'Vicky', 'Vic'], william: ['Will', 'Billy', 'Liam', 'Willy'], zachary: ['Zach', 'Zack'],
		valentina: ['Val', 'Tina', 'Vale'], amanda: ['Mandy', 'Manda'], ashley: ['Ash'], benedict: ['Ben'], frederick: ['Fred', 'Freddie'],
		harold: ['Harry', 'Hal'], henry: ['Hank', 'Hal'], jackson: ['Jack', 'Jax'], lucas: ['Luke'], madeline: ['Maddie', 'Maddy'],
		maximilian: ['Max'], maxwell: ['Max'], mackenzie: ['Kenzie', 'Mac'], peter: ['Pete'], raymond: ['Ray'], sebastian: ['Seb', 'Bash'],
		vincent: ['Vince', 'Vinny'], evelyn: ['Evie', 'Eve'], allison: ['Allie', 'Ali'], caroline: ['Carrie', 'Caro'], jacqueline: ['Jackie'],
		mia: ['Mimi'], harper: ['Harp'], amelia: ['Amy', 'Millie', 'Mel'],
		mason: ['Mase'], elijah: ['Eli'], oliver: ['Ollie', 'Oli'], grace: ['Gracie']
	}
};
