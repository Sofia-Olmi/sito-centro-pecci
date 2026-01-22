// Funzione per gestire la visibilità delle ancore in base al dispositivo
function toggleAnchorsVisibility() {
    const navListContainer = document.querySelector('.nav-list-container');
    if (navListContainer) {
        // Nasconde le ancore in mobile (schermi < 1200px), le mantiene visibili in desktop
        if (window.innerWidth < 1200) {
            navListContainer.style.display = 'none';
        } else {
            navListContainer.style.display = 'block';
        }
    }
}

// Lightbox per la mappa
document.addEventListener('DOMContentLoaded', function() {
    // Gestisce la visibilità iniziale delle ancore
    toggleAnchorsVisibility();

    // Gestisce la visibilità delle ancore al resize della finestra
    window.addEventListener('resize', toggleAnchorsVisibility);
    const mappaImg = document.getElementById('mappaImg');
    const openInFullIcon = document.querySelector('.open-in-full');
    const lightbox1 = document.getElementById('lightbox1');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    // Funzione per aprire la lightbox della mappa
    function openMapLightbox() {
        if (mappaImg && lightbox1 && lightboxImg) {
            lightboxImg.src = mappaImg.src;
            lightbox1.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Funzione per chiudere la lightbox della mappa
    function closeMapLightbox() {
        if (lightbox1) {
            lightbox1.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // Apri lightbox cliccando sull'immagine
    if (mappaImg) {
        mappaImg.addEventListener('click', openMapLightbox);
    }

    // Apri lightbox cliccando sull'icona di ingrandimento
    if (openInFullIcon) {
        openInFullIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            openMapLightbox();
        });
    }

    // Chiudi lightbox cliccando sulla X
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMapLightbox();
        });
    }

    // Chiudi lightbox cliccando sullo sfondo
    if (lightbox1) {
        lightbox1.addEventListener('click', function(e) {
            if (e.target === lightbox1) {
                closeMapLightbox();
            }
        });
    }

    // Chiudi lightbox con tasto ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox1 && lightbox1.classList.contains('active')) {
            closeMapLightbox();
        }
    });
});
