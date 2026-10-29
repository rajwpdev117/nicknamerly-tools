<?php
/**
 * Rap name generator: [rap_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'rap',
	array(
		'shortcode'        => 'rap_name_generator',
		'label'            => __( 'Generate Rap Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Your name (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. Alex', 'nicknamerly-tools' ),
		'style_label'      => __( 'Style', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'  => __( 'Any style', 'nicknamerly-tools' ),
			'hiphop'  => __( 'Hip-hop', 'nicknamerly-tools' ),
			'trap'    => __( 'Trap', 'nicknamerly-tools' ),
			'old'     => __( 'Old school', 'nicknamerly-tools' ),
			'drill'   => __( 'Drill', 'nicknamerly-tools' ),
			'smooth'  => __( 'Smooth', 'nicknamerly-tools' ),
			'funny'   => __( 'Funny', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Lil Comet',
			'MC Midnight',
			'Young Ghost',
			'Ace the Kid',
			'Silent Wolf',
			'Big Flow',
			'DJ Fresh',
			'Cash Phantom',
			'Kid Voltage',
			'The Golden Mic',
			'R-Flow',
			'Lil Waffle',
			'Mr. Smooth',
			'Chief Shadow',
			'Yung Ember',
			'Don Blitz',
			'Velvet Verse',
			'Neon Savage',
			'Doc Rhyme',
			'Sir Nugget',
		),
	)
);
