/* ============================================================
   case.js — renders a case study from window.SITE.
   The page identifies itself via <body data-slug="...">.
   Loaded after data.js + common.js. Edit content in data.js, not here.
   ============================================================ */
(function () {
  const { esc, slug, getProject } = window.SITE_UTILS;
  const SITE = window.SITE;

  const projectSlug = document.body.dataset.slug;
  const p = getProject(projectSlug);

  // Friendly fallback for a bad/missing slug — never a blank crash.
  if (!p || !p.caseStudy) {
    const main = document.querySelector('#cs-main');
    if (main) main.innerHTML = `<div class="cs-eyebrow upper">Not found</div>
      <h1>No case study for “${esc(projectSlug || '')}”.</h1>
      <p style="margin-top:18px"><a class="back" href="/index.html#work">← Back to all work</a></p>`;
    return;
  }

  const study = p.caseStudy;

  // Figures are numbered in document order so the box, the caption, and any
  // in-text reference share one sequence (Fig. 01, Fig. 02, …).
  let figNum = 0;

  const renderBlock = (b) => {
    switch (b.type) {
      case 'heading': return `<div class="block"><h2 id="${slug(b.text)}" class="upper">${esc(b.text)}</h2></div>`;
      case 'lede': return `<p class="lede">${esc(b.text)}</p>`;
      case 'text': return `<p>${esc(b.text)}</p>`;
      case 'image': {
        const n = String(++figNum).padStart(2, '0');
        const cap = b.caption || b.label || '';      // fall back to label so info is never lost
        // src can be a single string or an array of strings (renders a 2-/3-up row, one figure + caption).
        const srcs = Array.isArray(b.src) ? b.src : (b.src ? [b.src] : null);
        if (srcs) {
          const imgs = srcs.map(s => `<img class="shot-img ${b.contain ? 'contain' : ''}" src="${esc(s)}" alt="${esc(b.label || '')}" loading="lazy" />`).join('');
          // multiple srcs: stacked (b.stack) → full-width rows; otherwise a 2-/3-up side-by-side grid.
          const media = srcs.length > 1
            ? (b.stack ? `<div class="shot-stack">${imgs}</div>` : `<div class="grid${srcs.length === 2 ? '2' : '3'}">${imgs}</div>`)
            : imgs;
          return `<figure class="shot">${media}${cap ? `<figcaption><span class="fign">Fig. ${n}</span>${esc(cap)}</figcaption>` : ''}</figure>`;
        }
        // No src yet: compact skeleton showing only the figure number; the label moves to the caption (no duplication).
        return `<figure class="shot"><div class="ph full empty"><span class="fign-ph">Fig. ${n}</span></div>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}</figure>`;
      }
      case 'video': {
        const n = String(++figNum).padStart(2, '0');
        const cap = b.caption || b.label || '';
        return `<figure class="shot"><div class="video-embed"><iframe src="${esc(b.src)}" title="${esc(b.label || 'Video')}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" allowfullscreen loading="lazy"></iframe></div>${cap ? `<figcaption><span class="fign">Fig. ${n}</span>${esc(cap)}</figcaption>` : ''}</figure>`;
      }
      case 'images': return `<div class="grid${b.items.length === 2 ? '2' : '3'}">${b.items.map(([l, ar]) => `<div class="ph ${ar === 'tall' ? 'tall' : 'full'}">${esc(l)}</div>`).join('')}</div>`;
      case 'grid2': return `<div class="grid2">${b.items.map(([l]) => `<div class="ph full">${esc(l)}</div>`).join('')}</div>`;
      case 'list': return `<ul class="bullets">${b.items.map(([t, d], i) => `<li><span class="num">${i + 1}</span><span><span class="t">${esc(t)}</span><span class="d">${esc(d)}</span></span></li>`).join('')}</ul>`;
      case 'flows': return `<div class="flows">${b.items.map(([t, d]) => `<div class="flow"><div class="t">${esc(t)}</div><div class="d">${esc(d)}</div></div>`).join('')}</div>`;
      case 'callout': return `<div class="callout ${b.kind === 'alt' ? 'alt' : 'main'}"><div class="k">${esc(b.k)}</div><div class="big">${esc(b.text)}</div></div>`;
      default: return '';
    }
  };

  const render = () => {
    // Per-page metadata from the single source of truth.
    document.title = `${p.title} — ${SITE.profile.name}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', `${p.title} — a case study by ${SITE.profile.name}.`);

    // TOC from headings.
    const headings = study.blocks.filter(b => b.type === 'heading');
    document.querySelector('#toc').innerHTML = headings
      .map(h => `<a href="#${slug(h.text)}">${esc(h.text)}</a>`).join('');

    // Next-project link (resolved by lookup, not hardcoded).
    let pagerNext = '';
    if (p.next) {
      const nx = getProject(p.next.slug);
      if (nx) pagerNext = `<a class="next" href="/projects/${esc(nx.slug)}.html"><div class="lbl">Next project</div><div class="tt">${esc(nx.title)} →</div></a>`;
    }

    const heroHtml = study.heroImage
      ? `<figure class="hero"><img class="hero-img" src="${esc(study.heroImage)}" alt="${esc(study.heroLabel || p.title)}" /></figure>`
      : `<figure class="hero"><div class="ph hero-art"><span class="ov">${esc(study.heroLabel)}</span></div></figure>`;

    document.querySelector('#cs-main').innerHTML = `
      <div class="cs-eyebrow upper">${esc(study.eyebrowName || p.title)} · ${esc(p.status)} ${esc(p.year)}</div>
      <h1>${esc(study.tagline)}</h1>
      ${heroHtml}
      <div class="meta">
        ${study.meta.map(([k, v]) => `<div><div class="k upper">${esc(k)}</div><div class="v">${esc(v)}</div></div>`).join('')}
      </div>
      <div class="body">${study.blocks.map(renderBlock).join('')}</div>
      <div class="pager">
        <a href="/index.html#work"><div class="lbl">Back</div><div class="tt">← All work</div></a>
        ${pagerNext}
      </div>`;

    document.querySelector('#foot-links').innerHTML = SITE.social.map(s => `<a href="${esc(s.url)}">${esc(s.label)} ↗</a>`).join('');
  };

  const bind = () => {
    const links = [...document.querySelectorAll('#toc a')];
    const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const setActive = (id) => links.forEach(a => a.classList.toggle('active', a === map.get(id)));

    const heads = [...document.querySelectorAll('.body h2[id]')];
    if (heads.length) setActive(heads[0].id);

    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -72% 0px', threshold: 0 });
    heads.forEach(h => obs.observe(h));

    // smooth-scroll TOC clicks (respect sticky nav via scroll-margin)
    links.forEach(a => a.addEventListener('click', (e) => {
      const t = document.getElementById(a.getAttribute('href').slice(1));
      if (!t) return;
      e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
  };

  // Mobile/tablet only (≤1040px, where the sidebar TOC is hidden): a minimal
  // back-to-top control. Hidden on desktop via CSS; fades in after scrolling.
  const mountToTop = () => {
    const toTop = document.createElement('button');
    toTop.type = 'button';
    toTop.className = 'to-top';
    toTop.setAttribute('aria-label', 'Back to top');
    toTop.textContent = '↑';
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(toTop);
    const onScroll = () => toTop.classList.toggle('show', window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  };

  render();
  bind();
  mountToTop();
})();
