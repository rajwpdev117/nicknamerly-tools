<?php
/**
 * Random name generator: [random_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'random',
	array(
		'shortcode'   => 'random_name_generator',
		'label'       => __( 'Generate Names', 'nicknamerly-tools' ),
		'variants'    => false,
		'bulk'        => true,
		'style_label' => __( 'Name type', 'nicknamerly-tools' ),
		'styles'      => array(
			'full'  => __( 'First + last name', 'nicknamerly-tools' ),
			'full3' => __( 'First + middle + last', 'nicknamerly-tools' ),
			'first' => __( 'First names only', 'nicknamerly-tools' ),
			'last'  => __( 'Last names only', 'nicknamerly-tools' ),
		),
		'genders'     => array(
			'any'    => __( 'Any', 'nicknamerly-tools' ),
			'female' => __( 'Female', 'nicknamerly-tools' ),
			'male'   => __( 'Male', 'nicknamerly-tools' ),
		),
		'counts'      => array( 10, 20, 50, 100, 1000 ),
		'examples'    => array(
			'Emily Carter',
			'Marcus Bennett',
			'Olivia Ramirez',
			'Daniel Foster',
			'Sophia Nguyen',
			'Ethan Brooks',
			'Hannah Wallace',
			'Jacob Sullivan',
			'Grace Hoffman',
			'Lucas Pearson',
			'Natalie Cooper',
			'Andrew Mitchell',
			'Chloe Henderson',
			'Ryan Maldonado',
			'Megan Holloway',
			'Tyler Jennings',
			'Rachel Underwood',
			'Brandon Tate',
			'Laura Gutierrez',
			'Kevin Whitaker',
		),
	)
);
