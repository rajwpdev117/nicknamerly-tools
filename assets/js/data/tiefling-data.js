/* Nicknamerly — tiefling name generator word parts. Invented syllables with their own English meanings (not taken from any book or other site). Each part is "spelling|pronunciation|meaning". s = infernal name starts, e = endings by gender (f/m/u), h = surname halves [first, second], v = virtue words ("word|meaning"), human = everyday human-style names. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' ').map(function (x) { return x.split('|'); }); };
	var x = function (s) { return s.split(';').map(function (y) { return y.split('|'); }); };
	window.NKNM_DATA.tiefling = {
		s: w('Az|AZ|ash Vor|VOR|oath Zeth|ZETH|flame Kaz|KAZ|brand Mor|MOR|dusk Rax|RAKS|claw Thys|THISS|thorn Xar|ZAR|ember Dru|DROO|iron Sar|SAR|smoke Vex|VEKS|spite Ryn|RIN|ruin Cyr|SEER|cinder Hak|HAK|horn Ner|NER|midnight Phor|FOR|pact Syl|SIL|whisper Tarn|TARN|bone Brae|BRAY|blood Kez|KEZ|scorch Lys|LISS|temptation Orv|ORV|bargain Jaz|JAZ|spark Gor|GOR|rage Zul|ZOOL|dread Ek|EK|cunning Ish|ISH|secret Quar|KWAR|crimson Malv|MALV|venom Nev|NEV|ruse Dax|DAKS|fang'),
		e: {
			f: w('ia|ee-ah|born elle|el|heart ixa|IK-sah|lady yra|EER-ah|song ena|EN-ah|keeper ithra|ITH-rah|flame ara|AR-ah|daughter yss|iss|queen oleth|OL-eth|dancer ine|een|spirit'),
			m: w('ak|ak|blade or|or|lord ion|ee-on|slayer us|us|warden ar|ar|hunter eth|eth|master os|os|fist yx|iks|fang ek|ek|son thor|thor|walker'),
			u: w('is|iss|shade el|el|ward yn|in|seeker ax|aks|whisperer an|an|keeper ix|iks|weaver ys|iss|dreamer ul|ool|talon ael|ayl|wanderer on|on|echo')
		},
		h: [
			w('Ash|ASH|ash Cinder|SIN-der|cinder Ember|EM-ber|ember Night|NITE|night Dusk|DUSK|dusk Hollow|HOL-oh|hollow Crimson|KRIM-zun|crimson Iron|EYE-urn|iron Bone|BOHN|bone Soot|SOOT|soot Ruin|ROO-in|ruin Scorch|SKORCH|scorch Gloom|GLOOM|gloom Raven|RAY-ven|raven Pyre|PIRE|pyre Brim|BRIM|brimstone Smoke|SMOHK|smoke Thorn|THORN|thorn'),
			w('brand|brand veil|veil vane|vane born|born fall|fall mark|mark thorn|thorn whisper|whisper bane|bane crest|crest wake|wake spire|spire horn|horn heart|heart song|song shade|shade')
		],
		v: x('Mercy|a gentle kindness;Verity|the plain truth;Solace|comfort in a dark hour;Valor|courage under fire;Grace|an easy elegance;Clemency|mercy shown to an enemy;Reverie|a waking dream;Zeal|burning enthusiasm;Serenity|a deep calm;Resolve|a will that does not bend;Candor|honest speech;Devotion|loyalty that lasts;Fable|a story passed down;Glimmer|a small, stubborn light;Hush|a held-breath quiet;Lament|a song of loss;Mirth|a bright, easy laugh;Vesper|the evening star;Yearning|a longing for something far away;Wonder|awe at the world;Ardor|fierce passion;Bliss|pure happiness;Charity|giving without asking;Courage|stepping forward anyway;Ember|a spark that refuses to die;Faith|trust without proof;Honor|a promise kept;Hopeful|always looking to tomorrow;Jubilee|a joyous celebration;Kindred|one of your own;Liberty|freedom to choose;Merit|earned worth;Patience|calm that outlasts trouble;Prudence|careful wisdom;Rapture|overwhelming joy;Sanctuary|a safe place;Tempest|a storm that cleans the air;Tranquil|peaceful and still;Triumph|a hard-won victory;Unity|many standing as one'),
		human: {
			f: 'Mara Elsa Nora Tessa Lena Rosalind Greta Willa Hana Isolde Maren Livia Clara Petra Dahlia Brigid Odette Winnie Edda Joss'.split(' '),
			m: 'Garrick Tobias Henrik Corwin Aldous Piers Marcus Leofric Emmett Dorian Ansel Bram Fenton Wesley Gideon Ronan Silas Thaddeus Alden Cormac'.split(' '),
			u: 'Rowan Quinn Wren Sage Robin Jules Morgan Riley Avery Kit Rue Sam Casey Marlow Linden Emery Reese Tamsin Arden Kerry'.split(' '),
			l: 'Ashford Blackwell Thorne Hollis Marsh Whitlock Draper Fairchild Calloway Ridley Harrow Pemberton Wickham Ashby Langley Brightwater Stanton Hadley Merriweather Corbin Fletcher Sutton Granger Winslow Penhallow Tolliver Redmond Carver Hartwell Lockwood'.split(' ')
		}
	};
})();
