/**
 * Reading Progress Bar + Scroll-to-Top Button
 * Simpan di: assets/js/reading-progress.js
 *
 * - Progress bar: bar tipis di bagian atas halaman, ikuti scroll artikel
 * - Scroll-to-top: tombol muncul setelah scroll 300px, klik langsung ke atas
 */

(function () {
  'use strict';

  /* ── Progress Bar ── */
  function initProgressBar() {
    var bar = document.getElementById('reading-progress-bar');
    if (!bar) return;

    function updateBar() {
      var scrollTop  = window.scrollY || document.documentElement.scrollTop;
      var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      var progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(progress, 100) + '%';
    }

    window.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  /* ── Scroll-to-Top Button ── */
  function initScrollToTop() {
    var btn = document.getElementById('scroll-to-top');
    if (!btn) return;

    var THRESHOLD = 300; /* px scroll sebelum tombol muncul */

    function toggleBtn() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > THRESHOLD) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleBtn, { passive: true });
    toggleBtn();
  }

  /* ── Inject HTML jika belum ada di DOM ── */
  function injectElements() {
    /* Progress bar container */
    if (!document.getElementById('reading-progress-bar')) {
      var bar = document.createElement('div');
      bar.id = 'reading-progress-bar';
      document.body.insertBefore(bar, document.body.firstChild);
    }

    /* Scroll-to-top button */
    if (!document.getElementById('scroll-to-top')) {
      var btn = document.createElement('button');
      btn.id = 'scroll-to-top';
      btn.setAttribute('aria-label', 'Kembali ke atas');
      btn.setAttribute('title', 'Kembali ke atas');
      /* Ikon panah atas (SVG inline) */
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
      document.body.appendChild(btn);
    }
  }

  /* ── Init ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectElements();
      initProgressBar();
      initScrollToTop();
    });
  } else {
    injectElements();
    initProgressBar();
    initScrollToTop();
  }

})();
