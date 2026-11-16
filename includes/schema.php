<?php
/**
 * Structured data for tool pages.
 *
 * Rank Math marks every page as an Article with an author. A generator page is a
 * web application, so on pages that contain a tool shortcode the Article and its
 * author node are removed from Rank Math's graph and a WebApplication node is added.
 * Blog posts are not touched.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Slug of the first registered tool whose shortcode is in the current page, or ''.
 *
 * @return string
 */
function nknm_current_tool_slug() {
	if ( ! is_page() ) {
		return '';
	}
	$post = get_post();
	if ( ! $post || empty( $post->post_content ) ) {
		return '';
	}
	foreach ( nknm_tools() as $slug => $tool ) {
		if ( has_shortcode( $post->post_content, $tool['shortcode'] ) ) {
			return $slug;
		}
	}
	return '';
}

/**
 * Swap Article for WebApplication in Rank Math's JSON-LD on tool pages.
 *
 * @param array $data Rank Math graph nodes, keyed by Rank Math's own names.
 * @return array
 */
function nknm_tool_json_ld( $data ) {
	if ( ! is_array( $data ) || '' === nknm_current_tool_slug() ) {
		return $data;
	}

	$post = get_post();
	$url  = get_permalink( $post );

	// List pages such as "Nicknames for Boyfriend" embed a tool but are articles: leave them alone.
	if ( false === stripos( get_the_title( $post ), 'generator' ) && ! is_front_page() && 'discord-usernames' !== $post->post_name ) {
		return $data;
	}

	foreach ( $data as $key => $node ) {
		if ( ! is_array( $node ) || empty( $node['@type'] ) ) {
			continue;
		}
		$types = (array) $node['@type'];
		if ( array_intersect( $types, array( 'Article', 'BlogPosting', 'NewsArticle', 'Person' ) ) ) {
			unset( $data[ $key ] );
		}
	}

	$description = (string) get_post_meta( $post->ID, 'rank_math_description', true );
	$app         = array(
		'@type'               => 'WebApplication',
		'@id'                 => $url . '#app',
		'name'                => wp_strip_all_tags( get_the_title( $post ) ),
		'url'                 => $url,
		'applicationCategory' => 'UtilitiesApplication',
		'operatingSystem'     => 'Any',
		'browserRequirements' => 'Requires JavaScript',
		'isAccessibleForFree' => true,
		'inLanguage'          => 'en-US',
		'offers'              => array(
			'@type'         => 'Offer',
			'price'         => '0',
			'priceCurrency' => 'USD',
		),
		'publisher'           => array( '@id' => home_url( '/#organization' ) ),
	);
	if ( '' !== $description ) {
		$app['description'] = $description;
	}
	$data['nknmApp'] = $app;

	foreach ( $data as $key => $node ) {
		if ( is_array( $node ) && isset( $node['@type'] ) && in_array( 'WebPage', (array) $node['@type'], true ) ) {
			$data[ $key ]['mainEntity'] = array( '@id' => $url . '#app' );
		}
	}

	return $data;
}
add_filter( 'rank_math/json_ld', 'nknm_tool_json_ld', 99 );
