const counters = {
            intero: 1,
            ridotto: 0,
            famiglie: 0
        };

        function openLightbox() {
            document.getElementById('lightbox').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function updateCounter(type, change) {
            counters[type] = Math.max(0, counters[type] + change);
            document.getElementById('counter-' + type).textContent = counters[type];
        }

        function submitForm(e) {
            e.preventDefault();
            alert('Form inviato! Totale biglietti: ' + 
                  (counters.intero + counters.ridotto + counters.famiglie));
            closeLightbox();
        }

        // Chiudi cliccando fuori dal contenuto
        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });

        // Chiudi con tasto ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        // Imposta data minima a oggi
        const dateInput = document.querySelector('input[type="date"]');
        if (dateInput) {
            dateInput.min = new Date().toISOString().split('T')[0];
        }