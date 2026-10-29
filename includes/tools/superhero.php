<?php
/**
 * Superhero name generator: [superhero_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'superhero',
	array(
		'shortcode'        => 'superhero_name_generator',
		'label'            => __( 'Generate Superhero Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Include a word (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. Storm', 'nicknamerly-tools' ),
		'style_label'      => __( 'Power type', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'    => __( 'Any power', 'nicknamerly-tools' ),
			'cosmic'    => __( 'Cosmic', 'nicknamerly-tools' ),
			'tech'      => __( 'Tech', 'nicknamerly-tools' ),
			'elemental' => __( 'Elemental', 'nicknamerly-tools' ),
			'shadow'    => __( 'Shadow', 'nicknamerly-tools' ),
			'mystic'    => __( 'Mystic', 'nicknamerly-tools' ),
			'speed'     => __( 'Speed & strength', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Style', 'nicknamerly-tools' ),
		'genders'          => array(
			'any'    => __( 'Any', 'nicknamerly-tools' ),
			'female' => __( 'Female', 'nicknamerly-tools' ),
			'male'   => __( 'Male', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Captain Comet',
			'Crimson Falcon',
			'Doctor Void',
			'The Silent Storm',
			'Nova Knight',
			'Agent Zero',
			'Iron Huntress',
			'Shadow Warden',
			'Blaze Guardian',
			'Lady Eclipse',
			'Cyber Striker',
			'The Midnight Ranger',
			'Thunderstrike',
			'Star Queen',
			'Frostbite',
			'Mystic Raven',
			'Quantum Man',
			'Phantom Blade',
			'Solar Sentinel',
			'Turbo Titan',
		),
	)
);
