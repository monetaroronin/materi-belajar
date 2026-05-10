// Materi Belajar — Card scroll animation
// Taruh file ini di: assets/js/card-animate.js
// Lalu daftarkan di _config.yml > jekyll-archives atau custom inject

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('#post-list .card-wrapper');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animasi sekali saja
        }
      });
    },
    {
      threshold: 0.08,   // tampil saat 8% card masuk viewport
      rootMargin: '0px 0px -40px 0px'
    }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
});
