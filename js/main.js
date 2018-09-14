//mobile menu toggling
const hamburger = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const footer = document.querySelector('.f-mobile');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  footer.classList.toggle('f-mobile-disappear');
});

//dynamic footer year and date
const footerDate = document.querySelectorAll('.footer-date');
const date = new Date();
const year = date.getFullYear();
footerDate.forEach(item => (item.innerHTML = year));

$(document).ready(function() {
      $('.thing').slick({
        arrows: true,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              autoplay: true,
              autoplaySpeed: 3500,
              // fade: true,
              cssEase: 'linear'
            }
          }
        ]
      });
    });
