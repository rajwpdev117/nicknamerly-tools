<?php
/**
 * Drow name generator: [drow_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'drow',
	array(
		'shortcode'        => 'drow_name_generator',
		'label'            => __( 'Generate Drow Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'rich'             => true,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. V', 'nicknamerly-tools' ),
		'style_label'      => __( 'Type of drow', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Any drow', 'nicknamerly-tools' ),
			'noble' => __( 'Noble (house name)', 'nicknamerly-tools' ),
			'common' => __( 'Common (trade name)', 'nicknamerly-tools' ),
			'exile' => __( 'Surface exile', 'nicknamerly-tools' ),
			'house' => __( 'House names', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name format', 'nicknamerly-tools' ),
		'genders'          => array(
			'any' => __( 'Full name, any gender', 'nicknamerly-tools' ),
			'f' => __( 'Female full name', 'nicknamerly-tools' ),
			'm' => __( 'Male full name', 'nicknamerly-tools' ),
			'u' => __( 'Neutral full name', 'nicknamerly-tools' ),
			'first' => __( 'First name only', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			array( 'Maelithra of House Kylryn', '', 'Maelithra (MAYL-ith-rah) = "midnight-veil" · House Kylryn (KIL-rin) = obsidian + blade' ),
			array( 'Jhaelan of House Vhorthyl', '', 'Jhaelan (JAYL-an) = "ritual-shade" · House Vhorthyl (VOR-thil) = dusk + spire' ),
			array( 'Szarul of House Naelul', '', 'Szarul (ZAR-ool) = "scorn-whisper" · House Naelul (NAYL-ool) = night + depth' ),
			array( 'Krynynn of House Iltheth', '', 'Krynynn (KRIN-in) = "bone-whisper" · House Iltheth (ILTH-eth) = shadow + vow' ),
			array( 'Xaelryn of House Drayeth', '', 'Xaelryn (ZAYL-rin) = "void-walker" · House Drayeth (DRAY-eth) = chain + vow' ),
			array( 'Aerul of House Velthyl', '', 'Aerul (AIR-ool) = "echo-whisper" · House Velthyl (VEL-thil) = silk + spire' ),
			array( 'Ulthia Dustcarrier', '', 'Ulthia (ULTH-ee-ah) = "cavern-born" · Dustcarrier = hauls ore and dust' ),
			array( 'Nazar Bonepicker', '', 'Nazar (NAZ-ar) = "crystal-hunter" · Bonepicker = collects bones for craft' ),
			array( 'Xaelyn Ropewalker', '', 'Xaelyn (ZAYL-in) = "void-seeker" · Ropewalker = guides climbers along cavern ropes' ),
			array( 'Nythelle Stonefence', '', 'Nythelle (NITH-el) = "night-dancer" · Stonefence = builds the cave walls' ),
			array( 'Erylox Lanternwright', '', 'Erylox (AIR-il-oks) = "glow-fang" · Lanternwright = builds lanterns' ),
			array( 'Rylul Stormdrawn', '', 'Rylul (RIL-ool) = "blade-whisper" · Stormdrawn = drawn to thunderstorms' ),
			array( 'Rylae Stormdrawn', '', 'Rylae (RIL-ay) = "blade-song" · Stormdrawn = drawn to thunderstorms' ),
			array( 'Eryleth Moonwalker', '', 'Eryleth (AIR-il-eth) = "glow-master" · Moonwalker = walks the surface by moonlight' ),
			array( 'Chylon Moonwalker', '', 'Chylon (KIL-on) = "glimmer-warden" · Moonwalker = walks the surface by moonlight' ),
			array( 'House Vhororn', '', 'Pronounced VOR-orn · Vhororn = dusk + throne' ),
			array( 'House Thaeryx', '', 'Pronounced THAIR-iks · Thaeryx = crystal + fang' ),
			array( 'House Drayryn', '', 'Pronounced DRAY-rin · Drayryn = chain + blade' ),
			array( 'House Elkthyl', '', 'Pronounced ELK-thil · Elkthyl = spore + spire' ),
			array( 'Haelor of House Velryn', '', 'Haelor (HAYL-or) = "oath-lord" · House Velryn (VEL-rin) = silk + blade' ),
		),
	)
);
