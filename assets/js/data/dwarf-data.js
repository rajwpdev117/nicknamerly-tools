/* Nicknamerly — dwarf name generator word parts. Invented syllables with their own English meanings (not taken from any book or other site). Each part is "spelling|pronunciation|meaning". s = name starts, e = endings by gender (f/m/u), c = clan-name halves per dwarf type, each [first halves, second halves] as "spelling|meaning". */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' ').map(function (x) { return x.split('|'); }); };
	window.NKNM_DATA.dwarf = {
		s: w('Bor|BOR|stone Dur|DUR|hard Krag|KRAG|crag Grim|GRIM|stern Haz|HAZ|ore Torv|TORV|anvil Brund|BRUND|forge Dvar|DVAR|deep Skarn|SKARN|slag Rok|ROK|rock Gund|GUND|battle Hald|HALD|hammer Morn|MORN|mountain Vorn|VORN|iron Kel|KEL|coal Brom|BROM|ale Thrum|THRUM|thunder Garn|GARN|granite Hrod|HROD|glory Stoll|STOL|tunnel Rund|RUND|rune Jor|JOR|gold Brag|BRAG|oath Dak|DAK|ember Fenn|FEN|shield Gor|GOR|cave Hegg|HEG|vein Lod|LOD|lode Murg|MURG|moss Nal|NAL|lantern Pelg|PELG|pickaxe Rask|RASK|flint Vad|VAD|vault'),
		e: {
			f: w('da|dah|hearth hild|hild|battle-maid ra|rah|keeper ga|gah|singer wyn|win|friend run|roon|rune-wife ith|ith|mother dis|dis|lady na|nah|spark ka|kah|forger'),
			m: w('ak|ak|hammer dor|dor|lord gar|gar|spear mund|mund|guardian rik|rik|ruler bek|bek|digger rum|room|stout din|din|crafter gul|gool|breaker kar|kar|delver'),
			u: w('ik|ik|maker ar|ar|walker en|en|warden ur|oor|heir on|on|keeper ek|ek|seeker im|im|smith ul|ool|miner an|an|bearer ox|oks|stalwart')
		},
		c: {
			mountain: [
				w('Iron|iron Stone|stone Granite|granite Deep|deep Gold|gold Anvil|anvil Forge|forge Crag|crag Silver|silver Thunder|thunder Peak|peak Rune|rune Steel|steel Boulder|boulder'),
				w('helm|helm breaker|breaker hold|hold forge|forge delver|delver shield|shield fist|fist vault|vault beard|beard hammer|hammer axe|axe heart|heart bane|bane')
			],
			hill: [
				w('Barley|barley Ale|ale Amber|amber Copper|copper Brew|brew Hearth|hearth Honey|honey Oak|oak Clover|clover Wheat|wheat Mead|mead Meadow|meadow Hop|hop Ember|ember'),
				w('brew|brew barrel|barrel hearth|hearth field|field beard|beard keg|keg hand|hand belly|belly song|song mug|mug stew|stew vale|vale mill|mill')
			],
			duergar: [
				w('Ash|ash Slate|slate Gloom|gloom Soot|soot Grim|grim Coal|coal Gray|gray Cinder|cinder Ruin|ruin Dread|dread Iron|iron Cold|cold Shade|shade'),
				w('grip|grip chain|chain fang|fang hollow|hollow vein|vein shackle|shackle maw|maw rot|rot mine|mine gaze|gaze hook|hook spike|spike')
			]
		}
	};
})();
