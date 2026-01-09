// Inizializzazione Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiperEl = document.querySelector('swiper-container');

    if (swiperEl) {
        const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            pagination: {
                clickable: true,
                dynamicBullets: true,
            },
            navigation: true,
            breakpoints: {
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            },
        };

        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
        
        console.log('Swiper inizializzato correttamente');
    } else {
        console.error('Swiper container non trovato');
    }
});