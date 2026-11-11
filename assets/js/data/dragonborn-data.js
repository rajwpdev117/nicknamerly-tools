/* Nicknamerly — dragonborn name generator word parts. Invented syllables with their own English meanings (not taken from any book or other site). Each part is "spelling|pronunciation|meaning". s = name starts, e = endings by gender (f/m/u), c = clan-name first halves per element, b = clan-name second halves, n = childhood nicknames ("word|meaning"). */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' ').map(function (x) { return x.split('|'); }); };
	var x = function (s) { return s.split(';').map(function (y) { return y.split('|'); }); };
	window.NKNM_DATA.dragonborn = {
		s: w('Khar|KAR|fire Thar|THAR|storm Rhaz|RAZ|scale Zhor|ZOR|honor Drak|DRAK|dragon Sorr|SOR|sky Ixar|IK-sar|ember Nym|NIM|shadow Brax|BRAKS|claw Vyr|VEER|venom Ghal|GAL|acid Skor|SKOR|fang Zeph|ZEF|gale Rhek|REK|frost Kyr|KEER|ice Aur|OR|gold Sarn|SARN|silver Dhar|DAR|ancient Hrax|HRAKS|roar Bel|BEL|bronze Cin|SIN|copper Jhar|JAR|blaze Phyr|FEER|pyre Quor|KWOR|dawn Tath|TATH|talon Yzar|IZ-ar|lightning'),
		e: {
			f: w('ia|ee-ah|born ara|AR-ah|scale ixa|IK-sah|wing ena|EN-ah|flame eth|eth|breath yra|EER-ah|song ani|AH-nee|guardian iss|iss|queen'),
			m: w('ash|ash|slayer or|or|lord ak|ak|claw ran|ran|warden oth|oth|fang ek|ek|hunter gar|gar|flier nar|nar|roar dax|daks|champion'),
			u: w('yth|ith|keeper ar|ar|wing ex|eks|seeker an|an|breath ul|ool|scale is|iss|spark on|on|guardian aq|ak|echo')
		},
		c: {
			fire: w('Ember|ember Flame|flame Scorch|scorch Cinder|cinder Ash|ash Blaze|blaze Pyre|pyre'),
			frost: w('Frost|frost Ice|ice Snow|snow Winter|winter Glacier|glacier Rime|rime Hail|hail'),
			storm: w('Storm|storm Thunder|thunder Gale|gale Lightning|lightning Tempest|tempest Cloud|cloud Sky|sky'),
			venom: w('Venom|venom Acid|acid Bile|bile Thorn|thorn Mire|mire Sting|sting Toxin|toxin')
		},
		b: w('wing|wing scale|scale claw|claw breath|breath fang|fang heart|heart crest|crest blade|blade fall|fall born|born call|call'),
		n: x('Pebble|small and sturdy;Skitter|always scurrying;Sparky|a quick temper;Lumpy|round and cheerful;Chomper|always hungry;Zigzag|never goes straight;Squeaker|a high little voice;Bramble|prickly and stubborn;Tumble|clumsy on the run;Nibbler|a tiny appetite;Puddle|loves to splash;Hopper|can not sit still;Tinker|always taking things apart;Whistler|hums through every fight;Dash|first to the finish;Grumble|a deep morning growl;Cricket|loud at night;Button|small and fastened to a parent;Sprout|growing fast;Wobble|new on the wing;Biscuit|sweet and crumbly;Fuzz|a bit of down left on the head;Thimble|tiny but tough;Mumble|talks to the floor;Soot|always dusty')
	};
})();
