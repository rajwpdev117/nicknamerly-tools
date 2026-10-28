<?php
/**
 * Character name generator: [character_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'character',
	array(
		'shortcode'        => 'character_name_generator',
		'label'            => __( 'Generate Character Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. K', 'nicknamerly-tools' ),
		'style_label'      => __( 'Genre', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'   => __( 'Any genre', 'nicknamerly-tools' ),
			'fantasy'  => __( 'Fantasy', 'nicknamerly-tools' ),
			'modern'   => __( 'Modern', 'nicknamerly-tools' ),
			'scifi'    => __( 'Sci-fi', 'nicknamerly-tools' ),
			'medieval' => __( 'Medieval', 'nicknamerly-tools' ),
			'villain'  => __( 'Villain', 'nicknamerly-tools' ),
			'hero'     => __( 'Hero', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Gender', 'nicknamerly-tools' ),
		'genders'          => array(
			'any'    => __( 'Any', 'nicknamerly-tools' ),
			'female' => __( 'Female', 'nicknamerly-tools' ),
			'male'   => __( 'Male', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Aelwen Stormhollow',
			'Emily Carter',
			'Captain Zane Voss',
			'Edmund Thorne',
			'Lady Morwenna Blackthorn',
			'Cassian Brightshield',
			'Thariel Silverfall',
			'Marcus Delaney',
			'Nyx Calder',
			'Matilda Ravenhill',
			'Count Malachar Grimm',
			'Seraphina Goldmane',
			'Korrith Ironvale',
			'Harper Sullivan',
			'Juno Okoye',
			'Godfrey Ashford',
			'Vesper Nightshade',
			'Gideon Truehart',
			'Lunara Mooncrest',
			'Jax Mercer',
		),
	)
);
