<?php
/**
 * Username generator: [username_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'username',
	array(
		'shortcode'        => 'username_generator',
		'label'            => __( 'Generate Usernames', 'nicknamerly-tools' ),
		'name_input'       => true,
		'name_label'       => __( 'Your name or a keyword (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. Alex, cat, coffee', 'nicknamerly-tools' ),
		'variants'         => false,
		'styles'           => array(
			'random'       => __( 'Random mix', 'nicknamerly-tools' ),
			'cool'         => __( 'Cool', 'nicknamerly-tools' ),
			'gaming'       => __( 'Gaming', 'nicknamerly-tools' ),
			'cute'         => __( 'Cute', 'nicknamerly-tools' ),
			'funny'        => __( 'Funny', 'nicknamerly-tools' ),
			'professional' => __( 'Professional', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'ShadowFalcon',
			'cozy_mochi',
			'NightViper42',
			'SirNapsALot',
			'brightpath',
			'FrostByte',
			'tiny.panda',
			'PixelStorm',
			'NoodleNinja',
			'north_peak',
			'GhostRider77',
			'honey_bean',
			'CrimsonAce',
			'waffle.wizard',
			'clever_craft',
			'LunarWolf',
			'SnackAttack',
			'maple.fox',
			'VoidRunner',
			'quiet_harbor',
		),
	)
);
