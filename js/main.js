const buttonSearch = document.querySelector('.button-search-title');
const modalSearch = document.querySelector('.search-form');
let open = false;

function openModal() {
    if (open === false) {
        modalSearch.classList.remove('vissually-hidden');
        open = true;
    } else {
        modalSearch.classList.add('vissually-hidden');
        open = false; 
    }
}
buttonSearch.addEventListener('click', openModal);
