<?php
/**
 * Tiefling name generator: [tiefling_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'tiefling',
	array(
		'shortcode'        => 'tiefling_name_generator',
		'label'            => __( 'Generate Tiefling Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'rich'             => true,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. K', 'nicknamerly-tools' ),
		'style_label'      => __( 'Type of name', 'nicknamerly-tools' ),
		'styles'           => array(
			'random'   => __( 'Any tiefling name', 'nicknamerly-tools' ),
			'infernal' => __( 'Infernal name', 'nicknamerly-tools' ),
			'virtue'   => __( 'Virtue name', 'nicknamerly-tools' ),
			'pair'     => __( 'Infernal + virtue nickname', 'nicknamerly-tools' ),
			'blend'    => __( 'Blend-in human name', 'nicknamerly-tools' ),
		),
		'genders_label'    => __( 'Name format', 'nicknamerly-tools' ),
		'genders'          => array(
			'any'   => __( 'Full name, any gender', 'nicknamerly-tools' ),
			'f'     => __( 'Female full name', 'nicknamerly-tools' ),
			'm'     => __( 'Male full name', 'nicknamerly-tools' ),
			'u'     => __( 'Neutral full name', 'nicknamerly-tools' ),
			'first' => __( 'First name only', 'nicknamerly-tools' ),
		),
		'examples'         => array(
			array( 'Saria Ruinbrand', '', 'Saria (SAR-ee-ah) = "smoke-born" · Ruinbrand = ruin + brand' ),
			array( 'Quaryx Duskcrest', '', 'Quaryx (KWAR-iks) = "crimson-fang" · Duskcrest = dusk + crest' ),
			array( 'Phorys Cinderthorn', '', 'Phorys (FOR-iss) = "pact-dreamer" · Cinderthorn = cinder + thorn' ),
			array( 'Sylia Smokehorn', '', 'Sylia (SIL-ee-ah) = "whisper-born" · Smokehorn = smoke + horn' ),
			array( 'Azor Ironborn', '', 'Azor (AZ-or) = "ash-lord" · Ironborn = iron + born' ),
			array( 'Vorul Ravensong', '', 'Vorul (VOR-ool) = "oath-talon" · Ravensong = raven + song' ),
			array( 'Yearning Scorchwhisper', '', 'Yearning = a longing for something far away · Scorchwhisper = scorch + whisper' ),
			array( 'Hopeful Nightbane', '', 'Hopeful = always looking to tomorrow · Nightbane = night + bane' ),
			array( 'Charity Ruinheart', '', 'Charity = giving without asking · Ruinheart = ruin + heart' ),
			array( 'Zeal Bonethorn', '', 'Zeal = burning enthusiasm · Bonethorn = bone + thorn' ),
			array( 'Cyrak "Merit" Scorchwake', '', 'Cyrak (SEER-ak) = "cinder-blade" · goes by "Merit" = earned worth · Scorchwake = scorch + wake' ),
			array( 'Nevys "Candor" Thorncrest', '', 'Nevys (NEV-iss) = "ruse-dreamer" · goes by "Candor" = honest speech · Thorncrest = thorn + crest' ),
			array( 'Zethine "Fable" Crimsonheart', '', 'Zethine (ZETH-een) = "flame-spirit" · goes by "Fable" = a story passed down · Crimsonheart = crimson + heart' ),
			array( 'Daxthor "Patience" Ruinhorn', '', 'Daxthor (DAKS-thor) = "fang-walker" · goes by "Patience" = calm that outlasts trouble · Ruinhorn = ruin + horn' ),
			array( 'Rynul "Liberty" Ruinsong', '', 'Rynul (RIN-ool) = "ruin-talon" · goes by "Liberty" = freedom to choose · Ruinsong = ruin + song' ),
			array( 'Odette Hollis', '', 'A plain human name, good for hiding in a crowd' ),
			array( 'Gideon Penhallow', '', 'An everyday name for a tiefling who wants to blend in' ),
			array( 'Sage Draper', '', 'An everyday name for a tiefling who wants to blend in' ),
			array( 'Jazithra Ashbane', '', 'Jazithra (JAZ-ith-rah) = "spark-flame" · Ashbane = ash + bane' ),
			array( 'Sanctuary Nighthorn', '', 'Sanctuary = a safe place · Nighthorn = night + horn' ),
		),
	)
);
