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