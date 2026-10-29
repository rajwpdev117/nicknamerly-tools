# Nicknamerly Tools

Lightweight WordPress plugin behind [Nicknamerly.com](https://nicknamerly.com): free nickname, username, random name, last name, ship name, Japanese name and gamertag generators. Each tool is a shortcode, runs in the browser (no tracking, no sign-up) and loads its assets only on pages that use it.

## Tools

| Shortcode | Tool |
|---|---|
| `[nickname_generator]` | Nickname generator |
| `[username_generator]` | Username generator |
| `[random_name_generator]` | Random name generator (up to 1,000 names) |
| `[last_name_generator]` | Last name generator (US and fantasy surnames) |
| `[ship_name_generator]` | Ship name generator (blend two names) |
| `[japanese_name_generator]` | Japanese name generator (romaji, kanji and meaning) |
| `[character_name_generator]` | Character name generator (genre, gender, starting letter) |
| `[band_name_generator]` | Band name generator (genre, optional word) |
| `[superhero_name_generator]` | Superhero name generator (power type, style, optional word) |
| `[gamertag_generator]` | Gamertag generator (Xbox and PlayStation length limits) |

## Install

Download `nicknamerly-tools.zip` from the [latest release](https://github.com/rajwpdev117/nicknamerly-tools/releases/latest) and upload it under Plugins > Add New > Upload Plugin. After that, updates arrive on their own through Dashboard > Updates.

## Releasing (automatic)

1. Bump `Version:` in `nicknamerly-tools.php` and `NKNM_VERSION`.
2. Push to `main`.
3. The GitHub Action tags `vX.Y.Z`, builds the zip and publishes the release. WordPress picks it up within about 12 hours (or click "Check for updates").

Built with [Plugin Update Checker](https://github.com/YahnisElsts/plugin-update-checker) (MIT), bundled in `lib/`.

## Data sources

Name data comes from US Social Security Administration baby names and US Census 2010 surnames (public domain).

## License

GPL-2.0-or-later.
