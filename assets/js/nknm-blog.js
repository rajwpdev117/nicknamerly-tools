/* Nicknamerly blog: reading progress, contents highlight, small username generator. */
( function () {
	'use strict';

	// Reading progress bar.
	var bar = document.querySelector( '.nkb-bar span' );
	var art = document.querySelector( '.nkb-article' );
	function progress() {
		if ( ! bar || ! art ) {
			return;
		}
		var r = art.getBoundingClientRect();
		var total = r.height - window.innerHeight * 0.6;
		var done = Math.min( Math.max( -r.top + window.innerHeight * 0.2, 0 ), total );
		bar.style.width = ( total > 0 ? ( done / total ) * 100 : 100 ) + '%';
	}
	window.addEventListener( 'scroll', progress, { passive: true } );
	window.addEventListener( 'resize', progress );
	progress();

	// Highlight the contents link of the section being read.
	var links = [].slice.call( document.querySelectorAll( '.nkb-toc a' ) );
	if ( links.length && 'IntersectionObserver' in window ) {
		var map = {};
		links.forEach( function ( a ) {
			map[ a.getAttribute( 'href' ).slice( 1 ) ] = a;
		} );
		var io = new IntersectionObserver( function ( entries ) {
			entries.forEach( function ( e ) {
				if ( e.isIntersecting && map[ e.target.id ] ) {
					links.forEach( function ( a ) {
						a.classList.remove( 'is-on' );
					} );
					map[ e.target.id ].classList.add( 'is-on' );
				}
			} );
		}, { rootMargin: '0px 0px -65% 0px' } );
		Object.keys( map ).forEach( function ( id ) {
			var el = document.getElementById( id );
			if ( el ) {
				io.observe( el );
			}
		} );
	}

	// Small username generator.
	var A = [ 'mint', 'fable', 'pixel', 'cedar', 'ember', 'lumen', 'misty', 'otter', 'velvet', 'comet', 'maple', 'juno', 'nova', 'river', 'cloud', 'amber' ];
	var B = [ 'orbit', 'drift', 'bloom', 'echo', 'harbor', 'spark', 'willow', 'moss', 'wave', 'fox', 'lark', 'quill', 'haze', 'tide', 'glow', 'pine' ];
	function pick( list ) {
		return list[ Math.floor( Math.random() * list.length ) ];
	}
	function make( i ) {
		var a = pick( A );
		var b = pick( B );
		if ( i % 3 === 1 ) {
			return a + '_' + b;
		}
		if ( i % 3 === 2 ) {
			return a + b + ( 10 + Math.floor( Math.random() * 90 ) );
		}
		return a + '.' + b;
	}
	[].slice.call( document.querySelectorAll( '[data-nkb-mini]' ) ).forEach( function ( box ) {
		var list = box.querySelector( '.nkb-names' );
		var gen = box.querySelector( '[data-nkb-gen]' );
		list.addEventListener( 'click', function ( e ) {
			var btn = e.target.closest ? e.target.closest( '.nkb-heart' ) : null;
			if ( ! btn ) {
				return;
			}
			btn.setAttribute( 'aria-pressed', btn.getAttribute( 'aria-pressed' ) === 'true' ? 'false' : 'true' );
		} );
		if ( gen ) {
			gen.addEventListener( 'click', function () {
				var kept = [].slice.call( list.querySelectorAll( '.nkb-name' ) ).filter( function ( n ) {
					return n.querySelector( '.nkb-heart' ).getAttribute( 'aria-pressed' ) === 'true';
				} );
				var count = list.querySelectorAll( '.nkb-name' ).length;
				var html = '';
				for ( var i = 0; i < count - kept.length; i++ ) {
					var t = make( i );
					html += '<span class="nkb-name"><span class="nkb-name-t">' + t + '</span><button type="button" class="nkb-heart" aria-pressed="false" aria-label="Save this username"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.1C.8 8.4 2.7 5 6 5c2 0 3.3 1 4 2.2h4C14.700 6 16 5 18 5c3.300 0 5.200 3.400 3.600 6.900C19.500 16.400 12 21 12 21z"/></svg></button></span>';
				}
				list.innerHTML = '';
				kept.forEach( function ( k ) {
					list.appendChild( k );
				} );
				list.insertAdjacentHTML( 'beforeend', html );
			} );
		}
	} );
}() );
