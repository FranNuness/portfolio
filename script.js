document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.menu');

    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    };

    hamburgerBtn.addEventListener('click', toggleMenu);
});
const interface = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('.header');
  } else {
    // Se estiver no topo (rolagem menor ou igual a 10px), remove a classe
    navbar.classList.remove('.header');
  }
});