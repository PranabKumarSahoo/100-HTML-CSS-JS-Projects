const searchBtn = document.querySelector('.searchBtn');
const searchInput = document.querySelector('.searchInput');

searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
});