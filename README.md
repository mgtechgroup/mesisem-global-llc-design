# Mesisem Global LLC - Brand Site

Static Next.js export for the Mesisem Global LLC brand website.

## Cloudflare Pages
- Project: `mesisem-global-llc-design`
- Repository: `mgtechgroup/mesisem-global-llc-design` (`master`)
- Build command: `npm run build`
- Output directory: `dist`
- Pages preview hostname: `mesisem-global-llc-design.pages.dev` (initial build pending)
- Intended production hostname: `https://mesisemglobal.com` (custom-domain cutover pending)
- Intended development hostname: `https://dev.mesisemglobal.com` for the unified brand + resources app in `mgtechgroup/Mesisem-Global-Webapp`.

The existing resources-only Pages project will be retained on its `pages.dev` hostname as a rollback copy after the custom-domain move.

## Contact form status
The current form only displays a local `Message Received` state. It does not submit to an API or save the message. Do not treat a form submission as delivered; backend integration is tracked in `TODO.md`.

## Local checks
```sh
npm ci
npm run lint
npm run build
```

See `DEPLOY.md` for the domain cutover and rollback checklist; see `TODO.md` for follow-up and maintenance work.