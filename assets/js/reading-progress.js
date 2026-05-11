/**
 * Reading Progress Bar + Scroll-to-Top
 * assets/js/reading-progress.js
 * Robust init: handles Chirpy's deferred JS pipeline
 */
(function () {
  'use strict';

  var _done = false;

  function injectElements() {
    if (!document.body) return false;

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

    return true;
  }

  function attachHandlers() {
    var bar = document.getElementById('reading-progress-bar');
    var btn = document.getElementById('scroll-to-top');
    if (!bar || !btn) return;

    function updateBar() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0) + '%';
    }

    function toggleBtn() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      btn.classList.toggle('is-visible', scrollTop > 300);
    }

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      updateBar();
      toggleBtn();
    }, { passive: true });

    updateBar();
    toggleBtn();
  }

  function init() {
    if (_done) return;
    if (!injectElements()) return;
    attachHandlers();
    _done = true;
  }

  /* Layer 1: DOMContentLoaded */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Layer 2: window.onload fallback */
  window.addEventListener('load', init);

  /* Layer 3: setTimeout kasar — jaga-jaga Chirpy delay */
  setTimeout(init, 800);

})();
