# Project Guide — Claire Smith Media Creator

## Entry points
- `index.html`: single-page portfolio and contact interface.
- `css/styles.css`: responsive layout, colour tokens, typography, focus states and mobile navigation styles.
- `js/main.js`: mobile menu, Facebook URL consistency, enquiry form email fallback and footer year.
- `404.html`: custom not-found page for static hosts.
- `assets/logo/claire-smith-logo.jpg`: supplied original brand logo (preserved unchanged).
- `assets/images/cinematic-media-studio.webp`: original generated hero visual, optimized for the web.
- `assets/qr/`: PNG and SVG Facebook QR codes.
- `assets/icons/`: favicon files.
- `docs/`: deployment guidance.
- `tests/`: QA notes.

## Technology
Plain HTML5, CSS and vanilla JavaScript. No package manager, build tool or runtime dependencies are required.

## Updating the site
1. Edit text and section content in `index.html`.
2. Update visual styling in `css/styles.css`.
3. Update navigation or form behavior in `js/main.js`.
4. Keep asset paths relative to the project root and use descriptive alt text for meaningful images.
5. Verify every changed local path and run the checks listed in `tests/QA_REPORT.md`.

## Contact form behavior
The form validates required fields and opens a prefilled email through the visitor's email application. It does not submit to a server. Direct submissions require a configured, privacy-reviewed form backend or form provider.
