<?php
/**
 * Roblox username generator: [roblox_username_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'roblox',
	array(
		'shortcode'        => 'roblox_username_generator',
		'label'            => __( 'Generate Roblox Usernames', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Include a word (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. fox', 'nicknamerly-tools' ),
		'style_label'      => __( 'Style', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Any style', 'nicknamerly-tools' ),
			'cool'   => __( 'Cool', 'nicknamerly-tools' ),
			'cute'   => __( 'Cute', 'nicknamerly-tools' ),
			'funny'  => __( 'Funny', 'nicknamerly-tools' ),
			'pro'    => __( 'Pro gamer', 'nicknamerly-tools' ),
			'blocky' => __( 'Blocky builder', 'nicknamerly-tools' ),
			'clean'  => __( 'Short & clean', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Format', 'nicknamerly-tools' ),
		'genders'          => array(
			'mix'   => __( 'Any', 'nicknamerly-tools' ),
			'camel' => __( 'CamelCase', 'nicknamerly-tools' ),
			'lower' => __( 'lowercase', 'nicknamerly-tools' ),
			'under' => __( 'One underscore', 'nicknamerly-tools' ),
			'num'   => __( 'With numbers', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'FrostFalcon',
			'NeonReaper',
			'SleepyMochi',
			'turbo_ranger',
			'BrickBuilder',
			'CaptainPickle',
			'Zephyr',
			'CobaltLynx88',
			'fluffypanda',
			'ObbyHero',
			'BaconTycoon',
			'NovaFlux',
			'Sleepy_Otter',
			'ApexWraith',
			'cozypudding',
			'GrumpyNugget',
			'LunarFox07',
			'Orion',
			'ParkourPilot',
			'Mega_Noob',
		),
	)
);
