// secondo swiper home
document.addEventListener('DOMContentLoaded', function() {
    const swiperElement = document.querySelector('.swiper2');
    const prevButton = document.querySelector('.swiper-button-prev-custom');
    const nextButton = document.querySelector('.swiper-button-next-custom');

    // Funzione per aggiornare slides-per-view in base alla larghezza
    function updateSwiperSlides() {
        if (swiperElement) {
            if (window.innerWidth < 576) {
                swiperElement.setAttribute('slides-per-view', '1');
            } else if (window.innerWidth < 1250) {
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

    // Nasconde le linee "data" negli swiper-slide su mobile
    if (window.innerWidth < 768) {
        const dateElements = document.querySelectorAll('.swiper2 .slide-info p.color-grigio-scuro');
        dateElements.forEach(p => p.style.display = 'none');
    }
});
