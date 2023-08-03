import Swiper, { Navigation, EffectCoverflow, EffectCards } from 'swiper';
Swiper.use([Navigation,EffectCoverflow,EffectCards]);

const sliders = document.querySelectorAll('.main-slider');

if(sliders) {
  sliders.forEach(slider => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 60,
      loop: true,

      navigation: {
        nextEl: '.main-slider-container .swiper-button-next',
        prevEl: '.main-slider-container .swiper-button-prev',
      }
    });
  });
};

const clientSlider = document.querySelector('.clients-slider');

if(clientSlider) {
  new Swiper(clientSlider, {
    /*effect: "cards",
    slidesPerView: 3,
    cardsEffect: {
      grabCursor: true,
      perSlideOffset: 80,
      perSlideRotate: 1,
      rotate: false,
      slideShadows: false*/
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 2,
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },

      navigation: {
        nextEl: '.clients-slider-container .swiper-button-next',
        prevEl: '.clients-slider-container .swiper-button-prev',
      }
  });
}
