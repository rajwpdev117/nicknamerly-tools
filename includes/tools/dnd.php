<?php
/**
 * D&D name generator: [dnd_name_generator]
 * Reuses the elf, drow, dwarf, dragonborn and tiefling engines and adds human,
 * halfling, gnome and half-orc names plus an optional class backstory hook.
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'dnd',
	array(
		'shortcode'        => 'dnd_name_generator',
		'label'            => __( 'Generate D&D Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'rich'             => true,
		'uses'             => array( 'elf', 'drow', 'dwarf', 'dragonborn', 'tiefling' ),
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. A', 'nicknamerly-tools' ),
		'style_label'      => __( 'Race', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'     => __( 'Any race', 'nicknamerly-tools' ),
			'human'      => __( 'Human', 'nicknamerly-tools' ),
			'elf'        => __( 'Elf', 'nicknamerly-tools' ),
			'halfelf'    => __( 'Half-elf', 'nicknamerly-tools' ),
			'drow'       => __( 'Drow', 'nicknamerly-tools' ),
			'dwarf'      => __( 'Dwarf', 'nicknamerly-tools' ),
			'halfling'   => __( 'Halfling', 'nicknamerly-tools' ),
			'gnome'      => __( 'Gnome', 'nicknamerly-tools' ),
			'halforc'    => __( 'Half-orc', 'nicknamerly-tools' ),
			'dragonborn' => __( 'Dragonborn', 'nicknamerly-tools' ),
			'tiefling'   => __( 'Tiefling', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name format', 'nicknamerly-tools' ),
		'genders'          => array(
			'any'   => __( 'Full name, any gender', 'nicknamerly-tools' ),
			'f'     => __( 'Female full name', 'nicknamerly-tools' ),
			'm'     => __( 'Male full name', 'nicknamerly-tools' ),
			'u'     => __( 'Neutral full name', 'nicknamerly-tools' ),
			'first' => __( 'First name only', 'nicknamerly-tools' ),
		),
		'extra_label'      => __( 'Class (adds a backstory hook)', 'nicknamerly-tools' ),
		'extra'            => array(
			''          => __( 'Any class', 'nicknamerly-tools' ),
			'fighter'   => __( 'Fighter', 'nicknamerly-tools' ),
			'wizard'    => __( 'Wizard', 'nicknamerly-tools' ),
			'rogue'     => __( 'Rogue', 'nicknamerly-tools' ),
			'cleric'    => __( 'Cleric', 'nicknamerly-tools' ),
			'bard'      => __( 'Bard', 'nicknamerly-tools' ),
			'ranger'    => __( 'Ranger', 'nicknamerly-tools' ),
			'barbarian' => __( 'Barbarian', 'nicknamerly-tools' ),
			'paladin'   => __( 'Paladin', 'nicknamerly-tools' ),
			'none'      => __( 'No hook, name only', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			array( 'Merise Millbrook', '', 'Human · Merise (MER-eez) = "bright-wise" · Millbrook = mill + brook · Cleric hook: Keeps a list of everyone they could not save.' ),
			array( 'Elmas Brooksong', '', 'Elf · Elmas (ELM-ahs) = "elm-tracker" · Brooksong = brook + song · Rogue hook: Only steals from people who deserve it.' ),
			array( 'Thrumik Sootmine', '', 'Dwarf · Thrumik (THRUM-ik) = "thunder-maker" · Sootmine = soot + mine · Rogue hook: Owes money to someone very patient.' ),
			array( 'Polella Thistlefoot', '', 'Halfling · Polella (POL-el-ah) = "poppy-dear" · Thistlefoot = thistle + foot · Cleric hook: Keeps a list of everyone they could not save.' ),
			array( 'Rynak Hollowbane', '', 'Tiefling · Rynak (RIN-ak) = "ruin-blade" · Hollowbane = hollow + bane · Bard hook: Is writing an epic, and you are in it.' ),
			array( 'Sarnaq Blazeblade', '', 'Dragonborn · Sarnaq (SARN-ak) = "silver-echo" · Blazeblade = blaze + blade · Ranger hook: Tracks the beast that destroyed their village.' ),
			array( 'Wrenwick Gearbutton', '', 'Gnome · Wrenwick (REN-wik) = "wren-light" · Gearbutton = gear + button · Ranger hook: Guards a forest that no map shows.' ),
			array( 'Grugar Stonejaw', '', 'Half-orc · Grugar (GROO-gar) = "growl-spear" · Stonejaw = stone + jaw · Rogue hook: Left a thieves guild with a ledger they want back.' ),
			array( 'Vylon Lanternwright', '', 'Drow · Vylon (VIL-on) = "spite-warden" · Lanternwright = builds lanterns · Wizard hook: Was expelled from an academy for reading one forbidden page.' ),
			array( 'Faelwyn Fairford', '', 'Half-elf · Faelwyn (FAYL-win) = "joy-friend" · Fairford = fair + ford · Fighter hook: Trains at dawn, no matter what.' ),
			array( 'Wilard Hawkwell', '', 'Human · Wilard (WIL-ard) = "will-brave" · Hawkwell = hawk + spring · Cleric hook: Doubts their faith after a prayer went unanswered.' ),
			array( 'Venith Lightcrown', '', 'Elf · Venith (VEN-ith) = "path-seeker" · Lightcrown = light + crown · Barbarian hook: Laughs loudest right before a fight.' ),
			array( 'Bragith Shadechain', '', 'Dwarf · Bragith (BRAG-ith) = "oath-mother" · Shadechain = shade + chain · Bard hook: Collects legends no one else believes.' ),
			array( 'Fenpo Applebarrel', '', 'Halfling · Fenpo (FEN-poh) = "fen-small" · Applebarrel = apple + barrel · Cleric hook: Heard their god speak once and has been listening ever since.' ),
			array( 'Candor Bonemark', '', 'Tiefling · Candor = honest speech · Bonemark = bone + mark · Rogue hook: Owes money to someone very patient.' ),
			array( 'Rhazena Scorchscale', '', 'Dragonborn · Rhazena (RAZ-en-ah) = "scale-flame" · Scorchscale = scorch + scale · Paladin hook: Swore an oath at a dying friend’s side.' ),
			array( 'Nimdle Whistlespinner', '', 'Gnome · Nimdle (NIM-dul) = "clever-tinkerer" · Whistlespinner = whistle + spinner · Barbarian hook: Laughs loudest right before a fight.' ),
			array( 'Bashul Wolfhide', '', 'Half-orc · Bashul (BASH-ul) = "fist-wolf" · Wolfhide = wolf + hide · Ranger hook: Knows every trail between the river and the peaks.' ),
			array( 'Aerynn Sunblind', '', 'Drow · Aerynn (AIR-in) = "echo-whisper" · Sunblind = cannot bear daylight · Paladin hook: Keeps their oath written on a worn ribbon.' ),
			array( 'Edan Hartford', '', 'Human · Edan (ED-an) = "wealth-son" · Hartford = deer + river crossing · Ranger hook: Knows every trail between the river and the peaks.' ),
		),
	)
);
