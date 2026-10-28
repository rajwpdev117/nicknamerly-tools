<?php
/**
 * Plugin Name:       Nicknamerly Tools
 * Plugin URI:        https://nicknamerly.com/
 * Description:       Lightweight nickname and username generators for Nicknamerly. Each tool is a shortcode, e.g. [nickname_generator]. Assets load only on pages that use a tool.
 * Version:           1.9.0
 * Requires at least: 6.3
 * Requires PHP:      7.4
 * Author:            Nicknamerly
 * License:           GPL-2.0-or-later
 * Text Domain:       nicknamerly-tools
 */

defined( 'ABSPATH' ) || exit;

define( 'NKNM_VERSION', '1.10.0' );
define( 'NKNM_FILE', __FILE__ );
define( 'NKNM_DIR', plugin_dir_path( __FILE__ ) );
define( 'NKNM_URL', plugin_dir_url( __FILE__ ) );

require_once NKNM_DIR . 'includes/registry.php';
require_once NKNM_DIR . 'includes/render.php';
require_once NKNM_DIR . 'includes/layout.php';

/**
 * Load tool definitions on init (labels are translatable, so not earlier).
 * Add a new generator by creating includes/tools/<slug>.php that calls nknm_register_tool(),
 * plus assets/js/data/<slug>-data.js and assets/js/tools/<slug>.js, then list it here.
 */
function nknm_load_tools() {
	foreach ( array( 'nickname', 'username', 'random', 'lastname', 'ship', 'japanese', 'gamertag', 'character', 'band' ) as $nknm_slug ) {
		require_once NKNM_DIR . 'includes/tools/' . $nknm_slug . '.php';
	}
}
add_action( 'init', 'nknm_load_tools', 5 );
add_action( 'init', 'nknm_register_assets' );
add_action( 'init', 'nknm_register_shortcodes' );
add_action( 'wp_enqueue_scripts', 'nknm_maybe_enqueue_early' );

// Updates from GitHub Releases (public repo, no token needed).
$nknm_puc = NKNM_DIR . 'lib/plugin-update-checker/plugin-update-checker.php';
if ( file_exists( $nknm_puc ) ) {
	require_once $nknm_puc;
	$nknm_update_checker = YahnisElsts\PluginUpdateChecker\v5\PucFactory::buildUpdateChecker(
		'https://github.com/rajwpdev117/nicknamerly-tools/',
		__FILE__,
		'nicknamerly-tools'
	);
	$nknm_update_checker->getVcsApi()->enableReleaseAssets();
}
