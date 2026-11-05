<?php
/**
 * American name generator: [american_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'american',
	array(
		'shortcode'        => 'american_name_generator',
		'label'            => __( 'Generate American Names', 'nicknamerly-tools' ),
		'data'             => 'random',
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. M', 'nicknamerly-tools' ),
		'style_label'      => __( 'Popularity', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'  => __( 'Any', 'nicknamerly-tools' ),
			'popular' => __( 'Popular', 'nicknamerly-tools' ),
			'classic' => __( 'Classic', 'nicknamerly-tools' ),
			'unique'  => __( 'Unique', 'nicknamerly-tools' ),
			'short'   => __( 'Short', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name type', 'nicknamerly-tools' ),
		'genders'          => array(
			'mix'   => __( 'Full name, any gender', 'nicknamerly-tools' ),
			'f'     => __( 'Female full name', 'nicknamerly-tools' ),
			'm'     => __( 'Male full name', 'nicknamerly-tools' ),
			'mi'    => __( 'Full name + middle initial', 'nicknamerly-tools' ),
			'first' => __( 'First name only', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Emily Johnson',
			'Michael Brown',
			'Hannah Miller',
			'Joshua Davis',
			'Olivia Wilson',
			'Ryan Anderson',
			'Megan Taylor',
			'Tyler Thomas',
			'Rachel Moore',
			'Brandon Martin',
			'Laura Jackson',
			'Kevin White',
			'Natalie Harris',
			'Andrew Clark',
			'Chloe Lewis',
			'Justin Walker',
			'Abigail Young',
			'Nathan Hall',
			'Grace Allen',
			'Dylan King',
		),
	)
);
