document.addEventListener('DOMContentLoaded', function() {
    // Initialize Filterizr (vanilla JS version)
    const filterizr = new Filterizr('.filtr-container');

    // Get the select element
    const select = document.getElementById('auto');

    // Add event listener to select for filtering
    select.addEventListener('change', function() {
        const selectedOption = select.options[select.selectedIndex];
        const selectedValue = selectedOption.getAttribute('data-filter');
        filterizr.filter(selectedValue);
    });
});
