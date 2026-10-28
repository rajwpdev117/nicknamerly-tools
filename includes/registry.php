<?php
/**
 * Tool registry, asset registration and conditional loading.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registered tools: slug => config.
 *
 * @return array<string, array>
 */
function &nknm_tools() {
	static $tools = array();
	return $tools;
}

/**
 * Register a generator tool.
 *
 * @param string $slug Tool slug, e.g. 'nickname'.
 * @param array  $args {
 *     @type string   $shortcode Shortcode tag, e.g. 'nickname_generator'.
 *     @type string   $label     Button label, e.g. 'Generate Nicknames'.
 *     @type array    $styles    Style options: value => label.
 *     @type bool     $name_input Whether the tool has a "your name" field.
 *     @type string   $name_label Label of the name field.
 *     @type string   $name_placeholder Placeholder of the name field.
 *     @type string[] $examples  Names shown before the first click (rendered in HTML for crawlers).
 * }
 */
function nknm_register_tool( $slug, $args ) {
	$tools          = &nknm_tools();
	$tools[ $slug ] = wp_parse_args(
		$args,
		array(
			'shortcode'        => $slug . '_generator',
			'label'            => __( 'Generate', 'nicknamerly-tools' ),
			'styles'           => array(),
			'name_input'       => false,
			'name_label'       => __( 'Your name (optional)', 'nicknamerly-tools' ),
			'name_placeholder' => '',
			'examples'         => array(),
			'variants'         => true,
				'style_label'      => __( 'Style', 'nicknamerly-tools' ),
				'genders'          => array(),
				'counts'           => array(),
				'bulk'             => false,
				'name2_label'      => '',
				'name2_placeholder' => '',
				'rich'             => false,
		)
	);
}

/**
 * Register shared and per-tool assets (enqueued only when a tool is on the page).
 */
function nknm_register_assets() {
	wp_register_style( 'nknm-tools', NKNM_URL . 'assets/css/nknm-tools.css', array(), NKNM_VERSION );

	$script_args = array(
		'strategy'  => 'defer',
		'in_footer' => true,
	);

	wp_register_script( 'nknm-core', NKNM_URL . 'assets/js/nknm-core.js', array(), NKNM_VERSION, $script_args );

	foreach ( array_keys( nknm_tools() ) as $slug ) {
		wp_register_script( "nknm-data-{$slug}", NKNM_URL . "assets/js/data/{$slug}-data.js", array(), NKNM_VERSION, $script_args );
		wp_register_script( "nknm-tool-{$slug}", NKNM_URL . "assets/js/tools/{$slug}.js", array( 'nknm-core', "nknm-data-{$slug}" ), NKNM_VERSION, $script_args );
	}
}

/**
 * Enqueue the assets of one tool.
 *
 * @param string $slug Tool slug.
 */
function nknm_enqueue_tool( $slug ) {
	wp_enqueue_style( 'nknm-tools' );
	wp_enqueue_script( "nknm-tool-{$slug}" );
}

/**
 * Register one shortcode per tool.
 */
function nknm_register_shortcodes() {
	foreach ( nknm_tools() as $slug => $tool ) {
		add_shortcode(
			$tool['shortcode'],
			static function ( $atts ) use ( $slug ) {
				return nknm_render_tool( $slug, (array) $atts );
			}
		);
	}
}

/**
 * Enqueue CSS in <head> when the current post contains a tool shortcode,
 * so the tool is styled on first paint (no layout shift).
 * The shortcode callback also enqueues, as a fallback for widgets/templates.
 */
function nknm_maybe_enqueue_early() {
	if ( ! is_singular() ) {
		return;
	}
	$post = get_post();
	if ( ! $post || empty( $post->post_content ) ) {
		return;
	}
	foreach ( nknm_tools() as $slug => $tool ) {
		if ( has_shortcode( $post->post_content, $tool['shortcode'] ) ) {
			nknm_enqueue_tool( $slug );
		}
	}
	if ( nknm_is_home_content( $post ) ) {
		wp_enqueue_style( 'nknm-home', NKNM_URL . 'assets/css/nknm-home.css', array( 'nknm-tools' ), NKNM_VERSION );
	}
}

/**
 * Pages built from the Nicknamerly homepage blocks carry the "nknm-hero" class.
 *
 * @param WP_Post|null $post Post.
 * @return bool
 */
function nknm_is_home_content( $post = null ) {
	$post = $post ? $post : get_post();
	return $post && ! empty( $post->post_content ) && false !== strpos( $post->post_content, 'nknm-hero' );
}
