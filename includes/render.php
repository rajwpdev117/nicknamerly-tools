<?php
/**
 * Shared tool markup.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Render a tool.
 *
 * Shortcode attributes:
 *   count  Number of names per batch (6–60, default 20).
 *   style  Pre-selected style value (must exist in the tool's styles).
 *
 * @param string $slug Tool slug.
 * @param array  $atts Shortcode attributes.
 * @return string
 */
function nknm_render_tool( $slug, $atts ) {
	$tools = nknm_tools();
	if ( empty( $tools[ $slug ] ) ) {
		return '';
	}
	$tool = $tools[ $slug ];

	$atts  = shortcode_atts(
		array(
			'count' => 20,
			'style' => '',
		),
		$atts,
		$tool['shortcode']
	);
	$count = max( 6, min( 200, absint( $atts['count'] ) ) );
	$style = isset( $tool['styles'][ $atts['style'] ] ) ? $atts['style'] : (string) key( $tool['styles'] );

	nknm_enqueue_tool( $slug );

	static $instance = 0;
	$instance++;
	$id = 'nknm-' . $slug . '-' . $instance;

	$examples = array_slice( $tool['examples'], 0, $count );

	// Styles (3-8) show as one-tap chips; the select stays in the DOM (hidden) as the value holder.
	$chips = $tool['styles'] && count( $tool['styles'] ) >= 3 && count( $tool['styles'] ) <= 8;
	$cols  = max( 1, (int) (bool) $tool['name_input'] + (int) (bool) $tool['name2_label'] + (int) (bool) $tool['genders'] + (int) (bool) $tool['counts'] );

	ob_start();
	?>
	<div class="nknm-tool<?php echo $chips ? ' nknm-tool--chips' : ''; ?><?php echo ( $tool['genders'] || $tool['counts'] || $tool['name2_label'] ) ? ' nknm-tool--wide' : ''; ?><?php echo $tool['rich'] ? ' nknm-tool--rich' : ''; ?>" id="<?php echo esc_attr( $id ); ?>"<?php echo $chips ? ' style="--nknm-cols:' . (int) $cols . '"' : ''; ?> data-nknm-tool="<?php echo esc_attr( $slug ); ?>" data-nknm-count="<?php echo esc_attr( (string) $count ); ?>" data-nknm-variants="<?php echo $tool['variants'] ? '1' : '0'; ?>">
		<form class="nknm-form" novalidate>
			<?php if ( $tool['name_input'] ) : ?>
				<div class="nknm-field nknm-field--name">
					<label for="<?php echo esc_attr( $id ); ?>-name"><?php echo esc_html( $tool['name_label'] ); ?></label>
					<input type="text" id="<?php echo esc_attr( $id ); ?>-name" name="nknm_name" maxlength="30" autocomplete="off" spellcheck="false" placeholder="<?php echo esc_attr( $tool['name_placeholder'] ); ?>">
				</div>
			<?php endif; ?>
			<?php if ( $tool['name2_label'] ) : ?>
				<div class="nknm-field nknm-field--name2">
					<label for="<?php echo esc_attr( $id ); ?>-name2"><?php echo esc_html( $tool['name2_label'] ); ?></label>
					<input type="text" id="<?php echo esc_attr( $id ); ?>-name2" name="nknm_name2" maxlength="30" autocomplete="off" spellcheck="false" placeholder="<?php echo esc_attr( $tool['name2_placeholder'] ); ?>">
				</div>
			<?php endif; ?>
			<?php if ( $tool['styles'] && $chips ) : ?>
				<div class="nknm-field nknm-field--style nknm-field--chips">
					<span class="nknm-label" id="<?php echo esc_attr( $id ); ?>-style-label"><?php echo esc_html( $tool['style_label'] ); ?></span>
					<div class="nknm-styles" role="group" aria-labelledby="<?php echo esc_attr( $id ); ?>-style-label">
						<?php foreach ( $tool['styles'] as $value => $label ) : ?>
							<button type="button" class="nknm-style<?php echo $style === (string) $value ? ' is-on' : ''; ?>" data-nknm-style="<?php echo esc_attr( $value ); ?>" aria-pressed="<?php echo $style === (string) $value ? 'true' : 'false'; ?>"><?php echo esc_html( $label ); ?></button>
						<?php endforeach; ?>
					</div>
					<select name="nknm_style" class="nknm-sr-only" tabindex="-1" aria-hidden="true">
						<?php foreach ( $tool['styles'] as $value => $label ) : ?>
							<option value="<?php echo esc_attr( $value ); ?>" <?php selected( $style, $value ); ?>><?php echo esc_html( $label ); ?></option>
						<?php endforeach; ?>
					</select>
				</div>
			<?php elseif ( $tool['styles'] ) : ?>
				<div class="nknm-field nknm-field--style">
					<label for="<?php echo esc_attr( $id ); ?>-style"><?php echo esc_html( $tool['style_label'] ); ?></label>
					<select id="<?php echo esc_attr( $id ); ?>-style" name="nknm_style">
						<?php foreach ( $tool['styles'] as $value => $label ) : ?>
							<option value="<?php echo esc_attr( $value ); ?>" <?php selected( $style, $value ); ?>><?php echo esc_html( $label ); ?></option>
						<?php endforeach; ?>
					</select>
				</div>
			<?php endif; ?>
			<?php if ( $tool['genders'] ) : ?>
				<div class="nknm-field nknm-field--gender">
					<label for="<?php echo esc_attr( $id ); ?>-gender"><?php echo esc_html( $tool['genders_label'] ? $tool['genders_label'] : __( 'Gender', 'nicknamerly-tools' ) ); ?></label>
					<select id="<?php echo esc_attr( $id ); ?>-gender" name="nknm_gender">
						<?php foreach ( $tool['genders'] as $value => $label ) : ?>
							<option value="<?php echo esc_attr( $value ); ?>"><?php echo esc_html( $label ); ?></option>
						<?php endforeach; ?>
					</select>
				</div>
			<?php endif; ?>
			<?php if ( $tool['counts'] ) : ?>
				<div class="nknm-field nknm-field--count">
					<label for="<?php echo esc_attr( $id ); ?>-count"><?php esc_html_e( 'How many', 'nicknamerly-tools' ); ?></label>
					<select id="<?php echo esc_attr( $id ); ?>-count" name="nknm_count">
						<?php foreach ( $tool['counts'] as $c ) : ?>
							<option value="<?php echo esc_attr( (string) $c ); ?>" <?php selected( $count, $c ); ?>><?php echo esc_html( number_format_i18n( $c ) ); ?></option>
						<?php endforeach; ?>
					</select>
				</div>
			<?php endif; ?>
			<button type="submit" class="nknm-btn nknm-btn--primary"><?php echo esc_html( $tool['label'] ); ?></button>
		</form>

		<div class="nknm-results" role="region" aria-label="<?php esc_attr_e( 'Generated names', 'nicknamerly-tools' ); ?>">
			<ul class="nknm-grid" aria-live="polite">
				<?php foreach ( $examples as $name ) : ?>
					<?php if ( is_array( $name ) ) : ?>
					<li class="nknm-item nknm-item--rich">
						<div class="nknm-rich">
							<span class="nknm-name-text"><?php echo esc_html( $name[0] ); ?></span>
							<button type="button" class="nknm-kanji" data-nknm-copy="<?php echo esc_attr( $name[1] ); ?>" aria-label="<?php echo esc_attr( sprintf( /* translators: %s: name */ __( 'Copy %s', 'nicknamerly-tools' ), $name[1] ) ); ?>"><?php echo esc_html( $name[1] ); ?></button>
							<span class="nknm-meaning"><?php echo esc_html( $name[2] ); ?></span>
						</div>
						<button type="button" class="nknm-copy" data-nknm-copy="<?php echo esc_attr( $name[0] ); ?>" aria-label="<?php echo esc_attr( sprintf( /* translators: %s: name */ __( 'Copy %s', 'nicknamerly-tools' ), $name[0] ) ); ?>"><?php esc_html_e( 'Copy', 'nicknamerly-tools' ); ?></button>
					</li>
					<?php continue; ?>
					<?php endif; ?>
					<li class="nknm-item">
						<?php if ( $tool['variants'] ) : ?>
							<button type="button" class="nknm-name" aria-expanded="false"><span class="nknm-name-text"><?php echo esc_html( $name ); ?></span></button>
						<?php else : ?>
							<span class="nknm-name"><span class="nknm-name-text"><?php echo esc_html( $name ); ?></span></span>
						<?php endif; ?>
						<button type="button" class="nknm-copy" data-nknm-copy="<?php echo esc_attr( $name ); ?>" aria-label="<?php echo esc_attr( sprintf( /* translators: %s: name */ __( 'Copy %s', 'nicknamerly-tools' ), $name ) ); ?>"><?php esc_html_e( 'Copy', 'nicknamerly-tools' ); ?></button>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>

		<?php if ( $tool['variants'] ) : ?>
			<p class="nknm-hint"><?php esc_html_e( 'Tip: tap any name to see username styles like night_viper and N1ghtV1per.', 'nicknamerly-tools' ); ?></p>
		<?php endif; ?>

		<div class="nknm-actions">
			<button type="button" class="nknm-btn nknm-btn--ghost" data-nknm-more><?php esc_html_e( 'Generate more', 'nicknamerly-tools' ); ?></button>
			<?php if ( $tool['bulk'] ) : ?>
				<button type="button" class="nknm-btn nknm-btn--ghost" data-nknm-copyall><?php esc_html_e( 'Copy all', 'nicknamerly-tools' ); ?></button>
				<button type="button" class="nknm-btn nknm-btn--ghost" data-nknm-download><?php esc_html_e( 'Download .txt', 'nicknamerly-tools' ); ?></button>
			<?php endif; ?>
		</div>
		<div class="nknm-tray" data-nknm-tray hidden>
			<div class="nknm-tray-head">
				<h3 class="nknm-tray-title"><?php esc_html_e( 'Your kept names', 'nicknamerly-tools' ); ?> <span class="nknm-tray-count" data-nknm-tray-count></span></h3>
				<div class="nknm-tray-actions">
					<button type="button" class="nknm-link" data-nknm-tray-copy><?php esc_html_e( 'Copy all', 'nicknamerly-tools' ); ?></button>
					<button type="button" class="nknm-link" data-nknm-tray-clear><?php esc_html_e( 'Clear', 'nicknamerly-tools' ); ?></button>
				</div>
			</div>
			<ul class="nknm-chips nknm-tray-list" data-nknm-tray-list></ul>
			<p class="nknm-tray-note"><?php esc_html_e( 'Saved only in this browser. Tap a name to copy it.', 'nicknamerly-tools' ); ?></p>
		</div>
		<p class="nknm-sr-only" role="status" aria-live="polite" data-nknm-status></p>
	</div>
	<?php
	return trim( (string) ob_get_clean() );
}
