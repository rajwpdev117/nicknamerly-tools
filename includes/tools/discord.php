<?php
/**
 * Discord username generator: [discord_username_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'discord',
	array(
		'shortcode'        => 'discord_username_generator',
		'label'            => __( 'Generate Discord Usernames', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Include a word (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. wolf', 'nicknamerly-tools' ),
		'style_label'      => __( 'Style', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Any style', 'nicknamerly-tools' ),
			'cool'   => __( 'Cool', 'nicknamerly-tools' ),
			'gaming' => __( 'Gaming', 'nicknamerly-tools' ),
			'cute'   => __( 'Cute', 'nicknamerly-tools' ),
			'dark'   => __( 'Dark', 'nicknamerly-tools' ),
			'funny'  => __( 'Funny', 'nicknamerly-tools' ),
			'clean'  => __( 'Short & clean', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Format', 'nicknamerly-tools' ),
		'genders'          => array(
			'mix'   => __( 'Any', 'nicknamerly-tools' ),
			'under' => __( 'With underscores', 'nicknamerly-tools' ),
			'dot'   => __( 'With dots', 'nicknamerly-tools' ),
			'solid' => __( 'One word', 'nicknamerly-tools' ),
			'num'   => __( 'With numbers', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'frost_falcon',
			'nitro.reaper',
			'sleepy_mochi',
			'midnightveil',
			'sirnoodle',
			'zephyr',
			'cobalt.lynx',
			'turbo_ranger',
			'fluffy.panda',
			'hollow_omen',
			'captain_pickle',
			'novaflux',
			'silent.drift',
			'apexwraith',
			'cozy_pudding',
			'ember.crypt',
			'chaoticbanana',
			'lunar_fox',
			'orion88',
			'rogue.titan',
		),
	)
);
