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

    const carouselContainer = document.querySelector('.carousel__container');
    const slides = document.querySelectorAll('.carousel__slide');
    const prevButton = document.querySelector('.carousel__button--left');
    const nextButton = document.querySelector('.carousel__button--right');
    const indicators = document.querySelectorAll('.carousel__indicator');
    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        const offset = -currentIndex * slideWidth;
        carouselContainer.style.transform = `translateX(${offset}px)`;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Initialize the carousel
    updateCarousel();
});