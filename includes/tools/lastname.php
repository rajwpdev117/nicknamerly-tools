<?php
/**
 * Last name generator: [last_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'lastname',
	array(
		'shortcode'   => 'last_name_generator',
		'label'       => __( 'Generate Last Names', 'nicknamerly-tools' ),
		'variants'    => false,
		'bulk'        => true,
		'style_label' => __( 'Type', 'nicknamerly-tools' ),
		'styles'      => array(
			'common'  => __( 'Common US surnames', 'nicknamerly-tools' ),
			'rare'    => __( 'Rare surnames', 'nicknamerly-tools' ),
			'double'  => __( 'Double-barreled', 'nicknamerly-tools' ),
			'fantasy' => __( 'Fantasy surnames', 'nicknamerly-tools' ),
		),
		'counts'      => array( 10, 20, 50, 100, 1000 ),
		'examples'    => array(
			'Carter',
			'Bennett',
			'Ramirez',
			'Foster',
			'Nguyen',
			'Brooks',
			'Sullivan',
			'Hoffman',
			'Pearson',
			'Mitchell',
			'Henderson',
			'Whitaker',
			'Maldonado',
			'Holloway',
			'Jennings',
			'Underwood',
			'Tate',
			'Gutierrez',
			'Cooper',
			'Wallace',
		),
	)
);
