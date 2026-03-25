# CLAUDE.md

## Project Overview

This repo is **tyreespatial.com** — the permanent portfolio site for Quintin "Hutch" Tyree. It is a 4-page multi-page app (index.html, solutions.html, other.html, contact.html).

The `reference_html/` and `about.html` files are reference pages from the old personal site, now at **hutchtyree.com**. They are not part of the tyreespatial.com site — do not modify them when editing tyreespatial.com pages.

## Architecture

- **No build system** — plain HTML, CSS, and vanilla JS. No frameworks, no bundlers.
- **Shared components via JS injection** — `nav.js` injects the nav bar and footer into each page using `innerHTML`. Each page calls `getNav('PageName')` and `getFooter()`.
- **Shared styles** — `styles.css` contains nav, footer, buttons, reveal animations, and responsive rules. Each page has additional page-specific `<style>` blocks in the `<head>`.
- **Images hosted externally** — All product screenshots and photos are on GitHub at `https://raw.githubusercontent.com/qtyree1328/TyreeSpatial_photos/refs/heads/main/`. No images are served from this repo (except `Cover_images/` which are legacy local assets).

## Key Design Decisions

- **Green + tan color palette** — `--green-accent: hsl(143, 66%, 25%)` is the primary brand color. `--tan: hsl(30, 30%, 88%)` is used for alternating light sections. Sections alternate between `bg-dark` and `bg-tan`.
- **Fonts** — Playfair Display for headings (serif, editorial feel), DM Sans for body text.
- **Mobile nav** — Hamburger menu with animated X toggle, smooth max-height slide-down, closes on link tap.
- **Scroll animations** — `.reveal` class on elements, JS adds `.active` when element enters viewport. Service cards use `scale(0.97)` → `scale(1)` for a subtle pop.
- **Spinning globe** — Canvas-drawn globe in the CTA section. Renders latitude/longitude lines, orbiting satellites with trails, and data points. Matches the tan background (no separate box).
- **Process steps** — Animated 1-2-3 circles with a filling connecting line, triggered once on scroll.

## Products (for context when editing)

- **Snapshot** — Energy siting platform. Firebase + Cloud Functions + Firestore + MapLibre + Stripe. 20+ federal APIs (USGS, FEMA, NREL, EPA, FCC, USDA). Scores parcels on 100-point scale. Source: `Desktop/Desktop_Files/Research/Landvolt/Snapshot`
- **Groundwork** — Business systems for trades companies. Firebase + Leaflet + vanilla JS. Client intake forms with e-signatures, admin dashboards, maps. Flat one-time fee model. Source: `Desktop/Desktop_Files/Work/Lead-Forms`
- **DocuDistill** — Document intelligence. Flask + PostgreSQL + Claude Vision + SQLAlchemy. 4 extraction methods, template builder, async job queue, Excel export. Source: `Desktop/Desktop_Files/Research/geo-pdf-pipeline`

## File Relationships

```
index.html ──┐
solutions.html ──┤── all import styles.css and nav.js
other.html ──┤
contact.html ──┘

nav.js ── generates <nav> and <footer> for all pages
styles.css ── shared nav, footer, buttons, animations, responsive

reference_html/home.html ── standalone (own inline styles, no nav.js/styles.css)
reference_html/web-apps.html ── standalone (own inline styles, no nav.js/styles.css)
```

## Conventions

- Page-specific styles go in `<style>` blocks in the page's `<head>`, not in `styles.css`
- External links use `target="_blank"`
- The user prefers concise, professional copy — no filler, no over-explanation
- Sections alternate dark/tan backgrounds for visual rhythm
- Mobile breakpoints: 900px (tablet), 600px (phone)
- The `reference_html/` pages have a `--hero-offset` CSS variable to control vertical position of hero text on mobile (accounts for parent site's nav bar)
- The user prefers terse responses with no trailing summaries

## What NOT to do

- Don't touch `reference_html/` files when editing the Tyree Spatial site (and vice versa)
- Don't add build tools, package.json, or frameworks
- Don't create new CSS files — use `styles.css` for shared rules, inline `<style>` for page-specific
- Don't change the image hosting pattern — all images come from the GitHub repo URL
- Don't add comments, docstrings, or type annotations unless asked
