# Deployment Guide

This is a static HTML/CSS/JavaScript site. There is no package manager, build command, or server-side runtime.

## Local preview
From this project directory, run:

```bash
python -m http.server 8000
```

Open `http://127.0.0.1:8000` on the same computer. Stop with `Ctrl+C`.

## Cloudflare Pages — Direct Upload
Cloudflare Pages supports static HTML and dashboard drag-and-drop upload of a ZIP or a folder of assets. Official guide: https://developers.cloudflare.com/pages/get-started/direct-upload/

1. Sign in to the Cloudflare dashboard and open **Workers & Pages**.
2. Choose **Create application** and select the Pages upload/Direct Upload path.
3. Name the project `claire-smith-media-creator` if the name is available.
4. Extract the delivery ZIP on your computer.
5. Upload the **contents of the `claire-smith-media-creator` project folder** (or create an upload ZIP from inside that folder) so `index.html` is at the top level. Do not upload a parent folder that nests the site one level down.
6. Deploy, then open the `*.pages.dev` URL Cloudflare reports.
7. Check the home page, navigation, logo, hero image, contact links and Facebook QR code on the deployed URL.

For Git-integrated Pages deployments, use the repository root as the build output directory and no build command is required for this static site. Follow Cloudflare's current dashboard prompts. Direct Upload and Git integration are different project setup paths; choose based on whether you need automatic repository deployments.

## Contact form
The current form prepares a `mailto:` email in the visitor's own email application. To receive form submissions directly on a website, configure and test a form service or server-side endpoint and update the form handling code. Do not add private credentials to client-side JavaScript.
