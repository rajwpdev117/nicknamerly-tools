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
		'data_extra'       => 'decade',
		'extra_label'      => __( 'Decade', 'nicknamerly-tools' ),
		'extra'            => array(
			''      => __( 'Any (today\'s mix)', 'nicknamerly-tools' ),
			'1960s' => __( '1960s', 'nicknamerly-tools' ),
			'1970s' => __( '1970s', 'nicknamerly-tools' ),
			'1980s' => __( '1980s', 'nicknamerly-tools' ),
			'1990s' => __( '1990s', 'nicknamerly-tools' ),
			'2000s' => __( '2000s', 'nicknamerly-tools' ),
			'2010s' => __( '2010s', 'nicknamerly-tools' ),
			'2020s' => __( '2020s so far', 'nicknamerly-tools' ),
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
