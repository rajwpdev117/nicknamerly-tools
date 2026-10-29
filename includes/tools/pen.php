<?php
/**
 * Pen name generator: [pen_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'pen',
	array(
		'shortcode'        => 'pen_name_generator',
		'label'            => __( 'Generate Pen Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. A', 'nicknamerly-tools' ),
		'style_label'      => __( 'Genre', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'   => __( 'Any genre', 'nicknamerly-tools' ),
			'romance'  => __( 'Romance', 'nicknamerly-tools' ),
			'mystery'  => __( 'Mystery', 'nicknamerly-tools' ),
			'fantasy'  => __( 'Fantasy', 'nicknamerly-tools' ),
			'scifi'    => __( 'Sci-fi', 'nicknamerly-tools' ),
			'literary' => __( 'Literary', 'nicknamerly-tools' ),
			'kids'     => __( 'Children\'s', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Gender', 'nicknamerly-tools' ),
		'genders'          => array(
			'any'    => __( 'Any', 'nicknamerly-tools' ),
			'female' => __( 'Female', 'nicknamerly-tools' ),
			'male'   => __( 'Male', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Eleanor Whitmore',
			'Raymond Blackwood',
			'Elara Stormwood',
			'Nova Calder',
			'Theodore Hartley',
			'Penny Honeywell',
			'J. R. Ashford',
			'Margaret Crane',
			'Sebastian Sinclair',
			'Iris Okoye',
			'Harper Bellamy',
			'Alaric Ravenscroft',
			'Dorothy Hale',
			'Orion Voss',
			'Violet Fairchild',
			'Oscar Larkin',
			'Freya Winterbourne',
			'A. M. Mercer',
			'Teddy Merriweather',
			'Evelyn Marlowe',
		),
	)
);
