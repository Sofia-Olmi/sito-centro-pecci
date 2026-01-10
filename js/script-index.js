// Inizializzazione Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: false,
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
