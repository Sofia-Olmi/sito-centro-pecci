// Inizializzazione Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper1', {
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
        wrapper.style.transform = `translateY(-${currentIndex * 300}px)`;
    });
});


// secondo swiper home
document.addEventListener('DOMContentLoaded', function() {
    const swiperElement = document.querySelector('.swiper2');
    const prevButton = document.querySelector('.swiper-button-prev-custom');
    const nextButton = document.querySelector('.swiper-button-next-custom');
    
    if (swiperElement && prevButton && nextButton) {
        // Per swiper web component, accedi all'istanza tramite .swiper
        prevButton.addEventListener('click', () => {
            swiperElement.swiper.slidePrev();
        });
        
        nextButton.addEventListener('click', () => {
            swiperElement.swiper.slideNext();
        });
    }
});
