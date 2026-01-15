// Lightbox per la mappa
document.addEventListener('DOMContentLoaded', function() {
    const mappaImg = document.getElementById('mappaImg');
    const iconaIngrandimento = document.querySelector('#mappaImg').closest('.row').querySelector('.open-in-full img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    // Funzione per aprire il lightbox
    function apriLightbox() {
        lightbox.classList.add('active');
        lightboxImg.src = mappaImg.src;
        document.body.style.overflow = 'hidden';
    }

    // Apri lightbox quando clicchi sull'immagine della mappa
    if (mappaImg) {
        mappaImg.addEventListener('click', apriLightbox);
    }

    // Apri lightbox quando clicchi sull'icona di ingrandimento
    if (iconaIngrandimento) {
        iconaIngrandimento.addEventListener('click', apriLightbox);
        iconaIngrandimento.style.cursor = 'pointer'; // Aggiungi cursor pointer
    }

    // Chiudi lightbox cliccando sulla X
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function(e) {
            e.stopPropagation();
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Chiudi lightbox cliccando sullo sfondo
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Chiudi lightbox premendo ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});