<?php
/**
 * Fake name generator: [fake_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'fake',
	array(
		'shortcode'        => 'fake_name_generator',
		'label'            => __( 'Generate Fake Names', 'nicknamerly-tools' ),
		'data'             => 'random',
		'variants'         => false,
		'name_input'       => true,
		'name_label'       => __( 'First name starts with (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. J', 'nicknamerly-tools' ),
		'style_label'      => __( 'Style', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'   => __( 'Realistic', 'nicknamerly-tools' ),
			'common'   => __( 'Common', 'nicknamerly-tools' ),
			'uncommon' => __( 'Uncommon', 'nicknamerly-tools' ),
			'short'    => __( 'Short', 'nicknamerly-tools' ),
			'hyphen'   => __( 'Double surname', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name type', 'nicknamerly-tools' ),
		'genders'          => array(
			'mix' => __( 'Full name, any gender', 'nicknamerly-tools' ),
			'f'   => __( 'Female', 'nicknamerly-tools' ),
			'm'   => __( 'Male', 'nicknamerly-tools' ),
			'mid' => __( 'With a middle name', 'nicknamerly-tools' ),
			'mi'  => __( 'With a middle initial', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			'Emily Carter',
			'Jason Brooks',
			'Hannah Reed',
			'Marcus Bell',
			'Olivia Hayes',
			'Ryan Foster',
			'Megan Powell',
			'Tyler Barnes',
			'Rachel Simmons',
			'Brandon Ross',
			'Laura Watson',
			'Kevin Price',
			'Natalie Bryant',
			'Andrew Cole',
			'Chloe Henderson',
			'Justin Gibson',
			'Abigail Wallace',
			'Nathan Ford',
			'Grace Hamilton',
			'Dylan Webb',
		),
	)
);
