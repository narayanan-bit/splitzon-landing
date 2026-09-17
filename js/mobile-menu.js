// Mobile hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburgerBtn');
  var menu = document.getElementById('mobileMenu');

  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a link inside it is clicked
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on resize back to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1150) {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
