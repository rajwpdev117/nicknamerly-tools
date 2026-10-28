<?php
/**
 * Band name generator: [band_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'band',
	array(
		'shortcode'        => 'band_name_generator',
		'label'            => __( 'Generate Band Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Include a word (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. Wolf', 'nicknamerly-tools' ),
		'style_label'      => __( 'Genre', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Any genre', 'nicknamerly-tools' ),
			'rock'   => __( 'Rock', 'nicknamerly-tools' ),
			'metal'  => __( 'Metal', 'nicknamerly-tools' ),
			'punk'   => __( 'Punk', 'nicknamerly-tools' ),
			'indie'  => __( 'Indie', 'nicknamerly-tools' ),
			'pop'    => __( 'Pop', 'nicknamerly-tools' ),
			'funny'  => __( 'Funny', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'The Velvet Echoes',
			'Iron Wolves',
			'Neon Riot',
			'Midnight Static',
			'Kings of Gravity',
			'The Paper Satellites',
			'Burning Cathedral',
			'Wolves & Roses',
			'Glass Harbor',
			'The Rusty Halos',
			'Black Tide Society',
			'Violet Avenue',
			'Dead Mountain Radio',
			'Sunday Thunder',
			'The Lost Coastline',
			'Crimson Machine',
			'Fever Dreams',
			'Hollow Saints',
			'Cosmic Pancake',
			'The Broken Compass',
		),
	)
);
