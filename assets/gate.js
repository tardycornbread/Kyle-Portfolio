/* ============================================================
   gate.js — soft password gate for a case-study page.
   NOTE: this is a deterrent, not real security. The page content lives in the
   public data.js and images sit at public URLs, so a determined visitor can
   still reach them. It only stops casual browsing.

   Opt a page in by adding to its <body>:
     data-gate="<sessionStorage-key>"     e.g. "neta-unlocked"
     data-gate-hash="<sha256-hex of pw>"
     data-gate-title="<title shown on the lock screen>"
   and (to avoid a content flash) an inline <head> script that adds the
   `gated-locked` class to <html> when the key isn't set. See case.css for styles.
   ============================================================ */
(function () {
  const body = document.body;
  const key = body.dataset.gate;
  const hash = body.dataset.gateHash;
  if (!key || !hash) return;                         // page isn't gated
  if (sessionStorage.getItem(key) === '1') {         // already unlocked this session
    document.documentElement.classList.remove('gated-locked');
    return;
  }

  document.documentElement.classList.add('gated-locked');
  const title = body.dataset.gateTitle || 'Protected';

  const overlay = document.createElement('div');
  overlay.className = 'gate';
  overlay.innerHTML = `
    <form class="gate-card" novalidate>
      <div class="gate-eyebrow upper">Protected case study</div>
      <h1 class="gate-title">${title}</h1>
      <p class="gate-note">This case study is password-protected. Enter the password to continue.</p>
      <div class="gate-row">
        <input class="gate-input" type="password" placeholder="Password" autocomplete="off" aria-label="Password" />
        <button class="gate-btn" type="submit">Unlock</button>
      </div>
      <div class="gate-err" role="alert" hidden>Incorrect password — try again.</div>
      <a class="gate-back" href="/index.html#work">← Back to work</a>
    </form>`;
  body.appendChild(overlay);

  const input = overlay.querySelector('.gate-input');
  const err = overlay.querySelector('.gate-err');
  input.focus();

  const sha256hex = async (str) => {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  };

  overlay.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const ok = (await sha256hex(input.value)) === hash;
    if (ok) {
      sessionStorage.setItem(key, '1');
      document.documentElement.classList.remove('gated-locked');
      overlay.remove();
    } else {
      err.hidden = false;
      input.value = '';
      input.focus();
    }
  });
})();
