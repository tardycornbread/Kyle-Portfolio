# Kyle Hao — Portfolio

A small, **build-free** static site. No framework, no `npm install`, no bundler.
All content lives in one file (`assets/data.js`); the HTML pages are thin shells
that render themselves from it.

---

## Run it locally

Preview through the dev server (the pages use root-relative `/assets/...` paths,
so **double-clicking an `.html` file won't load styles** — always use the server):

- In your editor's Claude panel: start the **`static`** server (defined in
  `.claude/launch.json` → runs `.claude/static-server.js`).
- Or from a terminal: `node .claude/static-server.js 3000`

Then open **http://localhost:3000/**. The server reads from disk, so just save a
file and refresh — no restart needed.

---

## How it's organized

```
index.html                  # home shell (nav + empty <main>)
projects/<slug>.html        # case-study shell (~40 lines, just data-slug="<slug>")
assets/
  data.js                   # ← THE ONLY FILE YOU NORMALLY EDIT (window.SITE)
  base.css                  # shared: tokens, reset, fonts, nav, placeholders
  home.css / case.css       # page-specific styles
  common.js                 # helpers (esc, slug, getProject, smooth-scroll)
  home.js                   # renders the home page from SITE
  case.js                   # renders a case study from SITE (TOC + scrollspy)
  img/<slug>/...            # project images
sku-compliance.svg          # Neta IA diagram (referenced as /sku-compliance.svg)
```

**Single source of truth:** `assets/data.js` defines `window.SITE = { profile,
social, home, projects[] }`. The home grid, every case-study page, page titles,
the table of contents, and footers are all generated from it.

---

## Add a project (2 steps)

### Step 1 — add the data

Append an object to the `projects: [ ... ]` array in **`assets/data.js`**.

**Card only** (appears on the home grid, no detail page):

```js
{ slug: 'my-project', title: 'My Project', caption: 'One-line summary',
  status: 'Shipped', year: '2026', href: '#',
  gradient: 'linear-gradient(135deg, #2f5fff 0%, #6aa0ff 100%)' }
```

**Full case study** (card + its own page) — point `href` at the page and add a
`caseStudy` block (copy the `neta-ai` entry as a template):

```js
{ slug: 'my-project', title: 'My Project', caption: 'One-line summary',
  status: 'Shipped', year: '2026',
  gradient: 'linear-gradient(135deg, #1f7a4d 0%, #0e4a2d 100%)',
  href: '/projects/my-project.html',
  caseStudy: {
    eyebrowName: 'My Project',                 // small uppercase label (defaults to title)
    tagline: 'The big idea in one sentence.',  // the large serif H1
    heroImage: '/assets/img/my-project/hero.jpg',  // omit → gradient hero + heroLabel
    heroLabel: 'My Project',                   // shown if there's no heroImage
    meta: [['Role','…'], ['Timeline','…'], ['Team','…'], ['Skills','…']],
    blocks: [
      { type: 'heading', text: 'Overview' },
      { type: 'lede', text: 'A short, bold framing line.' },
      { type: 'text', text: 'A normal paragraph.' },
      // …see block types below
    ]
  },
  next: { slug: 'neta-ai' }                    // optional "Next project" link
}
```

**Card fields:** `slug`, `title`, `caption`, `status`, `year`, `gradient`,
`href`, optional `darkTitle: true` (use dark text on light gradients).

### Step 2 — add the page (full case studies only)

Copy `projects/neta-ai.html` → `projects/my-project.html` and change the single
attribute `data-slug="my-project"`. Nothing else in that file changes — the title,
TOC, content, and footer all render from `data.js`.

> Card-only projects (`href: '#'`) need **no** page — Step 1 is enough.

---

## Block types (for `caseStudy.blocks[]`)

Each `heading` automatically becomes a sidebar **table-of-contents** entry with
scroll tracking. Source of truth: `renderBlock()` in `assets/case.js`.

| `type`     | Fields | Renders |
|------------|--------|---------|
| `heading`  | `text` | Section label + TOC entry |
| `lede`     | `text` | Large serif intro line |
| `text`     | `text` | Body paragraph |
| `image`    | `src?`, `label`, `caption?`, `contain?` | Full-width image; with no `src` it's a labeled placeholder. `contain: true` fits diagrams/screenshots without cropping. |
| `images`   | `items: [[label, 'tall' \| 'full'], …]` | 2- or 3-up image row (placeholders) |
| `grid2`    | `items: [[label], …]` | 2-column placeholder grid |
| `list`     | `items: [[title, description], …]` | Numbered list |
| `flows`    | `items: [[title, description], …]` | 2-column card grid |
| `callout`  | `kind: 'main' \| 'alt'`, `k`, `text` | `main` = rust block; `alt` = outlined block |

**Images:** put files in `assets/img/<slug>/` and reference them root-relative,
e.g. `src: '/assets/img/my-project/frame-1.png'`.

---

## Where the Neta AI content lives

It's the **first** object in `SITE.projects` in `assets/data.js`:

- Card fields (title, caption, status, green gradient, href) — top of the object
- Write-up — the `caseStudy` block (`eyebrowName`, `tagline`, `heroImage`, `meta`, `blocks`)
- Hero image — `assets/img/neta/hero.jpg`
- IA diagram — `sku-compliance.svg` (referenced in a `blocks` `image` as `/sku-compliance.svg`)
- Page shell — `projects/neta-ai.html`

Edit the text in those `blocks` and refresh — the page updates immediately.

---

## Deploying

Host at a **domain root** (Netlify, Vercel, Cloudflare Pages all do this by
default) so the root-relative `/assets/...` paths resolve. If you must host under
a sub-path, switch the asset links to relative paths or add a `<base href>` to
each shell.
