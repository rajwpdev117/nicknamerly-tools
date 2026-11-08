<?php
/**
 * Elf name generator: [elf_name_generator]
 */

defined( 'ABSPATH' ) || exit;

nknm_register_tool(
	'elf',
	array(
		'shortcode'        => 'elf_name_generator',
		'label'            => __( 'Generate Elf Names', 'nicknamerly-tools' ),
		'variants'         => false,
		'rich'             => true,
		'name_input'       => true,
		'name_label'       => __( 'Starting letter (optional)', 'nicknamerly-tools' ),
		'name_placeholder' => __( 'e.g. A', 'nicknamerly-tools' ),
		'style_label'      => __( 'Type of elf', 'nicknamerly-tools' ),
		'styles'           => array(
			'random' => __( 'Any elf', 'nicknamerly-tools' ),
			'high'   => __( 'High elf', 'nicknamerly-tools' ),
			'wood'   => __( 'Wood elf', 'nicknamerly-tools' ),
			'dark'   => __( 'Dark elf (drow)', 'nicknamerly-tools' ),
			'half'   => __( 'Half-elf', 'nicknamerly-tools' ),
			'xmas'   => __( 'Christmas elf', 'nicknamerly-tools' ),
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
			array( 'Eluvia Duskcrown', '', 'Eluvia (EL-oov-ee-ah) = "grace-spirit" · Duskcrown = dusk + crown' ),
			array( 'Fennor Oakwalker', '', 'Fennor (FEN-or) = "marsh-warden" · Oakwalker = oak + walker' ),
			array( 'Zylyx Ashwhisper', '', 'Zylyx (ZIL-iks) = "shadow-shade" · Ashwhisper = ash + whisper' ),
			array( 'Arisalyn Lightwalker', '', 'Arisalyn (AIR-is-al-in) = "dusk-glow-dancer" · Lightwalker = light + walker' ),
			array( 'Rhaerin Ashridge', '', 'Rhaerin (RAY-rin) = "dream-weaver" · Ashridge = ash + ridge' ),
			array( 'Elmen Ivyhollow', '', 'Elmen (ELM-en) = "elm-dreamer" · Ivyhollow = ivy + hollow' ),
			array( 'Nutmeg Sleighbell', '', 'Nutmeg = a holiday spice · Sleighbell = a bell on the sleigh' ),
			array( 'Drelex Ashstalker', '', 'Drelex (DREL-eks) = "dusk-duelist" · Ashstalker = ash + stalker' ),
			array( 'Tylen Crystalwalker', '', 'Tylen (TIL-en) = "crystal-dreamer" · Crystalwalker = crystal + walker' ),
			array( 'Cloveressa Ivyroot', '', 'Cloveressa (KLOH-ver-ess-ah) = "clover-heart" · Ivyroot = ivy + root' ),
			array( 'Arisor Ashwood', '', 'Arisor (AIR-is-or) = "dusk-glow-warden" · Ashwood = ash + wood' ),
			array( 'Vharae Voidblade', '', 'Vharae (VAR-ay) = "night-echo" · Voidblade = void + blade' ),
			array( 'Halalyn Duskglade', '', 'Halalyn (HAL-al-in) = "radiance-dancer" · Duskglade = dusk + glade' ),
			array( 'Willowul Dewrunner', '', 'Willowul (WIL-oh-ool) = "willow-keeper" · Dewrunner = dew + runner' ),
			array( 'Ribbon Toffeetoes', '', 'Ribbon = gift wrap · Toffeetoes = sticky toes' ),
			array( 'Nythelle Gloomwhisper', '', 'Nythelle (NITH-el) = "gloom-blade" · Gloomwhisper = gloom + whisper' ),
			array( 'Ilyrael Dawnbrook', '', 'Ilyrael (IL-eer-ayl) = "star-wanderer" · Dawnbrook = dawn + brook' ),
			array( 'Lunra Dawnspire', '', 'Lunra (LOON-rah) = "moon-song" · Dawnspire = dawn + spire' ),
			array( 'Dewiel Foxbough', '', 'Dewiel (DYOO-ee-el) = "dew-bearer" · Foxbough = fox + bough' ),
			array( 'Noxik Gloomreach', '', 'Noxik (NOKS-ik) = "night-fall-hunter" · Gloomreach = gloom + reach' ),
		),
	)
);
