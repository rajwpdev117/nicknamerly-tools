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
| `[pen_name_generator]` | Pen name generator (genre, gender, starting letter) |
| `[rap_name_generator]` | Rap name generator (style, optional name) |
| `[female_name_generator]` | Female name generator (popularity, first or full, starting letter) |
| `[male_name_generator]` | Male name generator (same options) |
| `[aesthetic_username_generator]` | Aesthetic username generator (aesthetic, format, optional word) |
| `[gamertag_generator]` | Gamertag generator (Xbox and PlayStation length limits) |
| `[discord_username_generator]` | Discord username generator (style, format, optional word; lowercase, Discord-valid characters) |
| `[american_name_generator]` | American name generator (popularity, full/first/middle initial, starting letter; US SSA + Census data) |
| `[elf_name_generator]` | Elf name generator (high, wood, dark, half-elf, Christmas; meanings and pronunciation; invented syllables) |
| `[tiefling_name_generator]` | Tiefling name generator (infernal, virtue, infernal + virtue nickname, blend-in human names; meanings and pronunciation; invented syllables) |
| `[dwarf_name_generator]` | Dwarf name generator (any, mountain, hill, duergar, clan names; meanings and pronunciation; invented syllables) |
| `[dragonborn_name_generator]` | Dragonborn name generator (fire, frost, storm, venom clans; childhood nicknames; meanings and pronunciation; invented syllables) |
| `[drow_name_generator]` | Drow name generator (noble house names, common trade names, surface exiles, house names; meanings and pronunciation; invented syllables) |
| `[vampire_name_generator]` | Vampire name generator (gothic, modern, noble titles, coven names; meanings and pronunciation; invented syllables) |
| `[fake_name_generator]` | Fake name generator (realistic, common, uncommon, short, double surname; middle name or initial; US SSA + Census data; names only) |
| `[discord_server_name_generator]` | Discord server name generator (server type, name shape, optional topic) |
| `[city_name_generator]` | City name generator (setting: fantasy, medieval, sci-fi, modern US-style, dark fantasy; shape: one word, two words, "City of"; starting letter) |
| `[first_name_generator]` | First name generator (popularity, girl/boy/unisex, starting letter; US SSA data) |
| `[roblox_username_generator]` | Roblox username generator (style, format, optional word; 3-20 characters, one underscore at most) |
| `[email_name_generator]` | Email name generator (first and last name, style, format; Gmail-safe local parts) |

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
