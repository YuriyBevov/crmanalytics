import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const staff = document.querySelector('.staff-slider');

if(staff) {
  new Swiper(staff, {
    slidesPerView: 1,
    spaceBetween: 60,

    navigation: {
      nextEl: '.staff-slider-container .swiper-button-next',
      prevEl: '.staff-slider-container .swiper-button-prev',
    }
  });
};


