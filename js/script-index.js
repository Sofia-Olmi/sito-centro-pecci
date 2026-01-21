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
    
    // Calcola la posizione basandosi sulla larghezza dello schermo
    const isMobile = window.innerWidth <= 768;
    const slideHeight = isMobile ? 300 : 450;
    
    wrapper.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
});

// Aggiorna anche al resize della finestra
window.addEventListener('resize', function() {
    const isMobile = window.innerWidth <= 768;
    const slideHeight = isMobile ? 300 : 450;
    wrapper.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
});


// secondo swiper home
document.addEventListener('DOMContentLoaded', function() {
    const swiperElement = document.querySelector('.swiper2');
    const prevButton = document.querySelector('.swiper-button-prev-custom');
    const nextButton = document.querySelector('.swiper-button-next-custom');

    // Funzione per aggiornare slides-per-view in base alla larghezza
    function updateSwiperSlides() {
        if (swiperElement) {
            if (window.innerWidth < 1250) {
                swiperElement.setAttribute('slides-per-view', '2');
            } else {
                swiperElement.setAttribute('slides-per-view', '3');
            }
            // Aggiorna il swiper dopo aver cambiato l'attributo
            if (swiperElement.swiper) {
                swiperElement.swiper.update();
            }
        }
    }

    // Chiama la funzione all'avvio
    updateSwiperSlides();

    // Aggiungi listener per il resize della finestra
    window.addEventListener('resize', updateSwiperSlides);

    if (swiperElement) {
        // Collega le frecce personalizzate al swiper web component
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                swiperElement.swiper.slidePrev();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                swiperElement.swiper.slideNext();
            });
        }
    }

    // Nasconde il secondo paragrafo su mobile
    if (window.innerWidth < 768) {
        const para = document.getElementById('paragrafo-centro-pecci');
        if (para) {
            para.style.display = 'none';
        }
    }
});
