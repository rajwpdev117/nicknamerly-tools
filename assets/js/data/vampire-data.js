/* Nicknamerly — vampire name generator word parts. Invented syllables with their own English meanings (not taken from any book, film or other site). s = gothic name starts and e = endings by gender (f/m/u), each "spelling|pronunciation|meaning"; g = gothic surname halves, nb = noble surname halves, c = coven name halves (all "spelling|meaning"); modern = everyday first names and surnames; titles = noble titles by gender. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' ').map(function (x) { return x.split('|'); }); };
	window.NKNM_DATA.vampire = {
		s: w('Vesp|VESP|evening Dor|DOR|sorrow Isol|EYE-sol|solitude Nox|NOKS|night Sang|SANG|blood Morv|MORV|grave Corv|KORV|raven Vael|VAYL|veil Seren|SER-en|hush Ambr|AM-br|amber Lunar|LOON-ar|moon Drev|DREV|thirst Ashe|ASH|ash Crim|KRIM|crimson Vyr|VEER|vein Ors|ORS|ancient Thal|THAL|pale Mir|MEER|mirror Cass|KAS|silence Elys|EL-iss|twilight Ravn|RAVN|crow Nev|NEV|haunt Sil|SIL|silk'),
		e: {
			f: w('ia|ee-ah|born elle|el|rose ina|EE-nah|lady ette|et|whisper ara|AR-ah|bride yne|een|song isa|EE-sah|eternal'),
			m: w('ian|ee-an|heir ric|rik|ruler ius|ee-us|lord an|an|walker mar|mar|hunter ous|us|keeper ek|ek|blade'),
			u: w('is|iss|shade en|en|wanderer ae|ay|echo on|on|watcher yn|in|dreamer el|el|ward ar|ar|night')
		},
		g: [
			w('Night|night Raven|raven Crimson|crimson Dusk|dusk Grave|grave Thorn|thorn Moon|moon Ash|ash Bloom|bloom Sable|sable Hollow|hollow Black|black'),
			w('wood|wood thorne|thorne crest|crest moor|moor hall|hall veil|veil ward|ward mere|mere shade|shade holt|holt')
		],
		nb: [
			w('Val|valley Mont|mountain Rav|raven Sang|blood Noir|black Lune|moon Ombre|shadow Nuit|night Rose|rose'),
			w('court|court mere|lake ault|keep ville|town fort|fort mont|hill')
		],
		c: [
			w('Crimson|crimson Midnight|midnight Pale|pale Hollow|hollow Silent|silent Velvet|velvet Ashen|ashen Scarlet|scarlet Thorned|thorned Moonlit|moonlit'),
			w('Veil|veil Court|court Covenant|covenant Order|order Chalice|chalice Hour|hour Choir|choir Circle|circle Brood|brood Thorn|thorn')
		],
		titles: { f: ['Countess', 'Baroness', 'Duchess', 'Lady'], m: ['Count', 'Baron', 'Duke', 'Lord'], u: ['Elder', 'Magister', 'Sovereign', 'Regent'] },
		modern: {
			f: 'Mara Livia Rhea Odette Tessa Corinne Nadia Elodie Vera Greta Imogen Juno Miriam Celia Delphine Esme Alma Thea Noor Lena'.split(' '),
			m: 'Gideon Julian Cassius Silas Dorian Marcus Elias Lucien Rafael Leander Anselm Tobias Felix Roman Adrian Ezra Callum Soren Victor Jasper'.split(' '),
			u: 'Rowan Sage Quinn Avery Rue Wren Emery Linden Marlow Reese Harper Ellis Arden Sloane Remy Kit Jules Morgan Blake Sasha'.split(' '),
			l: 'Vale Sinclair Marlowe Ashworth Crane Blackwell Nightingale Thorne Ravenscroft Hale Voss Pierce Whitlock Sterling Lockhart Devereux Corbin Harlow Winters Kingsley Bellamy'.split(' ')
		}
	};
})();
