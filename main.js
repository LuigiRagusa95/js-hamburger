const openBtn = document.querySelector('.header-right>a');
const closeBtn = document.querySelector('.hamburger-menu>a');
const menuHidden = document.querySelector('.hamburger-menu');

openBtn.addEventListener('click', function () {
    menuHidden.classList.add('active');
});

closeBtn.addEventListener('click', function () {
    menuHidden.classList.remove('active');
});
