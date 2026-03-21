<script>
    let lastScrollY = window.scrollY;
    const navBar = document.querySelector('.main-navigation-bar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling Down - Hide Nav
            navBar.classList.add('nav-hidden');
        } else {
            // Scrolling Up - Show Nav
            navBar.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
    });
</script>