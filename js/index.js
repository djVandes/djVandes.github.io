document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });
});



document.addEventListener('click', function (e) {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');

    // If nav is open and the click is not inside the nav or navToggle, then close nav
    if (document.body.classList.contains('nav-open') &&
        !nav.contains(e.target) &&
        !navToggle.contains(e.target)) {
      document.body.classList.remove('nav-open');
    }
  });