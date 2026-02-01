document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', function () {
        var isOpen = hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});
