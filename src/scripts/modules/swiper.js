import Swiper, { Navigation, Pagination, EffectCoverflow, EffectCards } from 'swiper';
Swiper.use([Navigation,Pagination,EffectCoverflow,EffectCards]);

const clientSlider = document.querySelector('.clients-slider');

if(clientSlider) {
  new Swiper(clientSlider, {
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

const mainSliders = document.querySelectorAll('.main-slider');
if(mainSliders) {
  mainSliders.forEach(slider => {
    const nextBtn = slider.parentNode.querySelector('.swiper-button-next');
    const prevBtn = slider.parentNode.querySelector('.swiper-button-prev');
    const pag = slider.parentNode.querySelector('.swiper-pagination');

    new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 30,

        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },

        pagination: {
          el: pag,
          dynamicBullets: true,
          clickable: true
        }
    });
  });
}
