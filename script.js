window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const mainHeader = document.getElementById('mainHeader');
    const headerHeight = mainHeader.offsetHeight;

    if (window.scrollY >= headerHeight) {
        navbar.classList.add('fixed');
        document.body.classList.add('scrolled');
    } else {
        navbar.classList.remove('fixed');
        document.body.classList.remove('scrolled');
    }
});
