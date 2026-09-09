document.addEventListener("DOMContentLoaded", () => {
    // 1. Rolagem suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Lógica dos Carrosséis nos Cards
    document.querySelectorAll('.carousel-container').forEach(container => {
        const track = container.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextBtn = container.querySelector('.next-btn');
        const prevBtn = container.querySelector('.prev-btn');
        
        let currentIndex = 0;

        function updateSlidePosition() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        });
    });
});
