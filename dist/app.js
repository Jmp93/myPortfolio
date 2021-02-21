const burger = document.querySelector('.mobile');
const nav = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
