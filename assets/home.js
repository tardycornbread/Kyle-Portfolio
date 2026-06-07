/* ============================================================
   home.js — renders the home page from window.SITE.
   Loaded after data.js + common.js. Edit content in data.js, not here.
   ============================================================ */
(function () {
  const { esc, bindAnchorScroll } = window.SITE_UTILS;
  const SITE = window.SITE;
  const root = document.querySelector('#site-root');

  const card = (p) => `
    <a class="card" href="${esc(p.href)}">
      <div class="art" style="background:${p.cover ? `url('${esc(p.cover)}') center/cover, ` : ''}${esc(p.gradient)}">
        ${p.cover ? '' : `<div class="title ${p.darkTitle ? 'dark' : ''}">${esc(p.title)}</div>`}
        <span class="view ${p.darkTitle ? 'dark' : ''}">View</span>
      </div>
      <div class="meta">
        <span class="cap">${esc(p.caption)}</span>
        <span class="tag">${esc(p.title)} · ${esc(p.status)} · ${esc(p.year)}</span>
      </div>
    </a>`;

  const render = () => {
    const { profile, home, projects, social } = SITE;
    document.title = profile.pageTitle;
    document.querySelector('#brand-nm').textContent = profile.name;
    document.querySelector('#brand-rl').textContent = profile.role;
    document.querySelector('#resume').setAttribute('href', profile.resumeUrl);

    root.innerHTML = `
      <section class="hero wrap" id="top">
        <div class="hero-grid">
          <h1>${esc(home.hero.pre)}<em>${esc(home.hero.em)}</em>${esc(home.hero.post)}</h1>
          <ul class="timeline">
            ${home.experience.map(([yr, org, role]) => `
              <li><span class="yr">${esc(yr)}</span><span class="org">${esc(org)}</span><span class="role">${esc(role)}</span></li>`).join('')}
          </ul>
        </div>
      </section>

      <section class="work wrap" id="work">
        <div class="cards">${projects.map(card).join('')}</div>
      </section>

      <section class="about" id="about">
        <div class="wrap about-grid">
          <div class="lbl upper">About</div>
          <div>
            <p>${esc(home.about.pre)}<span class="soft">${esc(home.about.soft)}</span></p>
            <div class="about-info">
              ${home.about.info.map(([k, v]) => `<div><div class="k">${esc(k)}</div><div class="v">${esc(v)}</div></div>`).join('')}
            </div>
          </div>
        </div>
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
  };

  render();
  bindAnchorScroll();
})();
