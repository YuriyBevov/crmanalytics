import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const sliders = document.querySelectorAll('.main-slider');

if(sliders) {
  sliders.forEach(slider => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 60,

      navigation: {
        nextEl: '.main-slider-container .swiper-button-next',
        prevEl: '.main-slider-container .swiper-button-prev',
      }
    });
  });
};
