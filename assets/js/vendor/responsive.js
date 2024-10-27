// ajustarLogo.js
function ajustarLogo() {
    const logo = document.querySelector('.logo');
    if (window.innerWidth <= 767) {
        logo.style.width = '50px';
        logo.style.height = 'auto';
    } else {
        logo.style.width = 'initial';
    }
}

window.addEventListener('load', ajustarLogo);
window.addEventListener('resize', ajustarLogo);