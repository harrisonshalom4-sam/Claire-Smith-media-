# QA Test Report

Project: Claire Smith Media Creator
Date: 2026-10-16

## Source and asset checks

- [x] **HTML5 doctype:** PASS
- [x] **Page title and meta description:** PASS
- [x] **Viewport meta:** PASS
- [x] **Required content sections:** PASS
- [x] **Header has Home/About/Services/Portfolio/Contact navigation:** PASS
- [x] **All local HTML asset references exist:** PASS
- [x] **Mobile/tablet CSS breakpoints:** PASS
- [x] **Reduced-motion preference supported:** PASS
- [x] **JavaScript syntax:** PASS — node --check passed
- [x] **Mobile menu ARIA and Escape support:** PASS
- [x] **Contact form fallback limitation disclosed:** PASS
- [x] **Telephone link uses valid AU international form:** PASS
- [x] **Facebook destination centrally configured:** PASS
- [x] **PNG QR decodes to exact Facebook URL:** PASS — https://www.facebook.com/share/1K4V7vzMbK/?mibextid=wwXIfr
- [x] **SVG QR decodes to exact Facebook URL:** PASS — https://www.facebook.com/share/1K4V7vzMbK/?mibextid=wwXIfr
- [x] **Original logo asset retained:** PASS
- [x] **Favicon files exist:** PASS
- [x] **Custom 404 exists:** PASS
- [x] **README and deployment guide exist:** PASS

## Browser testing

A local HTTP preview server returned HTTP 200 for the homepage. Automated Playwright browser navigation was attempted using the installed system Chromium, but this environment blocks browser navigation with `ERR_BLOCKED_BY_ADMINISTRATOR`. Therefore, no visual rendering, desktop/mobile overflow measurement, or in-browser interaction test is claimed. The CSS responsive breakpoints and mobile navigation behavior were inspected in source, but should still be visually checked in a normal browser after download.

## Functional caveats

- The contact form uses a `mailto:` fallback. It does not submit directly to a server or confirm delivery.
- The website has not been deployed publicly from this environment; Cloudflare account authorization is not available here.
- Google Fonts and outbound Facebook/Forbes links need visitor internet access.
- Physical phone-camera scanning of the QR code was not tested; both PNG and SVG were programmatically decoded and matched the configured Facebook URL.
