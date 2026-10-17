# Claire Smith Media Creator

A responsive, single-page creative media portfolio for Claire Smith Media Creator. The project uses plain HTML, CSS and vanilla JavaScript and can be hosted as a static site.

## Features
- Responsive navigation and sections for about, services, creative concepts, process, contact and social links.
- Supplied Claire logo preserved in the brand assets.
- Locally stored cinematic hero visual optimized as WebP.
- Portfolio items clearly described as demonstration concepts, not commissioned client work.
- Facebook link and matching QR-code assets.
- Accessible skip link, visible keyboard focus, mobile menu keyboard handling, and reduced-motion support.
- Custom 404 page and Cloudflare Pages deployment guide.

## Run locally
No installation or build step is required. From the project directory, run:

```bash
python -m http.server 8000
```

Open <http://127.0.0.1:8000> in a browser on the same computer. Stop the server with `Ctrl+C`. You may also open `index.html` directly, though using a local server more closely reflects hosting behavior.

## Project structure
- `index.html` — website content and metadata.
- `css/styles.css` — layout and responsive styles.
- `js/main.js` — menu, Facebook URL, contact form fallback and footer year.
- `assets/logo/` — original supplied logo.
- `assets/images/` — local hero visual.
- `assets/qr/` — Facebook QR PNG/SVG.
- `assets/icons/` — favicon files.
- `docs/deployment-guide.md` — deployment steps.
- `PROJECT_GUIDE.md` — maintenance guide.
- `ASSET_CREDITS.md` — asset provenance and external font notes.
- `tests/QA_REPORT.md` — checks and limitations.
- `DELIVERY_NOTES.md` — summary of finishing changes.

## Contact form
The form validates fields and opens a prefilled email in the visitor's email application. It does not transmit form submissions to a server. Direct submissions require a configured backend or form provider.

## Deployment
See `docs/deployment-guide.md`. This is a static site with no required build command. For Cloudflare Pages, the project root must contain `index.html`; the build output is the project directory. Official guidance: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
