<?php
/**
 * Dragonborn name generator: [dragonborn_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'dragonborn',
	array(
		'shortcode'        => 'dragonborn_name_generator',
		'label'            => __( 'Generate Dragonborn Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'rich'             => true,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. K', 'nicknamerly-tools' ),
		'style_label'      => __( 'Dragon heritage', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Any dragonborn', 'nicknamerly-tools' ),
			'fire' => __( 'Fire', 'nicknamerly-tools' ),
			'frost' => __( 'Frost', 'nicknamerly-tools' ),
			'storm' => __( 'Storm', 'nicknamerly-tools' ),
			'venom' => __( 'Venom', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name format', 'nicknamerly-tools' ),
		'genders'          => array(
			'any' => __( 'Full name, any gender', 'nicknamerly-tools' ),
			'f' => __( 'Female full name', 'nicknamerly-tools' ),
			'm' => __( 'Male full name', 'nicknamerly-tools' ),
			'u' => __( 'Neutral full name', 'nicknamerly-tools' ),
			'first' => __( 'First name only', 'nicknamerly-tools' ),
			'nick' => __( 'Full name + childhood nickname', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			array( 'Braxeth Ashborn', '', 'Braxeth (BRAKS-eth) = "claw-breath" · Ashborn = ash + born' ),
			array( 'Nymak Flamewing', '', 'Nymak (NIM-ak) = "shadow-claw" · Flamewing = flame + wing' ),
			array( 'Skoran Cinderfang', '', 'Skoran (SKOR-an) = "fang-breath" · Cinderfang = cinder + fang' ),
			array( 'Belani Ashfang', '', 'Belani (BEL-ah-nee) = "bronze-guardian" · Ashfang = ash + fang' ),
			array( 'Rhekis "Tinker" Snowcrest', '', 'Rhekis (REK-iss) = "frost-spark" · called "Tinker" as a hatchling = always taking things apart · Snowcrest = snow + crest' ),
			array( 'Cinar Frostclaw', '', 'Cinar (SIN-ar) = "copper-wing" · Frostclaw = frost + claw' ),
			array( 'Ghalani Wintercrest', '', 'Ghalani (GAL-ah-nee) = "acid-guardian" · Wintercrest = winter + crest' ),
			array( 'Phyrdax Rimecall', '', 'Phyrdax (FEER-daks) = "pyre-champion" · Rimecall = rime + call' ),
			array( 'Phyris Galecrest', '', 'Phyris (FEER-iss) = "pyre-spark" · Galecrest = gale + crest' ),
			array( 'Cinaq "Biscuit" Thunderbreath', '', 'Cinaq (SIN-ak) = "copper-echo" · called "Biscuit" as a hatchling = sweet and crumbly · Thunderbreath = thunder + breath' ),
			array( 'Kyrak Thundercrest', '', 'Kyrak (KEER-ak) = "ice-claw" · Thundercrest = thunder + crest' ),
			array( 'Aurex Stormfall', '', 'Aurex (OR-eks) = "gold-seeker" · Stormfall = storm + fall' ),
			array( 'Zhorena Venomfang', '', 'Zhorena (ZOR-en-ah) = "honor-flame" · Venomfang = venom + fang' ),
			array( 'Phyrash Thornfang', '', 'Phyrash (FEER-ash) = "pyre-slayer" · Thornfang = thorn + fang' ),
			array( 'Drakul "Sparky" Thornfang', '', 'Drakul (DRAK-ool) = "dragon-scale" · called "Sparky" as a hatchling = a quick temper · Thornfang = thorn + fang' ),
			array( 'Rheketh Acidscale', '', 'Rheketh (REK-eth) = "frost-breath" · Acidscale = acid + scale' ),
			array( 'Zephgar Cinderbreath', '', 'Zephgar (ZEF-gar) = "gale-flier" · Cinderbreath = cinder + breath' ),
			array( 'Sarnul Frostwing', '', 'Sarnul (SARN-ool) = "silver-scale" · Frostwing = frost + wing' ),
			array( 'Quoria Tempestcall', '', 'Quoria (KWOR-ee-ah) = "dawn-born" · Tempestcall = tempest + call' ),
			array( 'Cinak "Mumble" Toxincall', '', 'Cinak (SIN-ak) = "copper-claw" · called "Mumble" as a hatchling = talks to the floor · Toxincall = toxin + call' ),
		),
	)
);
