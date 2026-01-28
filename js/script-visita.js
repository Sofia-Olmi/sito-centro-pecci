// Collapsible sections
document.addEventListener('DOMContentLoaded', function() {
    const collapsibleSections = document.querySelectorAll('.collapsible-section');
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    const swipeThreshold = 10; // pixels
    const tapTimeThreshold = 300; // ms

    function isTap(touchEndX, touchEndY, touchEndTime) {
        const distance = Math.sqrt(Math.pow(touchEndX - touchStartX, 2) + Math.pow(touchEndY - touchStartY, 2));
        const timeDiff = touchEndTime - touchStartTime;
        return distance < swipeThreshold && timeDiff < tapTimeThreshold;
    }

    function closeAllSections(except = null) {
        collapsibleSections.forEach(sec => {
            if (sec !== except && window.innerWidth < 992) {
                sec.classList.remove('open');
            }
        });
    }

    function handleSectionInteraction(section, target) {
        const header = section.querySelector('.collapsible-header');
        const content = section.querySelector('.collapsible-content');

        if (target === header) {
            // Toggle this section
            if (window.innerWidth < 992) {
                if (section.classList.contains('open')) {
                    section.classList.remove('open');
                } else {
                    closeAllSections(section);
                    section.classList.add('open');
                }
            }
        } else if (target === content || content.contains(target)) {
            // Close this section when tapping content
            if (window.innerWidth < 992) {
                section.classList.remove('open');
            }
        }
    }

    collapsibleSections.forEach(section => {
        const header = section.querySelector('.collapsible-header');
        const content = section.querySelector('.collapsible-content');

        // Touch events for swipe detection
        section.addEventListener('touchstart', function(e) {
            if (window.innerWidth >= 992) return;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
        }, { passive: true });

        section.addEventListener('touchend', function(e) {
            if (window.innerWidth >= 992) return;
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndTime = Date.now();

            if (isTap(touchEndX, touchEndY, touchEndTime)) {
                handleSectionInteraction(section, e.target);
            }
            // If it's a swipe, do nothing (don't close)
        });

        // Click events for desktop and as fallback
        header.addEventListener('click', function(e) {
            if (window.innerWidth >= 992) return;
            handleSectionInteraction(section, e.target);
        });

        content.addEventListener('click', function(e) {
            if (window.innerWidth >= 992) return;
            handleSectionInteraction(section, e.target);
        });
    });

    function updateCollapsibleSections() {
        const isLarge = window.innerWidth >= 992;
        collapsibleSections.forEach(section => {
            if (isLarge) {
                section.classList.add('open');
            } else {
                section.classList.remove('open');
            }
        });
    }

    updateCollapsibleSections();
    window.addEventListener('resize', updateCollapsibleSections);
});

// Lightbox per la mappa
document.addEventListener('DOMContentLoaded', function() {
   
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
