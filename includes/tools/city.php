<?php
/**
 * City name generator: [city_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'city',
	array(
		'shortcode'        => 'city_name_generator',
		'label'            => __( 'Generate City Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. S', 'nicknamerly-tools' ),
		'style_label'      => __( 'Setting', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'   => __( 'Any setting', 'nicknamerly-tools' ),
			'fantasy'  => __( 'Fantasy', 'nicknamerly-tools' ),
			'medieval' => __( 'Medieval', 'nicknamerly-tools' ),
			'scifi'    => __( 'Sci-fi', 'nicknamerly-tools' ),
			'modern'   => __( 'Modern US-style', 'nicknamerly-tools' ),
			'dark'     => __( 'Dark fantasy', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name shape', 'nicknamerly-tools' ),
		'genders'          => array(
			'mix' => __( 'Any', 'nicknamerly-tools' ),
			'one' => __( 'One word', 'nicknamerly-tools' ),
			'two' => __( 'Two words', 'nicknamerly-tools' ),
			'of'  => __( '"City of" style', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Eldoria',
			'Ashford',
			'Silver Haven',
			'Nova Station',
			'Maple Springs',
			'Gloomhollow',
			'City of Aelwyn',
			'Ravenwick',
			'Port Thalmere',
			'Cedar Falls',
			'Vexara Prime',
			'Weeping Crypt',
			'Stonebridge',
			'Moonlit Glade',
			'Pinehaven',
			'Colony of Zetara',
			'Citadel of Morreth',
			'Foxminster',
			'Liberty Heights',
			'Krydar',
		),
	)
);
