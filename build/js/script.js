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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYngteC1jaXJjbGUnKTtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdieC1tZW51Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycpO1xyXG4gIH0pO1xyXG4gIHdpbmRvdy5vbnNjcm9sbCA9IChldmVudCkgPT4ge1xyXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdieC14LWNpcmNsZScpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdieC1tZW51Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpO1xyXG4gIH07XHJcbn0pKCk7XHJcbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
