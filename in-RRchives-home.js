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