document.addEventListener('DOMContentLoaded', function() {
    // Function to equalize heights of .filtr-item elements
    function equalizeHeights() {
        const items = document.querySelectorAll('.filtr-item');
        let maxHeight = 0;

        // Reset heights to auto and find max height
        items.forEach(item => {
            item.style.height = 'auto';
            const height = item.offsetHeight;
            if (height > maxHeight) maxHeight = height;
        });

        // Set all items to max height
        items.forEach(item => {
            item.style.height = maxHeight + 'px';
        });
    }

    // Initialize Filterizr (vanilla JS version)
    const filterizr = new Filterizr('.filtr-container');

    // Equalize heights initially
    equalizeHeights();

    // Get the select element
    const select = document.getElementById('auto');

    // Add event listener to select for filtering
    select.addEventListener('change', function() {
        const selectedOption = select.options[select.selectedIndex];
        const selectedValue = selectedOption.getAttribute('data-filter');
        filterizr.filter(selectedValue);

        // Re-equalize heights after filtering
        equalizeHeights();
    });

    // Add event listener for window resize to recalculate heights and positions
    window.addEventListener('resize', function() {
        equalizeHeights();
        filterizr.render();
    });

    // Handle nav-link clicks for active state and filtering
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all nav-links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            // Get filter value and apply filter
            const filterValue = this.getAttribute('data-filter');
            filterizr.filter(filterValue);
            // Re-equalize heights after filtering
            equalizeHeights();
        });
    });

    // Check URL parameters for filter and set active accordingly
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam) {
        const targetLink = document.querySelector(`.nav-link[data-filter="${filterParam}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
            filterizr.filter(filterParam);
            equalizeHeights();
        } else {
            // Fallback to default if invalid filter
            navLinks[0].classList.add('active');
        }
    } else {
        // Set default active state on "Tutti" (first nav-link) if no param
        if (navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
    }
});
