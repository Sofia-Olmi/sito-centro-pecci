// Inizializzazione Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    console.log('Swiper inizializzato correttamente');

    // Connetti slider verticale a quello orizzontale
    const wrapper = document.getElementById('verticalSliderWrapper');
    let currentIndex = 0;
    wrapper.style.transform = 'translateY(0)';

    swiper.on('slideChange', function() {
        currentIndex = swiper.realIndex;
        wrapper.style.transform = `translateY(-${currentIndex * 450}px)`;
    });
});