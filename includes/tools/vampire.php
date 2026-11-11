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
			array( 'Morvia Moonveil', '', 'Morvia (MORV-ee-ah) = "grave-born" · Moonveil = moon + veil' ),
			array( 'Sangan Ravenholt', '', 'Sangan (SANG-an) = "blood-walker" · Ravenholt = raven + holt' ),
			array( 'Ravnis Thornshade', '', 'Ravnis (RAVN-iss) = "crow-shade" · Thornshade = thorn + shade' ),
			array( 'Isolette Blackmere', '', 'Isolette (EYE-sol-et) = "solitude-whisper" · Blackmere = black + mere' ),
			array( 'Thalmar Ravenshade', '', 'Thalmar (THAL-mar) = "pale-hunter" · Ravenshade = raven + shade' ),
			array( 'Noxis Sablewood', '', 'Noxis (NOKS-iss) = "night-shade" · Sablewood = sable + wood' ),
			array( 'Odette Sterling', '', 'Ordinary enough to hide among the living' ),
			array( 'Dorian Corbin', '', 'A modern name that passes for human at a glance' ),
			array( 'Reese Corbin', '', 'Easy to say, easy to forget, and that is the point' ),
			array( 'Elodie Bellamy', '', 'Easy to say, easy to forget, and that is the point' ),
			array( 'Baron Ravnric Valault', '', 'Ravnric (RAVN-rik) = "crow-ruler" · Valault = valley + keep' ),
			array( 'Elder Thalyn Ravmere', '', 'Thalyn (THAL-in) = "pale-dreamer" · Ravmere = raven + lake' ),
			array( 'Countess Drevisa Valault', '', 'Drevisa (DREV-ee-sah) = "thirst-eternal" · Valault = valley + keep' ),
			array( 'Count Sangek Nuitmont', '', 'Sangek (SANG-ek) = "blood-blade" · Nuitmont = night + hill' ),
			array( 'Magister Mirae Montville', '', 'Mirae (MEER-ay) = "mirror-echo" · Montville = mountain + town' ),
			array( 'The Crimson Circle', '', 'Coven name: crimson + circle' ),
			array( 'The Crimson Order', '', 'Coven name: crimson + order' ),
			array( 'The Hollow Veil', '', 'Coven name: hollow + veil' ),
			array( 'The Ashen Circle', '', 'Coven name: ashen + circle' ),
			array( 'Thalek Nighthall', '', 'Thalek (THAL-ek) = "pale-blade" · Nighthall = night + hall' ),
		),
	)
);
