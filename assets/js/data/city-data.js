/* Nicknamerly — city name generator word lists. Family-friendly. a = name starts, b = endings, p/q = adjective + place words, x = prefixes before a name, y = suffixes after a name, o = "X of" openers. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.city = {
		fantasy: {
			a: w('Ael Aer Alth Arv Bel Cael Cor Dra Eld Elv Fae Gal Hael Ith Kael Lor Lun Mael Myr Nael Nym Oth Phae Quel Rhy Sael Sil Syl Tal Thal Thor Val Vael Wyn Yl Zeph Aur Brae Cyr Dael Eryn Fen Gwyn Hav Isil Jor Kyr Ola Pyr Ven'),
			b: w('oria dell wyn thas mere ael ith ora endil ar ion eth iel os ya dun vale mir andor aris eryn holm wen nor haven drel thir lorn reth'),
			p: w('Silver Golden Crystal Emerald Moonlit Starlit Amber Ivory Azure Whispering Hidden Shimmering Sunlit Gilded Verdant Radiant Misty Everbloom Opal'),
			q: w('Haven Spire Vale Harbor Hollow Reach Crossing Glade Citadel Landing Falls Grove Keep Ridge Sanctum Meadow Isle Court'),
			x: w('Port Fort Mount Lake High Old New'),
			o: w('City~of Port~of Free~City~of Citadel~of Haven~of')
		},
		medieval: {
			a: w('Ash Oak Elm Stone Iron Wolf Raven Black White Red Green Grey Hawk Fox Brook Mill Church Castle Hollow Frost Thorn Barley Wheat Salt Amber Gold Silver Crow Stag Boar Swan Heron Hazel Rye'),
			b: w('ford bridge ton wick ham bury field stead shire haven wood dale mouth minster worth ley holm cliff gate port by'),
			p: w('Black Grey White Red Green Old High Low Long Stone Iron Golden Silver Little Great Holy Broken Cold'),
			q: w('Bridge Ford Hollow Mill Market Keep Cross Gate Hill Haven Fields Cliffs Abbey Harbor Green Marsh Hall'),
			x: w('Port Castle Mount Old New Fort'),
			o: w('Town~of Port~of Castle~of Abbey~of')
		},
		scifi: {
			a: w('Neo Nova Xan Zor Vex Kry Lyr Cyg Andro Helio Astra Tera Quan Syn Axi Kep Pro Zeta Vega Nyx Sol Aur Cass Eri Hyp Omni Pax Ceres Titan Ori Gal Ion Phos'),
			b: w('polis dar ara ion ex us ia on ix os ium tara core gate dor mir tek ven nia'),
			y: w('Prime Station Colony Outpost Hub Spire Orbital Base Haven Gate Terminal Array'),
			x: w('New Port Fort Mount Neo'),
			o: w('Colony~of Outpost~of Spire~of Station~of')
		},
		modern: {
			a: w('Maple Oak Pine Cedar River Lake Spring Fair Green Silver Clear Rock Stone Eagle Bell Sun Willow Elm Brook Crystal Harbor Glen Meadow Pleasant Liberty Union Cherry Sandy Bay Cotton Prairie Summit Copper Granite'),
			b: w('ville ton burg field ridge dale wood port haven grove ford view hills'),
			p: w('Maple Oak Pine Cedar River Lake Silver Clear Eagle Willow Cherry Crystal Pleasant Liberty Sandy Cotton Prairie Summit Copper Granite Sunset Autumn Golden Harbor'),
			q: w('Springs Falls Heights Creek Valley Park Grove Bend Ridge Hills Junction Crossing Beach Point Meadows Landing Gardens Shores Plains'),
			x: w('Mount Lake Port New Fort North South East West'),
			o: w('City~of Town~of')
		},
		dark: {
			a: w('Mor Vael Gloom Grim Ash Nox Doom Wrath Mourn Bone Cinder Dusk Raven Thorn Sable Ebon Umbra Sorrow Ghast Mal Zul Vor Crypt Hex Dread Blight Ruin Weep Hollow Night Shadow'),
			b: w('moor hollow ruin grave spire reach hold fall wick mire thorn shade crest vale haunt rest watch gate mourn'),
			p: w('Black Hollow Silent Weeping Forsaken Cursed Pale Bleak Haunted Ashen Gloomy Dreadful Withered Shattered Sunken Veiled Bitter'),
			q: w('Spire Hollow Crypt Reach Moor Crossing Keep Graves Bastion Citadel Mire Watch Gate Ruins Depths Throne'),
			x: w('Old Fort Mount Port'),
			o: w('City~of Gates~of Citadel~of Ruins~of')
		}
	};
})();
