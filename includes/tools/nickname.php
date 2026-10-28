<?php
/**
 * Nickname generator: [nickname_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'nickname',
	array(
		'shortcode'        => 'nickname_generator',
		'label'            => __( 'Generate Nicknames', 'nicknamerly-tools' ),
		'name_input'       => true,
		'name_label'       => __( 'Your name (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. Alexander', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Random mix', 'nicknamerly-tools' ),
			'cute'   => __( 'Cute', 'nicknamerly-tools' ),
			'cool'   => __( 'Cool', 'nicknamerly-tools' ),
			'funny'  => __( 'Funny', 'nicknamerly-tools' ),
			'gaming' => __( 'Gaming', 'nicknamerly-tools' ),
		),
		// Shown before the first click, so the tool never looks empty and crawlers see real ideas.
		'examples'         => array(
			'Honey Bean',
			'Shadow Fox',
			'Captain Snackbar',
			'NightViper',
			'Sugar Plum',
			'Ace',
			'Sir Naps-a-Lot',
			'FrostByte',
			'Peanut',
			'Blaze Runner',
			'Waffle Wizard',
			'GhostPixel',
			'Button',
			'Silver Hawk',
			'Professor Pickles',
			'StormRider',
			'Cupcake',
			'Midnight Wolf',
			'Noodle Ninja',
			'CrimsonAce',
		),
	)
);
