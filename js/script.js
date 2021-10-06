(function($) {
  // Модуль .hamburger
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  hamburger.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.classList.toggle('fa-bars');
    event.target.classList.toggle('fa-times');
    nav.classList.toggle('is-show');
  });

  // Модуль .tab
  function tabHandler(tab) {
    const tabLink = tab.querySelector('.tab__links');
    const tabItem = tab.querySelectorAll('.tab__item');
    const tabContent = tab.querySelectorAll('.tab__content');
    tabLink.onclick = function (event) {
      event.preventDefault();
      let item = event.target.closest('.tab__item');
      if (!item) return;
      tabItem.forEach((el) => el.classList.remove('is-active'));
      tabContent.forEach((el) => el.classList.remove('is-show'));
      item.classList.add('is-active');
      let indexContent = event.target.dataset.showContent;
      tabContent[indexContent].classList.add('is-show');
    };
  }
  const tabs = document.querySelectorAll('.tab');
  if(tabs.length != 0) {
    tabs.forEach(tabHandler);
  }

  // Модуль .alert
  function alertHandler(close) {
    close.onclick = function (event) {
      let alertBlock = event.target.closest('.alert');
      if(!alertBlock) return;
      alertBlock.classList.add('is-hide');
      setTimeout(function() {
        alertBlock.remove();
      }, 400);
    };
  }
  const alertClose = document.querySelectorAll('.alert__close');
  if(alertClose.length != 0) {
    alertClose.forEach(alertHandler);
  }

  // Слайдеры
  var slider = $('.slider');
  // Слайдер баннеров
  $(slider).closest('.slider-banner').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false
        }
      }
    ]
  });
  // Слайдер купили на этой недели
  $(slider).closest('.slider-img').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // arrows: false
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAvLyDQnNC+0LTRg9C70YwgLmhhbWJ1cmdlclxyXG4gIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XHJcbiAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWJhcnMnKTtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmYS10aW1lcycpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNob3cnKTtcclxuICB9KTtcclxuXHJcbiAgLy8g0JzQvtC00YPQu9GMIC50YWJcclxuICBmdW5jdGlvbiB0YWJIYW5kbGVyKHRhYikge1xyXG4gICAgY29uc3QgdGFiTGluayA9IHRhYi5xdWVyeVNlbGVjdG9yKCcudGFiX19saW5rcycpO1xyXG4gICAgY29uc3QgdGFiSXRlbSA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX19pdGVtJyk7XHJcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfX2NvbnRlbnQnKTtcclxuICAgIHRhYkxpbmsub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgaXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFiX19pdGVtJyk7XHJcbiAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xyXG4gICAgICB0YWJJdGVtLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKSk7XHJcbiAgICAgIHRhYkNvbnRlbnQuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKSk7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgIGxldCBpbmRleENvbnRlbnQgPSBldmVudC50YXJnZXQuZGF0YXNldC5zaG93Q29udGVudDtcclxuICAgICAgdGFiQ29udGVudFtpbmRleENvbnRlbnRdLmNsYXNzTGlzdC5hZGQoJ2lzLXNob3cnKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XHJcbiAgaWYodGFicy5sZW5ndGggIT0gMCkge1xyXG4gICAgdGFicy5mb3JFYWNoKHRhYkhhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgLy8g0JzQvtC00YPQu9GMIC5hbGVydFxyXG4gIGZ1bmN0aW9uIGFsZXJ0SGFuZGxlcihjbG9zZSkge1xyXG4gICAgY2xvc2Uub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBsZXQgYWxlcnRCbG9jayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYWxlcnQnKTtcclxuICAgICAgaWYoIWFsZXJ0QmxvY2spIHJldHVybjtcclxuICAgICAgYWxlcnRCbG9jay5jbGFzc0xpc3QuYWRkKCdpcy1oaWRlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYWxlcnRCbG9jay5yZW1vdmUoKTtcclxuICAgICAgfSwgNDAwKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGFsZXJ0Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnRfX2Nsb3NlJyk7XHJcbiAgaWYoYWxlcnRDbG9zZS5sZW5ndGggIT0gMCkge1xyXG4gICAgYWxlcnRDbG9zZS5mb3JFYWNoKGFsZXJ0SGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICAvLyDQodC70LDQudC00LXRgNGLXHJcbiAgdmFyIHNsaWRlciA9ICQoJy5zbGlkZXInKTtcclxuICAvLyDQodC70LDQudC00LXRgCDQsdCw0L3QvdC10YDQvtCyXHJcbiAgJChzbGlkZXIpLmNsb3Nlc3QoJy5zbGlkZXItYmFubmVyJykuc2xpY2soe1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgc3BlZWQ6IDIwMDAsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9KTtcclxuICAvLyDQodC70LDQudC00LXRgCDQutGD0L/QuNC70Lgg0L3QsCDRjdGC0L7QuSDQvdC10LTQtdC70LhcclxuICAkKHNsaWRlcikuY2xvc2VzdCgnLnNsaWRlci1pbWcnKS5zbGljayh7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAvLyBhcnJvd3M6IGZhbHNlXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDYwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2NDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
