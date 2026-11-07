<?php
/**
 * Google Tag Manager container (GTM-KKXWX4CB). Loads in the head on the public site only.
 * Logged-in editors are skipped so your own visits do not count. Change the ID with the nknm_gtm_id filter.
 */

defined( 'ABSPATH' ) || exit;

add_action(
	'wp_head',
	function () {
		if ( is_admin() || is_feed() || is_robots() || is_preview() || current_user_can( 'edit_posts' ) ) {
			return;
		}
		$id = apply_filters( 'nknm_gtm_id', 'GTM-KKXWX4CB' );
		if ( ! $id || ! preg_match( '/^GTM-[A-Z0-9]+$/', $id ) ) {
			return;
		}
		echo "<script async src=\"https://www.googletagmanager.com/gtm.js?id=" . esc_attr( $id ) . "\"></script>\n";
		echo "<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());</script>\n";
	},
	1
);
