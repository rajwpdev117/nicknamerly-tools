<?php
/**
 * Blog design: single posts (hero, contents list, numbered tips, related tools),
 * the [nknm_blog] listing page and the small in-article username generator.
 * Works with GeneratePress; each hook is a no-op elsewhere.
 */

defined( 'ABSPATH' ) || exit;

/** Is this a single blog post? */
function nknm_is_blog_post() {
	return is_singular( 'post' );
}

/** Is this a page that contains the [nknm_blog] listing? */
function nknm_is_blog_page() {
	if ( ! is_page() ) {
		return false;
	}
	$post = get_post();
	return $post && has_shortcode( $post->post_content, 'nknm_blog' );
}

/** Body classes: reuse "nknm-front" so the generic page padding rules step aside. */
add_filter(
	'body_class',
	function ( $classes ) {
		if ( nknm_is_blog_post() ) {
			$classes[] = 'nknm-front';
			$classes[] = 'nknm-post';
		} elseif ( nknm_is_blog_page() ) {
			$classes[] = 'nknm-front';
			$classes[] = 'nknm-blogpage';
		}
		return $classes;
	}
);

/** The hero prints its own H1, so hide the theme's title on these pages. */
add_filter(
	'generate_show_title',
	function ( $show ) {
		return ( nknm_is_blog_post() || nknm_is_blog_page() ) ? false : $show;
	},
	20
);

/** Assets. */
add_action(
	'wp_enqueue_scripts',
	function () {
		if ( ! nknm_is_blog_post() && ! nknm_is_blog_page() ) {
			return;
		}
		wp_enqueue_style( 'nknm-blog', NKNM_URL . 'assets/css/nknm-blog.css', array(), NKNM_VERSION );
		if ( nknm_is_blog_post() ) {
			wp_enqueue_script( 'nknm-blog', NKNM_URL . 'assets/js/nknm-blog.js', array(), NKNM_VERSION, array( 'in_footer' => true, 'strategy' => 'defer' ) );
		}
	},
	30
);

/** Reading time in minutes. */
function nknm_read_minutes( $html ) {
	$words = str_word_count( wp_strip_all_tags( $html ) );
	return max( 1, (int) ceil( $words / 220 ) );
}

/** Short description: Rank Math description, else the first words of the post (never get_the_excerpt: it re-runs the_content). */
function nknm_post_desc( $post ) {
	$d = get_post_meta( $post->ID, 'rank_math_description', true );
	if ( $d ) {
		return $d;
	}
	return wp_trim_words( wp_strip_all_tags( strip_shortcodes( $post->post_content ) ), 30 );
}

/** First category of a post as array( name, url ), or null. */
function nknm_post_category( $post_id ) {
	$cats = get_the_category( $post_id );
	if ( ! $cats ) {
		return null;
	}
	return array( $cats[0]->name, get_category_link( $cats[0]->term_id ) );
}

/** Tool cards used in "Keep going" by post slug; falls back to the first entry. */
function nknm_related_tools( $slug ) {
	$all = array(
		'username'  => array( 'username-generator', 'Username Generator', 'Fresh handle ideas for any platform.', '@' ),
		'aesthetic' => array( 'aesthetic-username-generator', 'Aesthetic Usernames', 'Soft, dark, Y2K and cottagecore styles.', '*' ),
		'gamertag'  => array( 'gamertag-generator', 'Gamertag Generator', 'Names for Xbox, PlayStation and Steam.', 'G' ),
		'pen'       => array( 'pen-name-generator', 'Pen Name Generator', 'Author names by genre.', 'P' ),
		'female'    => array( 'female-name-generator', 'Female Name Generator', 'Random first and full names.', 'F' ),
		'male'      => array( 'male-name-generator', 'Male Name Generator', 'Random first and full names.', 'M' ),
		'lastname'  => array( 'last-name-generator', 'Last Name Generator', 'American and fantasy surnames.', 'L' ),
		'band'      => array( 'band-name-generator', 'Band Name Generator', 'Names for rock, metal, punk and more.', 'B' ),
		'rap'       => array( 'rap-name-generator', 'Rap Name Generator', 'Stage names in every style.', 'R' ),
		'nickname'  => array( '', 'Nickname Generator', 'Cool and funny nicknames.', 'N' ),
	);
	$map = array(
		'how-to-choose-a-good-username' => array( 'username', 'aesthetic', 'gamertag' ),
		'how-to-choose-a-pen-name'      => array( 'pen', 'female', 'lastname' ),
		'how-to-name-a-band'            => array( 'band', 'rap', 'username' ),
	);
	$keys = isset( $map[ $slug ] ) ? $map[ $slug ] : array( 'nickname', 'username', 'gamertag' );
	$out  = array();
	foreach ( $keys as $k ) {
		$out[] = $all[ $k ];
	}
	return $out;
}

/** Decorative sample names in the hero, by post slug. */
function nknm_hero_chips( $slug ) {
	$map = array(
		'how-to-choose-a-good-username' => array( 'mint.orbit', 'ember_moss', 'lumen42', 'fable.willow' ),
		'how-to-choose-a-pen-name'      => array( 'J. R. Hale', 'Mara Quill', 'Wren Ashby', 'E. L. Rowan' ),
		'how-to-name-a-band'            => array( 'The Quiet Hours', 'Static Bloom', 'Paper Tigers', 'Low Tide Club' ),
	);
	return isset( $map[ $slug ] ) ? $map[ $slug ] : array( 'bright.fox', 'Luna Vale', 'northwind', 'Pixel Moth' );
}

/**
 * Wrap single posts: hero, contents list, numbered tips, related tools.
 */
add_filter(
	'the_content',
	function ( $content ) {
		if ( ! nknm_is_blog_post() || ! in_the_loop() || ! is_main_query() ) {
			return $content;
		}
		$post    = get_post();
		$slug    = $post->post_name;
		$minutes = nknm_read_minutes( $content );
		$cat     = nknm_post_category( $post->ID );

		// Headings: ids for the contents list, numbered tips.
		$toc  = array();
		$used = array();
		$body = preg_replace_callback(
			'#<h2([^>]*)>(.*?)</h2>#is',
			function ( $m ) use ( &$toc, &$used ) {
				$text = trim( wp_strip_all_tags( $m[2] ) );
				$id   = sanitize_title( $text );
				if ( '' === $id ) {
					$id = 'section';
				}
				$base = $id;
				$i    = 2;
				while ( isset( $used[ $id ] ) ) {
					$id = $base . '-' . $i++;
				}
				$used[ $id ] = true;
				$toc[]       = array( $id, $text );
				if ( preg_match( '/^(?:Step\s+)?(\d+)[.:]\s*(.+)$/i', $text, $n ) ) {
					return '<h2 id="' . esc_attr( $id ) . '" class="nkb-tip"><span class="nkb-num" aria-hidden="true">' . (int) $n[1] . '</span><span class="nkb-tip-text">' . esc_html( $n[2] ) . '</span></h2>';
				}
				return '<h2 id="' . esc_attr( $id ) . '"' . $m[1] . '>' . $m[2] . '</h2>';
			},
			$content
		);

		// Hero.
		$sub = nknm_post_desc( $post );
		$chips = '';
		$tilt  = array( -5, 4, 3, -4 );
		$style = array( 'nkb-chip-w', 'nkb-chip-p', 'nkb-chip-w', 'nkb-chip-s' );
		foreach ( nknm_hero_chips( $slug ) as $i => $label ) {
			$chips .= '<span class="nkb-chip ' . esc_attr( $style[ $i % 4 ] ) . ' nkb-c' . (int) $i . '" style="--r:' . (int) $tilt[ $i % 4 ] . 'deg">' . esc_html( $label ) . '</span>';
		}
		$hero  = '<div class="nkb-bar" aria-hidden="true"><span></span></div>';
		$hero .= '<header class="nkb-hero"><div class="nkb-deco" aria-hidden="true">' . $chips . '</div><div class="nkb-wrap"><div class="nkb-hero-in">';
		$hero .= '<div class="nkb-meta">';
		if ( $cat ) {
			$hero .= '<a class="nkb-pill" href="' . esc_url( $cat[1] ) . '">' . esc_html( $cat[0] ) . '</a>';
		}
		$hero .= '<span class="nkb-meta-i"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' . (int) $minutes . ' min read</span>';
		$hero .= '<span class="nkb-meta-i">Updated ' . esc_html( get_the_modified_date( 'M j, Y', $post ) ) . '</span></div>';
		$hero .= '<h1 class="nkb-title">' . esc_html( get_the_title( $post ) ) . '</h1>';
		if ( $sub ) {
			$hero .= '<p class="nkb-sub">' . esc_html( $sub ) . '</p>';
		}
		$hero .= '</div></div></header>';

		// Contents list.
		$aside = '';
		if ( count( $toc ) >= 3 ) {
			$aside  = '<aside class="nkb-toc" aria-label="' . esc_attr__( 'In this guide', 'nicknamerly-tools' ) . '"><div class="nkb-toc-box"><div class="nkb-toc-h">' . esc_html__( 'In this guide', 'nicknamerly-tools' ) . '</div><ol>';
			foreach ( $toc as $t ) {
				$label  = preg_replace( '/^(?:Step\s+)?\d+[.:]\s*/i', '', $t[1] );
				$aside .= '<li><a href="#' . esc_attr( $t[0] ) . '">' . esc_html( $label ) . '</a></li>';
			}
			$aside .= '</ol></div></aside>';
		}

		// Related tools.
		$cards = '';
		foreach ( nknm_related_tools( $slug ) as $t ) {
			$url    = $t[0] ? home_url( '/' . $t[0] . '/' ) : home_url( '/' );
			$cards .= '<a class="nkb-card" href="' . esc_url( $url ) . '"><span class="nkb-ico" aria-hidden="true">' . esc_html( $t[3] ) . '</span><span class="nkb-card-t">' . esc_html( $t[1] ) . '</span><span class="nkb-card-d">' . esc_html( $t[2] ) . '</span></a>';
		}
		$related = '<section class="nkb-related"><div class="nkb-wrap"><h2 class="nkb-related-h">' . esc_html__( 'Keep going with these generators', 'nicknamerly-tools' ) . '</h2><div class="nkb-cards">' . $cards . '</div></div></section>';

		return $hero . '<div class="nkb-wrap nkb-layout">' . $aside . '<div class="nkb-article">' . $body . '</div></div>' . $related;
	},
	20
);

/** [nknm_mini_username]: small username generator for articles. */
add_action(
	'init',
	function () {
		add_shortcode(
			'nknm_mini_username',
			function () {
				$a = array( 'mint', 'fable', 'pixel', 'cedar', 'ember', 'lumen', 'misty', 'otter' );
				$b = array( 'orbit', 'drift', 'bloom', 'echo', 'harbor', 'spark', 'willow', 'moss' );
				$items = '';
				for ( $i = 0; $i < 6; $i++ ) {
					$x    = $a[ ( $i * 2 ) % 8 ];
					$y    = $b[ ( $i * 3 + 1 ) % 8 ];
					$text = $x . '.' . $y;
					if ( 1 === $i % 3 ) {
						$text = $x . '_' . $y;
					}
					if ( 2 === $i % 3 ) {
						$text = $x . $y . ( 10 + $i * 13 );
					}
					$items .= '<span class="nkb-name"><span class="nkb-name-t">' . esc_html( $text ) . '</span><button type="button" class="nkb-heart" aria-pressed="false" aria-label="' . esc_attr__( 'Save this username', 'nicknamerly-tools' ) . '"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.1C.8 8.4 2.7 5 6 5c2 0 3.3 1 4 2.2h4C14.700 6 16 5 18 5c3.300 0 5.200 3.400 3.600 6.900C19.500 16.400 12 21 12 21z"/></svg></button></span>';
				}
				return '<section class="nkb-mini" data-nkb-mini><div class="nkb-mini-top"><div class="nkb-mini-h">' . esc_html__( 'Try it: 6 fresh usernames', 'nicknamerly-tools' ) . '</div><span class="nkb-mini-badge">' . esc_html__( 'FREE · NO SIGN-UP', 'nicknamerly-tools' ) . '</span></div>'
					. '<p class="nkb-mini-p">' . esc_html__( 'Tap generate for a new set. Tap the heart to keep the ones you like.', 'nicknamerly-tools' ) . '</p>'
					. '<div class="nkb-names" aria-live="polite">' . $items . '</div>'
					. '<div class="nkb-mini-row"><button type="button" class="nkb-mini-btn" data-nkb-gen>' . esc_html__( 'Generate again', 'nicknamerly-tools' ) . '</button>'
					. '<a class="nkb-mini-link" href="' . esc_url( home_url( '/username-generator/' ) ) . '">' . esc_html__( 'Open the full username generator', 'nicknamerly-tools' ) . '</a></div></section>';
			}
		);

		add_shortcode(
			'nknm_blog',
			function () {
				$sticky   = get_option( 'sticky_posts' );
				$featured = null;
				if ( $sticky ) {
					$q = new WP_Query( array( 'post__in' => $sticky, 'posts_per_page' => 1, 'ignore_sticky_posts' => true, 'post_status' => 'publish', 'no_found_rows' => true ) );
					if ( $q->have_posts() ) {
						$featured = $q->posts[0];
					}
					wp_reset_postdata();
				}
				$args = array( 'post_type' => 'post', 'post_status' => 'publish', 'posts_per_page' => 24, 'ignore_sticky_posts' => true, 'no_found_rows' => true );
				$all  = get_posts( $args );
				if ( ! $featured && $all ) {
					$featured = $all[0];
				}
				$rest = array();
				foreach ( $all as $p ) {
					if ( ! $featured || $p->ID !== $featured->ID ) {
						$rest[] = $p;
					}
				}

				$pills = '<a class="nkb-fpill is-on" href="' . esc_url( get_permalink() ) . '">' . esc_html__( 'All', 'nicknamerly-tools' ) . '</a>';
				foreach ( get_categories( array( 'hide_empty' => true ) ) as $c ) {
					if ( 'uncategorized' === $c->slug ) {
						continue;
					}
					$pills .= '<a class="nkb-fpill" href="' . esc_url( get_category_link( $c->term_id ) ) . '">' . esc_html( $c->name ) . '</a>';
				}

				$out  = '<section class="nkb-bhero"><div class="nkb-wrap"><div class="nkb-eyebrow">' . esc_html__( 'THE NICKNAMERLY BLOG', 'nicknamerly-tools' ) . '</div>';
				$out .= '<h1 class="nkb-btitle">' . esc_html__( 'Name ideas,', 'nicknamerly-tools' ) . ' <span>' . esc_html__( 'and how to choose', 'nicknamerly-tools' ) . '</span> ' . esc_html__( 'the right one', 'nicknamerly-tools' ) . '</h1>';
				$out .= '<p class="nkb-bsub">' . esc_html__( 'Practical guides for picking usernames, pen names, band names and more. Every guide links to a free generator you can try right away.', 'nicknamerly-tools' ) . '</p>';
				$out .= '<div class="nkb-fpills">' . $pills . '</div></div></section>';

				if ( $featured ) {
					$img  = get_the_post_thumbnail( $featured, 'large', array( 'class' => 'nkb-feat-img', 'loading' => 'eager', 'alt' => '' ) );
					$cat  = nknm_post_category( $featured->ID );
					$desc = nknm_post_desc( $featured );
					$out .= '<section class="nkb-sec"><div class="nkb-wrap"><a class="nkb-feat" href="' . esc_url( get_permalink( $featured ) ) . '"><span class="nkb-feat-media">' . $img . '</span><span class="nkb-feat-body"><span class="nkb-feat-tag">' . esc_html__( 'FEATURED GUIDE', 'nicknamerly-tools' ) . '</span><span class="nkb-feat-t">' . esc_html( get_the_title( $featured ) ) . '</span><span class="nkb-feat-d">' . esc_html( $desc ) . '</span><span class="nkb-feat-go">' . esc_html__( 'Read the guide', 'nicknamerly-tools' ) . ' &rarr;</span></span></a></div></section>';
					unset( $cat );
				}

				$out .= '<section class="nkb-sec nkb-sec-grid"><div class="nkb-wrap"><h2 class="nkb-grid-h">' . esc_html__( 'Latest guides', 'nicknamerly-tools' ) . '</h2><div class="nkb-grid">';
				foreach ( $rest as $p ) {
					$thumb = get_the_post_thumbnail( $p, 'medium_large', array( 'class' => 'nkb-gimg', 'loading' => 'lazy', 'alt' => '' ) );
					$cat   = nknm_post_category( $p->ID );
					$desc  = nknm_post_desc( $p );
					$out .= '<a class="nkb-gcard" href="' . esc_url( get_permalink( $p ) ) . '"><span class="nkb-gmedia">' . $thumb . '</span><span class="nkb-gbody">';
					if ( $cat ) {
						$out .= '<span class="nkb-gtag">' . esc_html( $cat[0] ) . '</span>';
					}
					$out .= '<span class="nkb-gt">' . esc_html( get_the_title( $p ) ) . '</span><span class="nkb-gd">' . esc_html( wp_trim_words( $desc, 22 ) ) . '</span><span class="nkb-gmeta">' . (int) nknm_read_minutes( $p->post_content ) . ' ' . esc_html__( 'min read', 'nicknamerly-tools' ) . '</span></span></a>';
				}
				$out .= '<div class="nkb-soon"><span class="nkb-soon-tag">' . esc_html__( 'COMING SOON', 'nicknamerly-tools' ) . '</span><span class="nkb-gt">' . esc_html__( 'More guides on the way', 'nicknamerly-tools' ) . '</span><span class="nkb-gd">' . esc_html__( 'Rap names, Discord usernames and more. In the meantime, try a generator.', 'nicknamerly-tools' ) . '</span><a class="nkb-soon-btn" href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Open a generator', 'nicknamerly-tools' ) . '</a></div>';
				$out .= '</div></div></section>';

				$out .= '<section class="nkb-cta"><div class="nkb-wrap nkb-cta-in"><div><div class="nkb-cta-t">' . esc_html__( 'Need a name right now?', 'nicknamerly-tools' ) . '</div><div class="nkb-cta-d">' . esc_html__( 'Nicknames, usernames, gamertags, band names, pen names and more. Free, instant, no sign-up.', 'nicknamerly-tools' ) . '</div></div><a class="nkb-cta-btn" href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Try the generators', 'nicknamerly-tools' ) . ' &rarr;</a></div></section>';
				return $out;
			}
		);
	}
);
