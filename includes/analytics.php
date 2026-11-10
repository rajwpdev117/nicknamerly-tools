<?php
/**
 * Google Tag Manager container (GTM-KKXWX4CB) and Microsoft Clarity (project zbil22nuqe). Both load in the head on the public site only.
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

/**
 * Microsoft Clarity, installed directly (not through GTM, so do not add a second Clarity tag in the container).
 * Change the project ID with the nknm_clarity_id filter.
 */
add_action(
	'wp_head',
	function () {
		if ( is_admin() || is_feed() || is_robots() || is_preview() || current_user_can( 'edit_posts' ) ) {
			return;
		}
		$id = apply_filters( 'nknm_clarity_id', 'zbil22nuqe' );
		if ( ! $id || ! preg_match( '/^[a-z0-9]+$/', $id ) ) {
			return;
		}
		echo "<script>(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,\"clarity\",\"script\",\"" . esc_js( $id ) . "\");</script>\n";
	},
	2
);
