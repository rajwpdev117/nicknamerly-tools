/* Nicknamerly — drow name generator word parts. Invented syllables with their own English meanings (not taken from any book or other site). Each part is "spelling|pronunciation|meaning". s = name starts, e = endings by gender (f/m/u), h = house-name halves [first, second] as "spelling|pronunciation|meaning", t = trade bynames, x = surface-exile bynames (both "word|meaning"). */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' ').map(function (x) { return x.split('|'); }); };
	var x = function (s) { return s.split(';').map(function (y) { return y.split('|'); }); };
	window.NKNM_DATA.drow = {
		s: w('Vhaer|VAIR|shadow Nyth|NITH|night Zaeth|ZAYTH|venom Ilv|ILV|web Xael|ZAYL|void Quill|KWIL|silk Mael|MAYL|midnight Ryl|RIL|blade Drez|DREZ|dread Eryl|AIR-il|glow Thaz|THAZ|obsidian Orl|ORL|whisper Fyx|FIKS|fang Ulth|ULTH|cavern Syr|SEER|silver Naz|NAZ|crystal Jhael|JAYL|ritual Mor|MOR|grave Zyn|ZIN|dagger Aer|AIR|echo Lyth|LITH|ghost Chyl|KIL|glimmer Szar|ZAR|scorn Tys|TISS|cunning Hael|HAYL|oath Kryn|KRIN|bone Vyl|VIL|spite'),
		e: {
			f: w('ia|ee-ah|born yth|ith|weaver elle|el|dancer ra|rah|huntress ithra|ITH-rah|veil ynn|in|whisper ae|ay|song issa|IS-ah|blade ara|AR-ah|daughter'),
			m: w('or|or|lord ix|iks|stalker ar|ar|hunter eth|eth|master ox|oks|fang ryn|rin|walker uth|uth|keeper ik|ik|knife an|an|shade'),
			u: w('is|iss|shade yn|in|seeker ex|eks|weaver ul|ool|whisper ae|ay|echo on|on|warden ix|iks|spinner el|el|ward')
		},
		h: [
			w('Vel|VEL|silk Zaph|ZAF|venom Ilth|ILTH|shadow Kyl|KIL|obsidian Orn|ORN|web Thaer|THAIR|crystal Vhor|VOR|dusk Elk|ELK|spore Dray|DRAY|chain Nael|NAYL|night'),
			w('rath|rath|clan ryn|rin|blade thyl|thil|spire aer|air|shroud orn|orn|throne yx|iks|fang eth|eth|vow drel|drel|reach ul|ool|depth')
		],
		t: x('Webcutter|cuts down spider webs;Moldhand|tends the mushroom beds;Ropewalker|guides climbers along cavern ropes;Glowfarmer|grows glowing fungus;Dustcarrier|hauls ore and dust;Candlekeeper|keeps the lamps lit;Stonefence|builds the cave walls;Lanternwright|builds lanterns;Mirelayer|lays paths over the mire;Silentstep|moves without a sound;Pitdweller|lives deep in the pits;Bonepicker|collects bones for craft'),
		x: x('Sunblind|cannot bear daylight;Dawnshy|avoids the sunrise;Lightwary|wary of bright places;Moonwalker|walks the surface by moonlight;Skywatcher|new to the open sky;Cloudcurious|curious about clouds;Starhunter|hunts by starlight;Daybreaker|first of the family in the sun;Wildwalker|walks the surface forests;Stormdrawn|drawn to thunderstorms')
	};
})();
