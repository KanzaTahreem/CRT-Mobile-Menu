const barMenu = document.querySelector('.menu-bars');
const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.cross');
const menuItems = document.querySelectorAll('.menu > li');
const desktopNav = document.querySelector('#desktop-nav');

barMenu.addEventListener('click', () => {
  popUp.classList.remove('hidden');
  close.classList.remove('hidden');
  barMenu.classList.add('hidden');
  desktopNav.classList.remove('hidden');
});

close.addEventListener('click', () => {
  popUp.classList.add('hidden');
  close.classList.add('hidden');
  barMenu.classList.remove('hidden');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    popUp.classList.add('hidden');
    close.classList.add('hidden');
    barMenu.classList.remove('hidden');
  });
});