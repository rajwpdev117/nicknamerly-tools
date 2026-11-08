/* Nicknamerly — elf name generator word parts. Invented syllables with their own English meanings (not taken from any book or other site). Each part is "spelling|pronunciation|meaning". s = name starts, e = endings by gender (f/m/u), h = house-name halves [first, second], c = Christmas parts. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' ').map(function (x) { return x.split('|'); }); };
	var x = function (s) { return s.split(';').map(function (y) { return y.split('|'); }); };
	window.NKNM_DATA.elf = {
		high: {
			s: w('Aer|AIR|sky Ael|AYL|dawn Sil|SIL|silver Thal|THAL|gold Lun|LOON|moon Vael|VAYL|song Cael|KAYL|light Ilyr|IL-eer|star Eluv|EL-oov|grace Myr|MEER|mist Orin|OR-in|crown Fael|FAYL|joy Hal|HAL|radiance Quel|KWEL|wisdom Rhae|RAY|dream Sael|SAYL|whisper Zael|ZAYL|sun Lorn|LORN|memory Ven|VEN|path Aris|AIR-is|dusk-glow Alar|AL-ar|flame Elar|EL-ar|spring Nael|NAYL|tide Tyl|TIL|crystal Ola|OH-la|garden Iar|EE-ar|water Cyr|SEER|banner'),
			e: {
				f: w('iel|ee-EL|bearer ara|AH-ra|keeper wyn|win|friend ira|EER-ah|singer elle|el|flower ia|ee-ah|spirit ryn|rin|weaver essa|ESS-ah|heart alyn|AL-in|dancer inde|IN-deh|light'),
				m: w('ion|ee-on|guardian dil|dil|friend ir|eer|walker or|or|warden as|ahs|blade andor|an-dor|shield eth|eth|archer rin|rin|weaver orel|or-el|watcher ael|ayl|wanderer'),
				u: w('is|is|spirit en|en|dreamer el|el|bearer ra|rah|song yn|in|light ae|ay|wind ith|ith|seeker ari|ah-ree|keeper')
			},
			h: [w('Star|STAR|star Dawn|DAWN|dawn Silver|SIL-ver|silver Sun|SUN|sun Moon|MOON|moon Gold|GOLD|gold Crystal|KRIS-tal|crystal Sky|SKY|sky Light|LITE|light Dusk|DUSK|dusk'), w('weaver|WEE-ver|weaver song|SONG|song whisper|WHIS-per|whisper bloom|BLOOM|bloom spire|SPY-er|spire crown|KROWN|crown bearer|BAIR-er|bearer walker|WAW-ker|walker glade|GLAYD|glade')]
		},
		wood: {
			s: w('Fern|FERN|fern Moss|MOSS|moss Briar|BRY-er|briar Hazel|HAY-zel|hazel Willow|WIL-oh|willow Ivy|EYE-vee|ivy Thorn|THORN|thorn Brook|BROOK|brook Leaf|LEEF|leaf Dew|DYOO|dew Clover|KLOH-ver|clover Aspen|AS-pen|aspen Heron|HAIR-un|heron Wren|REN|wren Birch|BURCH|birch Elm|ELM|elm Sage|SAYJ|sage Bram|BRAM|bramble Rowen|ROH-wen|rowan Fenn|FEN|marsh Lark|LARK|lark Petal|PET-al|petal Tarn|TARN|pool Oak|OHK|oak Mist|MIST|mist'),
			e: {
				f: w('iel|ee-EL|bearer wyn|win|friend elle|el|flower ia|ee-ah|spirit ara|AH-ra|keeper essa|ESS-ah|heart ine|een|dancer'),
				m: w('ion|ee-on|guardian ir|eer|walker or|or|warden eth|eth|archer rin|rin|runner as|ahs|tracker ul|ool|keeper'),
				u: w('is|is|wanderer en|en|dreamer el|el|bearer yn|in|spirit ae|ay|wind ith|ith|seeker')
			},
			h: [w('Oak|OHK|oak Fern|FERN|fern Moss|MOSS|moss Willow|WIL-oh|willow Briar|BRY-er|briar Thorn|THORN|thorn Brook|BROOK|brook Hazel|HAY-zel|hazel Leaf|LEEF|leaf Ivy|EYE-vee|ivy Dew|DYOO|dew Fox|FOKS|fox Stag|STAG|stag Owl|OWL|owl'), w('whisper|WHIS-per|whisper walker|WAW-ker|walker song|SONG|song step|STEP|step shade|SHAYD|shade root|ROOT|root runner|RUN-er|runner bough|BOW|bough hollow|HOL-oh|hollow')]
		},
		dark: {
			s: w('Zyl|ZIL|shadow Vhar|VAR|night Drel|DREL|dusk Nyth|NITH|gloom Xan|ZAN|silence Mal|MAL|sorrow Orv|ORV|raven Qyl|KWIL|whisper Thex|THEKS|spider Zeth|ZETH|storm Ulth|ULTH|abyss Rax|RAKS|blade Vyl|VIL|venom Nox|NOKS|night-fall Dhar|DAR|stone Kael|KAYL|ash Syl|SIL|web Vor|VOR|void Ixx|IKS|ember Tzal|TZAL|moon-shade Yrr|EER|frost Nur|NOOR|gloam Zhal|ZAL|cinder Mor|MOR|mourning'),
			e: {
				f: w('ira|EER-ah|weaver yss|iss|whisper ia|ee-ah|queen thra|thrah|singer elle|el|blade yth|ith|shade'),
				m: w('ik|ik|hunter ion|ee-on|blade ar|ar|stalker oth|oth|lord ul|ool|keeper ex|eks|duelist'),
				u: w('is|is|wanderer yx|iks|shade en|en|seer az|az|watcher ae|ay|echo')
			},
			h: [w('Night|NITE|night Shadow|SHAD-oh|shadow Ash|ASH|ash Ember|EM-ber|ember Dusk|DUSK|dusk Void|VOYD|void Raven|RAY-ven|raven Gloom|GLOOM|gloom Web|WEB|web Storm|STORM|storm Cinder|SIN-der|cinder'), w('weaver|WEE-ver|weaver blade|BLAYD|blade whisper|WHIS-per|whisper shade|SHAYD|shade stalker|STAW-ker|stalker veil|VAYL|veil hunter|HUN-ter|hunter reach|REECH|reach bane|BAYN|bane')]
		},
		half: {
			h: [w('Ash|ASH|ash Silver|SIL-ver|silver Moon|MOON|moon Hart|HART|hart Wild|WYLD|wild Green|GREEN|green Fair|FAIR|fair Stone|STOHN|stone Brook|BROOK|brook Dawn|DAWN|dawn Clear|KLEER|clear Swift|SWIFT|swift'), w('wood|wood well|well field|field brook|brook ford|ford wick|wick dale|dale ridge|ridge haven|haven bloom|bloom')]
		},
		xmas: {
			f: x('Jingle|bells;Tinsel|something shiny and twinkly;Pepper|peppermint;Holly|a festive green plant;Twinkle|a little sparkle;Snowball|a fluffy snow ball;Cocoa|hot chocolate;Sprinkles|cookie sprinkles;Nutmeg|a holiday spice;Cinnamon|a warm holiday spice;Mistletoe|a kissing-under-it plant;Candy|sweets;Ginger|gingerbread;Frost|winter chill;Glitter|craft sparkle;Cookie|fresh-baked cookies;Sugarplum|a sweet holiday treat;Pudding|a holiday dessert;Ribbon|gift wrap;Bauble|a tree ornament;Wreath|a front-door decoration;Flurry|light snow;Peppermint|a candy-cane flavor;Noel|Christmas'),
			l: x('Sparklesocks|sparkly socks;Candywhistle|a whistle made of candy;Snowfoot|quick feet in the snow;Gumdrop|a chewy sweet;Frostwhistle|a chilly whistle;Toffeetoes|sticky toes;Ribbonwick|a ribbon-tied candle;Mittenpuff|a puffy mitten;Jinglebell|a ringing bell;Giftwrap|a talent for wrapping presents;Starlight|light from the top-of-the-tree star;Cookiecrumb|a happy crumb;Pinecone|a pine tree seed;Sleighbell|a bell on the sleigh;Bellwhistle|bells and whistles;Marzipan|almond candy;Snowdrift|a pile of snow;Fudgebottom|fudgy and cheerful')
		}
	};
})();
