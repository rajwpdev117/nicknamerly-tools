/* Nicknamerly — pen name generator word lists. */
window.NKNM_DATA = window.NKNM_DATA || {};
(function () {
	var w = function (s) { return s.split(' '); };
	window.NKNM_DATA.pen = {
		romance: {
			f: w('Isabella Eleanor Charlotte Violet Juliet Rosalind Evangeline Penelope Adelaide Genevieve Scarlett Gwendolyn Daphne Seraphina Cordelia Arabella Lucinda Josephine Colette Vivienne Annabelle Rosalie Camille'),
			m: w('Sebastian Alexander Nathaniel Julian Gabriel Beckett Maxwell Jameson Tristan Dominic Everett Rhett Hunter Grayson Lucas Callum Anthony Damian Elliot'),
			s: w('Ashford Sinclair Whitmore Montgomery Fairchild Hawthorne Beaumont Lockwood Winslow Kensington Sterling Thorne Harcourt Devereaux Rosewood Carrington Ellington Langley Kingsley Prescott')
		},
		mystery: {
			f: w('Margaret Agatha Dorothy Vivian Louise Helen Rachel Nora Diane Gail Harriet Evelyn Lydia Maud Ruth Claire Joan Marian Sylvia'),
			m: w('Raymond Walter Dashiell Graham Hugh Victor Lawrence Warren Roland Franklin Desmond Clive Russell Elliot Dennis Vincent Martin Dean'),
			s: w('Blackwood Crane Hale Marlowe Slade Stone Ward Rook Gray Vance Calloway Kincaid Pruitt Ashby Holloway Quill Thorn Drake Frost Mercer')
		},
		fantasy: {
			f: w('Elara Lyra Aria Sylvia Thalia Ysolde Brianna Rowan Isolde Morgana Freya Astrid Elowen Ainsley Maeve Seren Briar Linnea Neve'),
			m: w('Alaric Tobias Garrick Finn Rowan Aldric Cormac Eamon Torin Kellan Soren Bram Cael Darius Lorcan Brannon Tavish'),
			s: w('Stormwood Ashgrove Vale Thornwood Wren Fairweather Ravenscroft Hollis Marsh Whitlock Oakheart Winterbourne Greywood Ironside Hawke Brightwater Moorland Northcott')
		},
		scifi: {
			f: w('Nova Zara Iris Maya Kira Sable Lena Juno Vega Cassia Talia Orla Mira Dara Lyra Selene Echo'),
			m: w('Orion Axel Kai Jax Rex Zane Silas Atlas Cole Ezra Leo Dax Vance Neo Ryker Cade Soren'),
			s: w('Reyes Calder Voss Mercer Okoye Novak Sato Chen Archer Kade Holt Vega Quill Rhodes Ward Stark Hollis Mercado')
		},
		literary: {
			f: w('Eleanor Virginia Harper Edith Ingrid Miriam Clara Frances Iris Judith Ada Beatrice Louisa Esther Naomi Marianne Eliza Vera'),
			m: w('Theodore Henry Edmund Walter August Arthur Oscar Julian Elias Samuel Felix Anton Leonard Hugo Everett Nathaniel Simon'),
			s: w('Whitman Fitzgerald Hartley Lowell Sinclair Bishop Merrill Kingsley Thackeray Ellison Pemberton Larkin Stanton Calloway Bellamy Ashworth Livingston Rowe')
		},
		kids: {
			f: w('Penny Molly Daisy Lottie Hattie Poppy Maisie Elsie Tilly Millie Josie Polly Winnie Bella Ruby Cookie Dotty'),
			m: w('Barnaby Alfie Benji Teddy Percy Wilbur Archie Oliver Freddie Rupert Ollie Charlie Max Rufus Bertie Digby Tommy'),
			s: w('Honeywell Applegate Featherstone Thistlewood Puddifoot Merriweather Peppercorn Wigglesworth Bumble Hopkins Buttercup Brightly Tumbleweed Pennywhistle Nutmeg Cobblestone Fiddlesticks Bramble')
		}
	};
})();
