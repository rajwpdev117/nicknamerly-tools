<?php
/**
 * Japanese name generator: [japanese_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'japanese',
	array(
		'shortcode'        => 'japanese_name_generator',
		'label'            => __( 'Generate Japanese Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'rich'             => true,
		'name_input'       => true,
		'name_label'       => __( 'Your name (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. Emily', 'nicknamerly-tools' ),
		'style_label'      => __( 'Name type', 'nicknamerly-tools' ),
		'styles'           => array(
			'west'    => __( 'Full name (given + family)', 'nicknamerly-tools' ),
			'jp'      => __( 'Full name (family first)', 'nicknamerly-tools' ),
			'given'   => __( 'First names only', 'nicknamerly-tools' ),
			'surname' => __( 'Family names only', 'nicknamerly-tools' ),
		),
		'genders'          => array(
			'any'    => __( 'Any', 'nicknamerly-tools' ),
			'female' => __( 'Female', 'nicknamerly-tools' ),
			'male'   => __( 'Male', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			array( 'Haruto Sato', '佐藤陽翔', 'Haruto = sun + soar · Sato = help + wisteria' ),
			array( 'Sakura Suzuki', '鈴木桜', 'Sakura = cherry blossom · Suzuki = bell + tree' ),
			array( 'Ren Takahashi', '高橋蓮', 'Ren = lotus · Takahashi = tall + bridge' ),
			array( 'Hina Tanaka', '田中陽菜', 'Hina = sun + greens (sunny, fresh) · Tanaka = rice field + middle' ),
			array( 'Riku Yamamoto', '山本陸', 'Riku = land · Yamamoto = mountain + base' ),
			array( 'Yui Nakamura', '中村結衣', 'Yui = bond, tie · Nakamura = middle + village' ),
			array( 'Kaito Kobayashi', '小林海斗', 'Kaito = sea + big dipper · Kobayashi = small + forest' ),
			array( 'Aoi Kato', '加藤葵', 'Aoi = hollyhock · Kato = add + wisteria' ),
			array( 'Takumi Yoshida', '吉田匠', 'Takumi = artisan · Yoshida = lucky + rice field' ),
			array( 'Mio Hayashi', '林澪', 'Mio = waterway, channel · Hayashi = woods' ),
			array( 'Sota Matsumoto', '松本蒼太', 'Sota = blue + strong · Matsumoto = pine + base' ),
			array( 'Akari Shimizu', '清水明里', 'Akari = bright + village · Shimizu = clear + water' ),
		),
	)
);
