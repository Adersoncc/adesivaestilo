window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const mainHeader = document.querySelector('.main-header');
    
    // Altura do cabeçalho principal para definir o momento em que a barra gruda
    const headerHeight = mainHeader.offsetHeight;

    if (window.scrollY >= headerHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
