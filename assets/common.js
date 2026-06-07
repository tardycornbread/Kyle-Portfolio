/* ============================================================
   common.js — shared helpers (no dependencies, no modules)
   Exposes window.SITE_UTILS. Loaded after data.js, before home.js / case.js.
   ============================================================ */
(function () {
  const esc = (v = '') => String(v)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  const slug = (v) => String(v).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const getProject = (s) => ((window.SITE && window.SITE.projects) || []).find(p => p.slug === s);

  // Smooth-scroll any in-page anchor (href="#id"). Ignores bare "#".
  const bindAnchorScroll = (scope = document) => {
    scope.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (id === '#') return;
        const t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  };

  window.SITE_UTILS = { esc, slug, getProject, bindAnchorScroll };
})();
