<?php
/**
 * Email name generator: [email_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'email',
	array(
		'shortcode'         => 'email_name_generator',
		'label'             => __( 'Generate Email Names', 'nicknamerly-tools' ),
		'variants'          => false,
		'name_input'        => true,
		'name_label'        => __( 'First name (optional)', 'nicknamerly-tools' ),
		'name_placeholder'  => __( 'e.g. Emma', 'nicknamerly-tools' ),
		'name2_label'       => __( 'Last name (optional)', 'nicknamerly-tools' ),
		'name2_placeholder' => __( 'e.g. Carter', 'nicknamerly-tools' ),
		'style_label'       => __( 'Style', 'nicknamerly-tools' ),
		'styles'            => array(
			'pro'      => __( 'Professional', 'nicknamerly-tools' ),
			'creative' => __( 'Creative', 'nicknamerly-tools' ),
			'cool'     => __( 'Cool', 'nicknamerly-tools' ),
			'clean'    => __( 'Short & clean', 'nicknamerly-tools' ),
		),
		'genders_label'     => __( 'Format', 'nicknamerly-tools' ),
		'genders'           => array(
			'mix'   => __( 'Any (Gmail-safe)', 'nicknamerly-tools' ),
			'dot'   => __( 'With a dot', 'nicknamerly-tools' ),
			'solid' => __( 'No separator', 'nicknamerly-tools' ),
			'num'   => __( 'With numbers', 'nicknamerly-tools' ),
			'under' => __( 'Underscore (not Gmail)', 'nicknamerly-tools' ),
		),
		'examples'          => array(
			'emma.carter',
			'e.carter',
			'emma.c',
			'carter.emma',
			'liam.brooks',
			'lbrooks',
			'sophia.reed.studio',
			'noah.bennett',
			'ember.fox',
			'sleepyotter',
			'cobalt.lynx',
			'frostfalcon',
			'zephyr.hayes',
			'nova.collins',
			'olivia.hayes',
			'mason.price',
			'ava.morgan',
			'ethan.cole',
			'brightpath',
			'quietriver',
		),
	)
);
