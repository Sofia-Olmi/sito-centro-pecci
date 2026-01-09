document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn-cerca-educazione');
    const select = document.getElementById('auto');
    const cols = document.querySelectorAll('.col-md-4');

    button.addEventListener('click', function() {
        const selectedValue = select.value;

        cols.forEach(col => {
            const card = col.querySelector('.card-mostra');
            if (card && card.classList.contains(selectedValue)) {
                col.classList.remove('d-none');
                col.classList.add('d-block');
            } else {
                col.classList.remove('d-block');
                col.classList.add('d-none');
            }
        });
    });
});