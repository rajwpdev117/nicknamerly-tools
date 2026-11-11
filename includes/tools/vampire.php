<?php
/**
 * Vampire name generator: [vampire_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'vampire',
	array(
		'shortcode'        => 'vampire_name_generator',
		'label'            => __( 'Generate Vampire Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'rich'             => true,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. S', 'nicknamerly-tools' ),
		'style_label'      => __( 'Type of vampire name', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Any vampire', 'nicknamerly-tools' ),
			'gothic' => __( 'Gothic', 'nicknamerly-tools' ),
			'modern' => __( 'Modern', 'nicknamerly-tools' ),
			'noble' => __( 'Noble title', 'nicknamerly-tools' ),
			'coven' => __( 'Coven names', 'nicknamerly-tools' ),
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
			array( 'Vaelina Sablethorne', '', 'Vaelina (VAYL-ee-nah) = "veil-lady" · Sablethorne = sable + thorne' ),
			array( 'Asheian Thornhall', '', 'Asheian (ASH-ee-an) = "ash-heir" · Thornhall = thorn + hall' ),
			array( 'Miris Sablemere', '', 'Miris (MEER-iss) = "mirror-shade" · Sablemere = sable + mere' ),
			array( 'Vespette Nighthall', '', 'Vespette (VESP-et) = "evening-whisper" · Nighthall = night + hall' ),
			array( 'Vyran Graveward', '', 'Vyran (VEER-an) = "vein-walker" · Graveward = grave + ward' ),
			array( 'Serenon Sablemere', '', 'Serenon (SER-en-on) = "hush-watcher" · Sablemere = sable + mere' ),
			array( 'Odette Crane', '', 'Ordinary enough to hide among the living' ),
			array( 'Soren Whitlock', '', 'A modern name that passes for human at a glance' ),
			array( 'Emery Nightingale', '', 'Ordinary enough to hide among the living' ),
			array( 'Lena Nightingale', '', 'A quiet name for a vampire who blends in' ),
			array( 'Baron Ravnous Rosemere', '', 'Ravnous (RAVN-us) = "crow-keeper" · Rosemere = rose + lake' ),
			array( 'Regent Ambron Montmont', '', 'Ambron (AM-br-on) = "amber-watcher" · Montmont = mountain + hill' ),
			array( 'Baroness Isolelle Valmont', '', 'Isolelle (EYE-sol-el) = "solitude-rose" · Valmont = valley + hill' ),
			array( 'Duke Ambran Lunecourt', '', 'Ambran (AM-br-an) = "amber-walker" · Lunecourt = moon + court' ),
			array( 'Regent Drevis Ravault', '', 'Drevis (DREV-iss) = "thirst-shade" · Ravault = raven + keep' ),
			array( 'The Pale Circle', '', 'Coven name: pale + circle' ),
			array( 'The Thorned Veil', '', 'Coven name: thorned + veil' ),
			array( 'The Crimson Court', '', 'Coven name: crimson + court' ),
			array( 'The Hollow Choir', '', 'Coven name: hollow + choir' ),
			array( 'Silian Bloomhall', '', 'Silian (SIL-ee-an) = "silk-heir" · Bloomhall = bloom + hall' ),
		),
	)
);
