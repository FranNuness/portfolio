document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.menu');

    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    };

    hamburgerBtn.addEventListener('click', toggleMenu);
});
