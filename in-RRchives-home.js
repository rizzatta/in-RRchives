// Dynamic Navigation Bar
let lastScrollTop = 0;
const navBar = document.querySelector('.main-navigation-bar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navBar.classList.add('nav-hidden');
    } else {
        navBar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Profile Bio Expansion
document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.querySelector('.profile-bio__expand-button');
    const bioSection = document.querySelector('.profile-bio');

    if (expandButton && bioSection) {
        expandButton.addEventListener('click', () => {
            bioSection.classList.toggle('is-expanded');

            if (bioSection.classList.contains('is-expanded')) {
                console.log("Biography expanded");
            }
        });
    }
});

