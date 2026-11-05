<?php
/**
 * Discord server name generator: [discord_server_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'discordserver',
	array(
		'shortcode'        => 'discord_server_name_generator',
		'label'            => __( 'Generate Server Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Your topic or game (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. Minecraft', 'nicknamerly-tools' ),
		'style_label'      => __( 'Server type', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'    => __( 'Any type', 'nicknamerly-tools' ),
			'gaming'    => __( 'Gaming', 'nicknamerly-tools' ),
			'study'     => __( 'Study', 'nicknamerly-tools' ),
			'anime'     => __( 'Anime', 'nicknamerly-tools' ),
			'chill'     => __( 'Friends & chill', 'nicknamerly-tools' ),
			'creative'  => __( 'Art & music', 'nicknamerly-tools' ),
			'funny'     => __( 'Funny', 'nicknamerly-tools' ),
			'community' => __( 'Community', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name shape', 'nicknamerly-tools' ),
		'genders'          => array(
			'mix'   => __( 'Any', 'nicknamerly-tools' ),
			'short' => __( 'Short (2 words)', 'nicknamerly-tools' ),
			'the'   => __( 'Starts with "The"', 'nicknamerly-tools' ),
			'long'  => __( 'Longer (3 words)', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'The Midnight Lounge',
			'Pixel Wolves',
			'Cozy Corner Cafe',
			'Turbo Raiders Guild',
			'The Quiet Library',
			'Sakura Dojo',
			'Neon Pandas',
			'The Chaotic Goblins',
			'Golden Hour Studio',
			'Lucky Squad',
			'Sleepy Otters Hangout',
			'Study Owls Society',
			'The Friendly Commons',
			'Starlit Shrine',
			'Rogue Legion',
			'Sunny Porch',
			'The Painted Gallery',
			'Wholesome Raccoons Club',
			'Epic Arena',
			'Mellow Nook',
		),
	)
);
