<?php
/**
 * Dwarf name generator: [dwarf_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'dwarf',
	array(
		'shortcode'        => 'dwarf_name_generator',
		'label'            => __( 'Generate Dwarf Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'rich'             => true,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. B', 'nicknamerly-tools' ),
		'style_label'      => __( 'Type of dwarf', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Any dwarf', 'nicknamerly-tools' ),
			'mountain' => __( 'Mountain dwarf', 'nicknamerly-tools' ),
			'hill' => __( 'Hill dwarf', 'nicknamerly-tools' ),
			'duergar' => __( 'Duergar (gray dwarf)', 'nicknamerly-tools' ),
			'clan' => __( 'Clan names', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name format', 'nicknamerly-tools' ),
		'genders'          => array(
			'any' => __( 'Full name, any gender', 'nicknamerly-tools' ),
			'f' => __( 'Female full name', 'nicknamerly-tools' ),
			'm' => __( 'Male full name', 'nicknamerly-tools' ),
			'u' => __( 'Neutral full name', 'nicknamerly-tools' ),
			'first' => __( 'First name only', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			array( 'Bromga Runeshield', '', 'Bromga (BROM-gah) = "ale-singer" · Runeshield = rune + shield' ),
			array( 'Vorndor Thunderhold', '', 'Vorndor (VORN-dor) = "iron-lord" · Thunderhold = thunder + hold' ),
			array( 'Dvaren Runevault', '', 'Dvaren (DVAR-en) = "deep-warden" · Runevault = rune + vault' ),
			array( 'Dakda Graniteforge', '', 'Dakda (DAK-dah) = "ember-hearth" · Graniteforge = granite + forge' ),
			array( 'Heggrik Peakhold', '', 'Heggrik (HEG-rik) = "vein-ruler" · Peakhold = peak + hold' ),
			array( 'Hrodul Deepvault', '', 'Hrodul (HROD-ool) = "glory-miner" · Deepvault = deep + vault' ),
			array( 'Gorda Amberbrew', '', 'Gorda (GOR-dah) = "cave-hearth" · Amberbrew = amber + brew' ),
			array( 'Vornak Oakmill', '', 'Vornak (VORN-ak) = "iron-hammer" · Oakmill = oak + mill' ),
			array( 'Brundan Meadbrew', '', 'Brundan (BRUND-an) = "forge-bearer" · Meadbrew = mead + brew' ),
			array( 'Rokith Oakmill', '', 'Rokith (ROK-ith) = "rock-mother" · Oakmill = oak + mill' ),
			array( 'Dvarak Honeybelly', '', 'Dvarak (DVAR-ak) = "deep-hammer" · Honeybelly = honey + belly' ),
			array( 'Vornon Ruinchain', '', 'Vornon (VORN-on) = "iron-keeper" · Ruinchain = ruin + chain' ),
			array( 'Rundga Slatefang', '', 'Rundga (RUND-gah) = "rune-singer" · Slatefang = slate + fang' ),
			array( 'Skarngar Gloomvein', '', 'Skarngar (SKARN-gar) = "slag-spear" · Gloomvein = gloom + vein' ),
			array( 'Thrumim Grayhollow', '', 'Thrumim (THRUM-im) = "thunder-smith" · Grayhollow = gray + hollow' ),
			array( 'Heggdis Coldchain', '', 'Heggdis (HEG-dis) = "vein-lady" · Coldchain = cold + chain' ),
			array( 'Clan Sootfang', '', 'Sootfang = soot + fang' ),
			array( 'Clan Craghammer', '', 'Craghammer = crag + hammer' ),
			array( 'Clan Ashmine', '', 'Ashmine = ash + mine' ),
			array( 'Skarngar Peakhold', '', 'Skarngar (SKARN-gar) = "slag-spear" · Peakhold = peak + hold' ),
		),
	)
);
