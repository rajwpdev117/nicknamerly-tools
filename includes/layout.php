<?php
/**
 * Small theme tweaks for GeneratePress (free): clean tool pages, branded footer.
 * Each hook is a no-op on other themes.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Is the current page a tool page or the homepage built from our blocks?
 *
 * @return bool
 */
function nknm_is_tool_page() {
	if ( ! is_singular() ) {
		return false;
	}
	$post = get_post();
	if ( ! $post || empty( $post->post_content ) ) {
		return false;
	}
	if ( nknm_is_home_content( $post ) ) {
		return true;
	}
	foreach ( nknm_tools() as $tool ) {
		if ( has_shortcode( $post->post_content, $tool['shortcode'] ) ) {
			return true;
		}
	}
	return false;
}

/** This site has no sidebars. */
add_filter(
	'generate_sidebar_layout',
	function () {
		return 'no-sidebar';
	}
);

/** The H1 lives in the page content on the homepage, so hide the theme's page title there. */
add_filter(
	'generate_show_title',
	function ( $show ) {
		return nknm_is_home_content() ? false : $show;
	}
);

/** Body classes used by nknm-home.css. */
add_filter(
	'body_class',
	function ( $classes ) {
		if ( is_singular() && nknm_is_home_content() ) {
			$classes[] = 'nknm-front';
		}
		return $classes;
	}
);

/** Footer: logo + trust-page links + copyright, replacing "Built with GeneratePress". */
add_filter(
	'generate_copyright',
	function () {
		$links = array();
		foreach ( array(
			'about'          => __( 'About', 'nicknamerly-tools' ),
			'contact'        => __( 'Contact', 'nicknamerly-tools' ),
			'privacy-policy' => __( 'Privacy Policy', 'nicknamerly-tools' ),
			'terms'          => __( 'Terms', 'nicknamerly-tools' ),
		) as $slug => $label ) {
			$page = get_page_by_path( $slug );
			if ( $page && 'publish' === $page->post_status ) {
				$links[] = '<a href="' . esc_url( get_permalink( $page ) ) . '">' . esc_html( $label ) . '</a>';
			}
		}
		$logo = '<a class="nknm-foot-brand" href="' . esc_url( home_url( '/' ) ) . '" aria-label="' . esc_attr( get_bloginfo( 'name' ) ) . '">'
			. '<svg viewBox="0 0 120 120" width="32" height="32" aria-hidden="true"><path d="M99.9 78.6 A44 44 0 1 1 103.3 52.4" fill="none" stroke="#F472B6" stroke-width="9" stroke-linecap="round"/><path d="M46 82 V56 L74 82 V56" fill="none" stroke="#A78BFA" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="46" cy="42" r="6.5" fill="#A78BFA"/><circle cx="74" cy="42" r="6.5" fill="#F472B6"/></svg>'
			. '<span class="nknm-foot-word"><span>Nick</span><span>namerly</span></span></a>';
		$nav  = $links ? '<nav class="nknm-footer-links" aria-label="' . esc_attr__( 'Footer', 'nicknamerly-tools' ) . '">' . implode( '', $links ) . '</nav>' : '';
		$copy = '<span class="nknm-copy-line">&copy; ' . esc_html( gmdate( 'Y' ) ) . ' ' . esc_html( get_bloginfo( 'name' ) ) . '</span>';
		return '<div class="nknm-foot">' . $logo . $nav . $copy . '</div>';
	}
);

/** Site-wide brand styles (font, white page, plain header/footer, readable text pages). Kept inline: it is tiny. */
add_action(
	'wp_enqueue_scripts',
	function () {
		$font = NKNM_URL . 'assets/fonts/';
		$css  = '@font-face{font-family:"Nunito";font-style:normal;font-weight:800;font-display:swap;src:url("' . esc_url( $font . 'nunito-latin-800-normal.woff2' ) . '") format("woff2")}'
			. '@font-face{font-family:"Nunito";font-style:normal;font-weight:900;font-display:swap;src:url("' . esc_url( $font . 'nunito-latin-900-normal.woff2' ) . '") format("woff2")}'
			. 'body{background:#fff;color:#1e1b2e}'
			. '.site-header{border-bottom:1px solid #ece8f7;box-shadow:none}'
			. '.main-navigation .main-nav ul li a{font-size:15px;font-weight:600}'
			. '.main-navigation ul ul{min-width:230px;background:#fff;border:1px solid #ece8f7;border-radius:12px;box-shadow:0 12px 28px rgba(30,27,46,.12);padding:6px;overflow:hidden}'
			. '.main-navigation ul ul li a{white-space:nowrap;padding:10px 14px;border-radius:8px;color:#1e1b2e}'
			. '.main-navigation ul ul li:hover>a,.main-navigation ul ul li a:focus{background:#f5f3ff;color:#6d28d9}'
			. 'body:not(.nknm-front) .site-content{display:block}'
			. 'body:not(.nknm-front) .inside-article{box-sizing:border-box;max-width:820px;margin:0 auto;padding:48px 24px 64px;background:transparent}'
			. 'body:not(.nknm-front) .entry-title,body:not(.nknm-front) .entry-content h2,body:not(.nknm-front) .entry-content h3{font-family:Nunito,system-ui,sans-serif;font-weight:900;line-height:1.2;color:#1e1b2e}'
			. 'body:not(.nknm-front) .entry-title{font-size:clamp(32px,5vw,44px);margin-bottom:24px}'
			. 'body:not(.nknm-front) .entry-content h2{font-size:26px;margin:32px 0 10px}'
			. 'body:not(.nknm-front) .entry-content p,body:not(.nknm-front) .entry-content li{line-height:1.7;color:#4b4560}'
			. 'body:not(.nknm-front) .entry-content a{color:#6d28d9}'
			. '.site-footer{background:#1e1b2e}'
			. '.site-info{background:#1e1b2e;color:#ddd6fe;padding:0;text-align:left}'
			. '.site-info .inside-site-info{display:block;max-width:none;width:100%;padding:0;margin:0}'
			. '.site-info .copyright-bar{display:block;width:100%;max-width:none;margin:0;padding:0}'
			. '.nknm-foot{box-sizing:border-box;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:18px 32px;width:100%;max-width:1120px;margin:0 auto;padding:36px 24px;font-size:15px}'
			. '.nknm-foot a{color:#ddd6fe;text-decoration:none}.nknm-foot a:hover{color:#fff;text-decoration:underline}'
			. '.nknm-foot-brand{display:flex;align-items:center;gap:10px}'
			. '.nknm-foot-word{font-family:Nunito,system-ui,sans-serif;font-size:21px;font-weight:900;color:#fff}.nknm-foot-word span:last-child{color:#c4b5fd}'
			. '.nknm-footer-links{display:flex;flex-wrap:wrap;gap:8px 22px}'
			. '@media(max-width:600px){.nknm-foot{flex-direction:column;align-items:flex-start;padding:28px 16px}}';
		wp_register_style( 'nknm-site', false, array(), NKNM_VERSION );
		wp_enqueue_style( 'nknm-site' );
		wp_add_inline_style( 'nknm-site', $css );
	},
	20
);
