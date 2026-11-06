<?php
/**
 * First name generator: [first_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'first',
	array(
		'shortcode'        => 'first_name_generator',
		'label'            => __( 'Generate First Names', 'nicknamerly-tools' ),
		'data'             => 'random',
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. J', 'nicknamerly-tools' ),
		'style_label'      => __( 'Popularity', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'  => __( 'Any', 'nicknamerly-tools' ),
			'popular' => __( 'Popular', 'nicknamerly-tools' ),
			'classic' => __( 'Classic', 'nicknamerly-tools' ),
			'unique'  => __( 'Unique', 'nicknamerly-tools' ),
			'short'   => __( 'Short', 'nicknamerly-tools' ),
			'long'    => __( 'Long', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Gender', 'nicknamerly-tools' ),
		'genders'          => array(
			'any' => __( 'Any gender', 'nicknamerly-tools' ),
			'f'   => __( 'Girl names', 'nicknamerly-tools' ),
			'm'   => __( 'Boy names', 'nicknamerly-tools' ),
			'u'   => __( 'Unisex names', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Emily',
			'Jordan',
			'Michael',
			'Hannah',
			'Riley',
			'Brandon',
			'Olivia',
			'Casey',
			'Tyler',
			'Grace',
			'Avery',
			'Nathan',
			'Natalie',
			'Parker',
			'Ethan',
			'Sophia',
			'Taylor',
			'Dylan',
			'Chloe',
			'Quinn',
		),
	)
);
