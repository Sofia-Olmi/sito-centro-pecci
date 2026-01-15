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
});
