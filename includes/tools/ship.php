<?php
/**
 * Ship name generator: [ship_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'ship',
	array(
		'shortcode'         => 'ship_name_generator',
		'label'             => __( 'Generate Ship Names', 'nicknamerly-tools' ),
		'variants'          => false,
		'name_input'        => true,
		'name_label'        => __( 'First name', 'nicknamerly-tools' ),
		'name_placeholder'  => __( 'e.g. Emma', 'nicknamerly-tools' ),
		'name2_label'       => __( 'Second name', 'nicknamerly-tools' ),
		'name2_placeholder' => __( 'e.g. Liam', 'nicknamerly-tools' ),
		'style_label'       => __( 'Style', 'nicknamerly-tools' ),
		'styles'            => array(
			'blend'   => __( 'Best blends', 'nicknamerly-tools' ),
			'short'   => __( 'Short and sweet', 'nicknamerly-tools' ),
			'hashtag' => __( 'Hashtags', 'nicknamerly-tools' ),
			'mix'     => __( 'Surprise mix', 'nicknamerly-tools' ),
		),
		'examples'          => array(
			'Novia',
			'Nataniel',
			'Chason',
			'Jeshael',
			'Taylex',
			'Violiot',
			'Zoden',
			'Liwen',
			'Jacophia',
			'Samandan',
			'Haryatt',
			'Stelam',
			'Avucas',
			'Mihan',
			'Elax',
			'Grogan',
			'Meler',
			'Noren',
			'Racam',
			'Ruack',
		),
	)
);
