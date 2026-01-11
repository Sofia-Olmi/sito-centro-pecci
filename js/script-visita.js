// Lightbox per la mappa
document.addEventListener('DOMContentLoaded', function() {
    const mappaImg = document.getElementById('mappaImg');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    // Apri lightbox quando clicchi sull'immagine
    if (mappaImg) {
        mappaImg.addEventListener('click', function() {
            lightbox.classList.add('active');
            lightboxImg.src = this.src;
            document.body.style.overflow = 'hidden'; // Previeni lo scroll della pagina
        });
    }

    // Chiudi lightbox cliccando sulla X
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function(e) {
            e.stopPropagation();
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Ripristina lo scroll
        });
    }

    // Chiudi lightbox cliccando sullo sfondo
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = ''; // Ripristina lo scroll
            }
        });
    }

    // Chiudi lightbox premendo ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Ripristina lo scroll
        }
    });
});