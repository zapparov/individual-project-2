const menuIcon = document.querySelector('.header__burger-menu');
const sidebar = document.querySelector('.header__modal-wrapper');
const menuLink = document.querySelectorAll('.header__modal-nav-link');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  menuIcon.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

menuLink.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuIcon.classList.remove('active');
    body.classList.toggle('no-scroll');
  });
});

console.log('first');
