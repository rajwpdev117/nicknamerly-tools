<?php
/**
 * Male name generator: [male_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'male',
	array(
		'shortcode'        => 'male_name_generator',
		'label'            => __( 'Generate Male Names', 'nicknamerly-tools' ),
		'data'             => 'random',
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. A', 'nicknamerly-tools' ),
		'style_label'      => __( 'Popularity', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'  => __( 'Any', 'nicknamerly-tools' ),
			'popular' => __( 'Popular', 'nicknamerly-tools' ),
			'classic' => __( 'Classic', 'nicknamerly-tools' ),
			'unique'  => __( 'Unique', 'nicknamerly-tools' ),
			'short'   => __( 'Short', 'nicknamerly-tools' ),
			'long'    => __( 'Long', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name type', 'nicknamerly-tools' ),
		'genders'          => array(
			'first' => __( 'First names', 'nicknamerly-tools' ),
			'full'  => __( 'First + last name', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Ethan',
			'Jacob',
			'Daniel',
			'Lucas',
			'Andrew',
			'Ryan',
			'Brandon',
			'Tyler',
			'Kevin',
			'Marcus',
			'Nathan',
			'Caleb',
			'Owen',
			'Jonathan',
			'Dylan',
			'Mason',
			'Henry',
			'Julian',
			'Isaac',
			'Miles'
		),
	)
);
