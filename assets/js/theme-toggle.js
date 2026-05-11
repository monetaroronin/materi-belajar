/**
 * Theme Toggle — 3 Mode: Terang → Sunset → Gelap → Terang
 * Simpan di: assets/js/theme-toggle.js
 *
 * Cara pakai: tambahkan di _config.yml atau _includes/head.html:
 *   <script src="/assets/js/theme-toggle.js" defer></script>
 *
 * Atau di _config.yml (Chirpy):
 *   jekyll-assets / custom_js: [theme-toggle]
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'mb-theme';          // key localStorage
  const MODES       = ['light', 'sunset', 'dark'];
  const LABELS      = { light: 'Terang', sunset: 'Sunset', dark: 'Gelap' };

  /* ── Ambil mode tersimpan, fallback ke 'light' ── */
  function getSavedMode() {
    try { return localStorage.getItem(STORAGE_KEY) || 'light'; }
    catch (e) { return 'light'; }
  }

  /* ── Simpan mode ── */
  function saveMode(mode) {
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) {}
  }

  /* ── Terapkan mode ke <html data-mode="..."> ── */
  function applyMode(mode) {
    document.documentElement.setAttribute('data-mode', mode);
  }

  /* ── Mode berikutnya dalam siklus ── */
  function nextMode(current) {
    const idx = MODES.indexOf(current);
    return MODES[(idx + 1) % MODES.length];
  }

  /* ── Update aria-label tombol (aksesibilitas) ── */
  function updateButton(btn, mode) {
    if (!btn) return;
    const next = nextMode(mode);
    btn.setAttribute('aria-label', 'Ganti ke mode ' + LABELS[next]);
    btn.setAttribute('title', 'Ganti ke mode ' + LABELS[next]);
  }

  /* ── Init saat DOM siap ── */
  function init() {
    const saved = getSavedMode();
    applyMode(saved);

    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    updateButton(btn, saved);

    btn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-mode') || 'light';
      const next    = nextMode(current);
      applyMode(next);
      saveMode(next);
      updateButton(btn, next);
    });
  }

  /* Jalankan sesegera mungkin untuk hindari flash */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ── Terapkan mode awal SEBELUM paint (anti-FOUC) ── */
  applyMode(getSavedMode());

})();
