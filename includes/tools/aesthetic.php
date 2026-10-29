<?php
/**
 * Aesthetic username generator: [aesthetic_username_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'aesthetic',
	array(
		'shortcode'        => 'aesthetic_username_generator',
		'label'            => __( 'Generate Aesthetic Usernames', 'nicknamerly-tools' ),
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'Include a word (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. moon', 'nicknamerly-tools' ),
		'style_label'      => __( 'Aesthetic', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'      => __( 'Any aesthetic', 'nicknamerly-tools' ),
			'soft'        => __( 'Soft & cute', 'nicknamerly-tools' ),
			'dark'        => __( 'Dark', 'nicknamerly-tools' ),
			'cottagecore' => __( 'Cottagecore', 'nicknamerly-tools' ),
			'y2k'         => __( 'Y2K', 'nicknamerly-tools' ),
			'minimal'     => __( 'Minimal', 'nicknamerly-tools' ),
			'vintage'     => __( 'Vintage', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Format', 'nicknamerly-tools' ),
		'genders'          => array(
			'mix'   => __( 'Any', 'nicknamerly-tools' ),
			'dot'   => __( 'With dots', 'nicknamerly-tools' ),
			'under' => __( 'With underscores', 'nicknamerly-tools' ),
			'solid' => __( 'One word', 'nicknamerly-tools' ),
			'num'   => __( 'With numbers', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'moonlit.petals',
			'softvelvet',
			'daydream_lore',
			'honey.ember',
			'lunarbloom',
			'pastel.haze',
			'midnight_thorn',
			'cottage.clover',
			'glitterstatic',
			'velvet.dusk',
			'quiet.echo',
			'wildflower_dreams',
			'vinylsunset',
			'blush.noir',
			'starlit_fern',
			'mossy.willow',
			'butterfly.chrome',
			'cherry.cola',
			'ivory.drift',
			'amber.polaroid',
		),
	)
);
