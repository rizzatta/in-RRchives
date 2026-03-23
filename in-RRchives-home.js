let lastScrollY = window.scrollY;
const navBar = document.querySelector('.main-navigation-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10 && window.scrollY > lastScrollY) {
        navBar.classList.add('nav-hidden');
    } else {
        navBar.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});