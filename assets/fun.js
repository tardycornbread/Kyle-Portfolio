/* ============================================================
   fun.js — renders the /fun.html page from window.SITE.fun.
   Loaded after data.js + common.js. Edit content in data.js, not here.
   Reuses the home card styles (home.css). Cards link out externally.
   ============================================================ */
(function () {
  const { esc, bindAnchorScroll } = window.SITE_UTILS;
  const SITE = window.SITE;
  const root = document.querySelector('#fun-root');
  if (!root || !SITE.fun) return;

  const isExternal = (h) => /^(https?:|mailto:)/.test(h || '');

  const card = (it) => `
    <a class="card" href="${esc(it.href)}"${isExternal(it.href) ? ' target="_blank" rel="noopener"' : ''}>
      <div class="art" style="background:${it.cover ? `url('${esc(it.cover)}') center/cover, ` : ''}${esc(it.gradient)}">
        ${it.cover ? '' : `<div class="title ${it.darkTitle ? 'dark' : ''}">${esc(it.title)}</div>`}
        <span class="view ${it.darkTitle ? 'dark' : ''}">${isExternal(it.href) ? 'Open ↗' : 'View'}</span>
      </div>
      <div class="meta">
        <span class="cap">${esc(it.cap || '')}</span>
        <span class="tag">${esc(it.sub || '')}</span>
      </div>
    </a>`;

  const { profile, fun, home, social } = SITE;
  document.title = `Fun — ${profile.name}`;

  root.innerHTML = `
    <section class="hero wrap" id="top">
      <div class="hero-grid no-timeline">
        <h1>${esc(fun.hero.pre)}<em>${esc(fun.hero.em)}</em>${esc(fun.hero.post)}</h1>
      </div>
      ${fun.intro ? `<p class="fun-intro">${esc(fun.intro)}</p>` : ''}
    </section>

    <section class="work wrap" id="fun">
      <div class="cards cards--fun">${fun.items.map(card).join('')}</div>
    </section>

    <footer class="foot" id="contact">
      <div class="wrap">
        <h2>${esc(home.contact.pre)}<a href="${esc(social[0].url)}"><em>${esc(home.contact.em)}</em></a>${esc(home.contact.post)}</h2>
        <div class="foot-row">
          <div class="foot-links">
            ${social.map(l => `<a href="${esc(l.url)}">${esc(l.label)} ↗</a>`).join('')}
          </div>
          <div class="foot-copy">Designed + coded by ${esc(profile.name)} · © ${esc(profile.year)}</div>
        </div>
      </div>
    </footer>
  `;

  bindAnchorScroll();
})();
