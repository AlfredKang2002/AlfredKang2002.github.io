# Third-party notices

## Current visual reference

The owner selected [Yufan Zhang's personal homepage](https://yufanzzz.github.io/) as a visual reference on October 24, 2026. The current HTML and CSS independently implement a fixed profile sidebar, a wide content area, restrained section headings and thin dividers. A subsequent owner request changes the palette to white/navy, makes section titles uniform, and adds academic service, honors and profile icons. The reference owner's text, photographs, articles, scripts and CSS have not been copied into this website. At the owner's request on October 25, 2026, the visible design-reference footer link was removed; this source record is retained.

## Earlier template

The preceding website version adapted the [Minimal Light](https://github.com/yaoyao-liu/minimal-light) academic homepage template by Yaoyao Liu. Its vendored stylesheet and license remain in the repository for provenance; the current page does not load the vendor stylesheet.

- Pinned upstream commit: `dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c`.
- Earlier HTML source: [`html_source_file/index.html`](https://github.com/yaoyao-liu/minimal-light/blob/dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c/html_source_file/index.html), formerly adapted into `index.html`.
- CSS source: [`html_source_file/assets/css/style-no-dark-mode.css`](https://github.com/yaoyao-liu/minimal-light/blob/dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c/html_source_file/assets/css/style-no-dark-mode.css), copied into `assets/vendor/minimal-light.css` with only Google Fonts `@import` lines removed.
- License: [CC0 1.0 Universal, upstream `LICENSE`](https://github.com/yaoyao-liu/minimal-light/blob/dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c/LICENSE). The full text is included at [`assets/vendor/minimal-light-LICENSE.txt`](assets/vendor/minimal-light-LICENSE.txt).

Existing English/Chinese content and language switching, local image assets, image-source records and publication metadata are preserved. The current page uses system fonts and local scripts/styles, with no external fonts, icon libraries, analytics or demonstration CV. Four original inline SVG icons represent the owner's email, Google Scholar, ORCID and LinkedIn links. These links were directly supplied by the owner; the icons do not require image assets, external scripts or a font service.

The portrait is supplied by the website owner and is not an upstream template asset. Its published copy, `assets/portrait.png` (177 × 151 pixels), removes only the original's bottom caption without retouching. The original is kept outside the public site at `../output/homepage-qa/portrait-original.png`.

The four collages in `assets/research/` come from the owner's annotation attachments, presentations, published papers and local research outputs. They are separate from the CC0 template assets. Their sources, complete-panel crops and proportional composition are documented in `docs/research-image-sources.md`. The original scientific plots, legends and color scales are retained. No generative editing or retouching was applied.

The five photographs in `assets/life/` were supplied directly by the owner on October 25, 2026, together with their caption subjects. They show graduation at Central South University in 2024, two views from a hike in Changping Valley in Sichuan, the owner's laboratory, and attending an Arsenal match in Hong Kong. The published copies preserve complete frames, apply orientation information, use a maximum long edge of 1600 pixels, and omit metadata. No generative editing or retouching was applied.

## Profile link icons

The owner requested restoration of the earlier monochrome inline SVGs after the color-icon revision. The four original SVGs are restored from commit `3b35b63`, with the same profile destinations and localized accessible labels. The unused color graphics and associated license files have been removed from public assets.
