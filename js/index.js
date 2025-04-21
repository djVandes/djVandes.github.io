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

    // const carouselContainer = document.querySelector('.carousel__container');
    // const slides = document.querySelectorAll('.carousel__slide');
    // const prevButton = document.querySelector('.carousel__button--left');
    // const nextButton = document.querySelector('.carousel__button--right');
    // const indicators = document.querySelectorAll('.carousel__indicator');
    // let currentIndex = 0;
    // let autoplayInterval;
    
    // function updateCarousel() {
    //     const slideWidth = slides[0].clientWidth;
    //     const offset = -currentIndex * slideWidth;
    //     carouselContainer.style.transform = `translateX(${offset}px)`;
    
    //     indicators.forEach((indicator, index) => {
    //         indicator.classList.toggle('active', index === currentIndex);
    //     });
    // }
    
    // function startAutoplay() {
    //     autoplayInterval = setInterval(() => {
    //         currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    //         updateCarousel();
    //     }, 3000); // Change slide every 3 seconds
    // }
    
    // function stopAutoplay() {
    //     clearInterval(autoplayInterval);
    // }
    
    // prevButton.addEventListener('click', () => {
    //     currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    //     updateCarousel();
    //     stopAutoplay();
    //     startAutoplay();
    // });
    
    // nextButton.addEventListener('click', () => {
    //     currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    //     updateCarousel();
    //     stopAutoplay();
    //     startAutoplay();
    // });
    
    // indicators.forEach((indicator, index) => {
    //     indicator.addEventListener('click', () => {
    //         currentIndex = index;
    //         updateCarousel();
    //         stopAutoplay();
    //         startAutoplay();
    //     });
    // });
    
    // // Initialize the carousel
    // updateCarousel();
    // startAutoplay();

    
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