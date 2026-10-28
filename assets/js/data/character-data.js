/* Nicknamerly — character name generator word lists. */
window.NKNM_DATA = window.NKNM_DATA || {};
window.NKNM_DATA.character = {
	modern: {
		f: 'Emily Olivia Ava Sophia Isabella Mia Charlotte Amelia Harper Evelyn Abigail Ella Scarlett Grace Chloe Victoria Riley Aria Lily Zoe Nora Hannah Layla Penelope Madison Natalie Stella Hazel Violet Audrey Claire Lucy Paige Brooklyn Savannah Maya Leah Naomi Sadie Ruby Piper Quinn Delilah Josephine Eliza Autumn Bailey Jade Mackenzie Tessa Gwen Camila Nadia Elena Reese Willow Jordan Taylor'.split(' '),
		m: 'Liam Noah Oliver Elijah James William Henry Lucas Benjamin Theodore Jack Levi Alexander Mason Ethan Daniel Jacob Logan Jackson Sebastian Mateo Owen Samuel Asher Carter Wyatt Julian Grayson Leo Hudson Eli Dylan Isaac Nathan Caleb Ryan Adrian Miles Declan Colton Brady Jesse Marcus Tyler Connor Cole Dean Wesley Jonah Silas Rhys Gavin Micah Trevor Elliot Hunter Mitchell Tobias Evan Landon Dominic Jordan Taylor'.split(' '),
		s: 'Carter Bennett Hayes Reed Brooks Foster Morgan Parker Mitchell Sullivan Cooper Hughes Murphy Gallagher Fitzgerald Whitaker Donovan Callahan Ellison Prescott Sinclair Maddox Holloway Lawson Thornton Abbott Barrett Dawson Emerson Fletcher Garrison Hartley Ingram Jennings Keller Lancaster Monroe Nolan Osborne Pierce Quinn Ramsey Sutton Tucker Vaughn Whitman Yates Ashby Beaumont Calloway Dalton Everett Fisher Gibson Harlan Irving Jameson Kendrick Larkin Mercer Nash Oakley Preston Ridley Sawyer Tanner Underwood Vance Wilder Winters Archer Blake Chandler Delaney Ford Grant Hale Jarvis Knox Lowell Marsh Nixon Porter Rowe Shaw Thatcher Walsh Young'.split(' ')
	},
	medieval: {
		f: 'Eleanor Matilda Isolde Rosamund Alys Beatrice Cecily Edith Gwendolyn Isabeau Joan Margery Maud Philippa Sibyl Agnes Avelina Blanche Constance Emmeline Godiva Heloise Juliana Katherine Lettice Mabel Odelia Petronilla Rohese Thomasina Ursula Winifred'.split(' '),
		m: 'Edmund Aldric Godfrey Hugh Osric Wilfred Alaric Baldwin Cedric Dunstan Edgar Geoffrey Hamond Ivo Jocelyn Leofric Magnus Nigel Odo Piers Ranulf Roland Simon Thurstan Walter Alfred Ambrose Bartholomew Crispin Everard Gervase Hubert Lambert Oswin Rowan Tristan'.split(' '),
		s: 'Fletcher Thatcher Ashford Wainwright Blackwood Harcourt Cooper Fuller Tanner Mason Draper Carter Chandler Baxter Skinner Sawyer Archer Forester Hollis Kingsley Langley Marlow Norwood Radcliffe Stafford Thorne Whitlock Woodville Ravenhill Greystone Hawksworth Oakenshaw Penhallow Stanhope'.split(' ')
	},
	fantasy: {
		fs: ['Ael','Syl','Lir','Isel','Thal','Nym','Eir','Mir','Vael','Cael','Ysol','Elow','Aly','Lun','Fae','Ori','Sera','Ilyr','Narr','Tava','Eshe','Rina','Anwe','Zeph','Orla','Lyth','Bryn','Dae','Fenn','Gwyn','Hesh','Jyn','Kes','Nel','Pae','Qui','Rae','Sha','Tir','Una','Wyl','Xia','Yve','Zel'],
		fe: ['wen','ara','iel','ithe','ynn','ia','ana','wyn','elle','essa','ira','alia','una','eth','ora','ise'],
		ms: ['Thar','Bor','Kael','Dar','Eld','Gor','Hal','Torr','Fen','Rhy','Aer','Brom','Cor','Dur','Ev','Grim','Jor','Korr','Luc','Mal','Orin','Rath','Tyr','Vor','Zan','Alar','Bael','Caed','Dag','Emr','Fael','Gael','Hark','Ith','Jar','Kyr','Lor','Mor','Nar','Quin','Ruk','Sev','Ulm','Wex','Xar','Yor','Zar'],
		me: ['ion','ric','mir','dor','an','us','ek','orn','wald','ak','en','ith','ad','os','ar','eth','ulf','in'],
		sa: ['Storm','Iron','Star','Moon','Shadow','Silver','Ember','Frost','Oak','Raven','Thorn','Wolf','Dawn','Night','Gold','Stone','Fire','Swift','Bright','Dark','Wild','High'],
		sb: ['song','hollow','vale','blade','fall','brook','crest','wood','born','ward','heart','wind','forge','bane','shield','mere','light','walker','bloom','hand','reach','rider']
	},
	scifi: {
		f: 'Zara Nyx Vega Lyra Kira Juno Ione Sasha Tessa Eris Mara Quinn Anya Rhea Nova Cleo Sable Talia Vesna Yara Imara Reyna Selene Aria Calla Dessa Ember Freya Hana Idris Lex Mina Neve Orla Petra Riva Soleil Thea Wren'.split(' '),
		m: 'Kael Jax Orion Dax Rex Zane Caden Tarek Ryker Axel Soren Cade Hale Ezra Vance Kai Atlas Bram Cyrus Dorian Eamon Finn Gideon Holt Ivar Joss Kellan Lukas Maddox Nico Otto Pike Quill Roan Silas Thorne Ulric Zeke'.split(' '),
		s: 'Voss Calder Reyes Okoye Vance Stark Mercer Kovac Hale Sorensen Nakamura Drake Zephyr Cross Rook Locke Ward Valen Ito Khan Moreau Novak Ortega Petrov Quill Ramos Sato Tanaka Varga Wexler Yamato Zhao Adeyemi Bishop Castellan Draven Eriksen Frost Grey Holt Ibarra Jansen Kessler'.split(' '),
		t: ['Captain','Commander','Dr.','Agent','Lieutenant','Pilot','Marshal']
	},
	villain: {
		f: 'Morwenna Lilith Selene Vesper Morgana Cassandra Ravenna Nyssa Isolde Ophelia Seraphine Ligeia Medea Carmilla Circe Elspeth Hecate Malvina Nerissa Rowena Sorcha Thessaly Ursa Vivienne Zelda Agatha Bellatrix Cordelia Delphine Esme Griselda Hespera Imelda Jezebel Lucretia Magdalena'.split(' '),
		m: 'Malachar Mordecai Lucian Damien Vex Kaelen Lucius Cassius Draven Sebastian Valdric Silas Thane Ozric Azrael Balthazar Cornelius Dmitri Erebus Fenrir Gareth Hadrian Ignatius Jareth Konrad Lazarus Maximus Nikolai Octavian Phineas Quentin Raphael Silvanus Tiberius Ulrich Vladimir Xander Zorin'.split(' '),
		s: 'Blackthorn Grimm Nightshade Ravenscar Duskwood Vane Crowley Ashgrave Hollowell Mortimer Darkmoor Voidwalker Blackwood Graves Ironhart Mournsworth Nox Ravenwood Thorne Underhill Vexley Wraithmoor Ashenvale Bloodworth Cinderfell Dreadmore Gloomwood Hollowmere Morrigan Nightingale Ravencroft Shadowmere Venomthorn'.split(' '),
		t: ['Lord','Lady','Count','Baron','Dr.','Duchess','Baroness','Master']
	},
	hero: {
		f: 'Aurelia Seraphina Elara Astrid Freya Valeria Rowan Ivy Brielle Cordelia Adelaide Briar Caelia Dahlia Eowyn Fiona Gwen Helena Iris Juniper Kestrel Linnea Marigold Nerys Odette Phoebe Rhiannon Sage Talia Vera Wren'.split(' '),
		m: 'Aldric Roland Gideon Caspian Theo Leo Atlas Orion Alden Beau Cassian Darius Elias Felix Gabriel Hector Ian Jasper Kieran Lionel Marcus Nolan Owen Percival Quentin Rhett Stefan Tristan Uriel Valor Weston Xavier'.split(' '),
		s: ['Brightshield','Lionheart','Dawnbringer','Stormrider','Valorwind','Truehart','Goldmane','Swiftblade','Harlow','Hawthorne','Sterling','Ashworth','Brightwater','Kingsley','Fairchild','Goodwin','Highcastle','Silverlake','Stoneheart','Windrider','Starling','Redfern','Oakheart','Falconer','Merriweather','Wolfsbane','Dunmore','Eastwood','Brightwood','Courtenay'],
		t: ['Sir','Dame','Captain','Commander']
	}
};
