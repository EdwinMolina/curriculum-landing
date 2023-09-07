let menuIcon = document.querySelector('.menu-hamburguesa');
let menuClose = document.querySelector('.menu-close');
let menu = document.querySelector('.menu');

menuIcon.addEventListener('click', ()=> menu.classList.add('show-menu'));
menuClose.addEventListener('click', ()=> menu.classList.remove('show-menu'));

