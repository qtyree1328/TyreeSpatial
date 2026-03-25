# Tyree Spatial Website

The official website for **Tyree Spatial** — a geospatial data infrastructure consultancy specializing in energy and environmental industries.

## What is Tyree Spatial?

Tyree Spatial builds production-grade data pipelines, site scoring engines, and document intelligence tools. The consultancy houses three core products:

- **Snapshot** — Automated site feasibility scoring for solar and energy development using 20+ federal geospatial datasets. Scores any U.S. parcel for environmental risk, grid proximity, and regulatory constraints in under 60 seconds. ([Live](https://snapshot-tyree.web.app/))
- **Groundwork** — Custom client intake forms, admin dashboards, and pipeline management for energy and trades companies. Built once, deployed on the client's domain, handed off as a permanent asset. ([Live](https://qtyree1328.github.io/Lead-Forms/))
- **DocuDistill** — AI-powered PDF extraction pipeline using Claude Vision with reusable templates. Converts unstructured documents into clean, spreadsheet-ready Excel workbooks. ([Live](https://qtyree1328.github.io/docudistill/))

## Site Structure

```
├── index.html          # Home — hero, capabilities, product showcases, CTA with globe
├── solutions.html      # Solutions — full product deep-dives with screenshots, stats, tech stacks, features
├── other.html          # Other Work — alternating image/text rows for non-Tyree-Spatial web apps
├── contact.html        # Contact — about me section + contact form
├── styles.css          # Shared styles (nav, footer, buttons, animations, responsive)
├── nav.js              # Shared nav, footer, mobile menu, scroll reveal
├── reference_html/     # Portfolio pages for hutchtyree.com (not part of tyreespatial.com)
│   ├── home.html       # Personal portfolio home page
│   └── web-apps.html   # Detailed web application showcase
└── Cover_images/       # Local cover image assets
```

## Pages

| Page | URL | Content |
|------|-----|---------|
| **Home** | `index.html` | Hero with earth image, 3 capability cards, full Snapshot/Groundwork/DocuDistill sections, 4-card "Other Work" preview, CTA with spinning globe |
| **Solutions** | `solutions.html` | Deep-dive on each product with screenshots, stat counters, feature lists, tech stack pills, and industry cards |
| **Other** | `other.html` | Alternating image/description rows (web-apps.html format) for all non-Tyree-Spatial projects |
| **Contact** | `contact.html` | About me bio + highlights, contact form with topic selector, link to hutchtyree.com |

## Related Sites

- **hutchtyree.com** — Personal portfolio site (uses `reference_html/home.html` and `reference_html/web-apps.html`)
- **tyreespatial.com** — This site (the root-level HTML files)

## Design

- **Color palette**: Green theme (`hsl(143, 66%, *)`) with tan accent (`hsl(30, 30%, 88%)`)
- **Fonts**: Playfair Display (headings), DM Sans (body)
- **No build step**: Plain HTML/CSS/JS, no frameworks or bundlers
- **Images**: Hosted on GitHub at `qtyree1328/TyreeSpatial_photos`
- **Responsive**: Mobile-first with breakpoints at 900px and 600px
- **Animations**: Scroll reveal, animated process steps, spinning canvas globe

## Running Locally

Open any HTML file in a browser, or use a local server:

```bash
# With Python
python3 -m http.server 8000

# With Node
npx serve .

# With VS Code
# Use the "Live Server" extension
```
