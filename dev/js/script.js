(function() {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  menu.addEventListener('click', (event) => {
    event.target.classList.toggle('bx-x-circle');
    event.target.classList.toggle('bx-menu');
    nav.classList.toggle('is-show');
  });
  window.onscroll = (event) => {
    menu.classList.remove('bx-x-circle');
    menu.classList.add('bx-menu');
    nav.classList.remove('is-show');
  };
})();
