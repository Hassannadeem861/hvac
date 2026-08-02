# Mr Technician — HVAC Company Website

A production-ready, responsive HVAC company website built with Next.js (App
Router), JavaScript, Bootstrap 5.3, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
/app            Pages (App Router) — home, about, services, gallery, contact
/components     Reusable UI components (Navbar, Footer, Hero, cards, etc.)
/data           Static content — services, reviews, FAQ, team, site config
/public         Static assets (favicon, images if you add local ones)
```

## About the logo

No logo file was received with the project brief, so the navbar/footer use a
placeholder brand mark (`components/Logo.js`) — a rounded gradient tile with a
snowflake icon, built from your palette. To swap in your real logo:

1. Add your logo file to `/public/images/logo.png` (or `.svg`).
2. In `components/Logo.js`, replace the `<span className="logo-mark">` block
   with a Next.js `<Image src="/images/logo.png" ... />`.
3. Update `app/layout.js` → `metadata.icons` and `/public/favicon.svg` if you
   want the favicon to match the real logo too.

## Content

All copy, services, reviews, FAQ, team bios, and gallery items live in
`/data`. There is no backend, API, or database — everything is static
JavaScript, per the brief. Edit these files to update site content without
touching component code.

## Images

Service, hero, gallery, and team images are pulled from Unsplash and
randomuser.me via direct URLs (configured as allowed remote image hosts in
`next.config.mjs`). Swap any `image` field in `/data/*.js` with your own
photography whenever you're ready — no code changes required.

## SEO

- Per-page metadata (title, description, canonical, Open Graph, Twitter Card)
  in each `app/**/page.js`
- JSON-LD structured data: `HVACBusiness` (site-wide, in `app/layout.js`),
  `FAQPage` (home page), `ItemList` of `Service` entities (services page)
- `app/sitemap.js` and `app/robots.js` generate `/sitemap.xml` and
  `/robots.txt` automatically
- Semantic headings, alt text on every image, and a breadcrumb on every
  interior page

## Fonts

Poppins is self-hosted via `@fontsource/poppins` (weights 400/500/600/700)
rather than fetched from Google Fonts at build time — this avoids a runtime
dependency on Google's CDN and works in network-restricted build
environments.

## Deployment

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node
host. No environment variables or backend services are required.
