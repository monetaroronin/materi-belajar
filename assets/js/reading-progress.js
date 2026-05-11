/**
 * Reading Progress Bar + Scroll-to-Top Button
 * Simpan di: assets/js/reading-progress.js
 */
(function () {
  'use strict';

  function injectElements() {
    if (!document.getElementById('reading-progress-bar')) {
      var bar = document.createElement('div');
      bar.id = 'reading-progress-bar';
      document.body.insertBefore(bar, document.body.firstChild);
    }
    if (!document.getElementById('scroll-to-top')) {
      var btn = document.createElement('button');
      btn.id = 'scroll-to-top';
      btn.setAttribute('aria-label', 'Kembali ke atas');
      btn.setAttribute('title', 'Kembali ke atas');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
      document.body.appendChild(btn);
    }
  }

  function initProgressBar() {
    var bar = document.getElementById('reading-progress-bar');
    if (!bar) return;
    function updateBar() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0) + '%';
    }
    window.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  function initScrollToTop() {
    var btn = document.getElementById('scroll-to-top');
    if (!btn) return;
    function toggleBtn() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      btn.classList.toggle('is-visible', scrollTop > 300);
    }
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', toggleBtn, { passive: true });
    toggleBtn();
  }

  function init() {
    injectElements();
    initProgressBar();
    initScrollToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
