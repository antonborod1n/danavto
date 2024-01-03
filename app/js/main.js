const burger = document.querySelector('.top__burger-btn');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
  menu.classList.toggle('active');
});
