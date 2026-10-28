<?php
/**
 * Gamertag generator: [gamertag_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'gamertag',
	array(
		'shortcode'        => 'gamertag_generator',
		'label'            => __( 'Generate Gamertags', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Your name or a keyword (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. Alex, wolf, pixel', 'nicknamerly-tools' ),
		'style_label'      => __( 'Style', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'  => __( 'Random mix', 'nicknamerly-tools' ),
			'tryhard' => __( 'Tryhard', 'nicknamerly-tools' ),
			'cool'    => __( 'Cool', 'nicknamerly-tools' ),
			'funny'   => __( 'Funny', 'nicknamerly-tools' ),
			'cute'    => __( 'Cute', 'nicknamerly-tools' ),
			'clean'   => __( 'Short and clean', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Platform', 'nicknamerly-tools' ),
		'genders'          => array(
			'any'  => __( 'Any (up to 20 characters)', 'nicknamerly-tools' ),
			'xbox' => __( 'Xbox (up to 12)', 'nicknamerly-tools' ),
			'psn'  => __( 'PlayStation (up to 16)', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'SavageViper',
			'FrostFox42',
			'PickleSniper',
			'tiny_panda',
			'NightReaper',
			'Vortex',
			'LagIsMyCopilot',
			'LunarWolf',
			'xXTurboAceXx',
			'cozy_mochi',
			'GhostFalcon',
			'WaffleNinja',
			'ApexRider',
			'Nova77',
			'SirTacoALot',
			'CrimsonBolt',
			'fluffy_otter',
			'StealthBandit',
			'Zenith',
			'RespawnRicky',
		),
	)
);
