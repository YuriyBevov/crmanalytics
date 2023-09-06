import { bodyLocker } from "../utils/functions";
const navOpener = document.querySelector('.main-nav-opener');

if(navOpener) {
  const navCloser = document.querySelector('.main-nav-closer');
  const nav = document.querySelector('.main-nav');
  const overlay = nav.querySelector('.main-nav__container');

  if(navCloser && nav) {
    const init = (evt) => {
      evt.stopPropagation();

      bodyLocker(true);
      nav.classList.add('active');
      navOpener.removeEventListener('click', init);
      navCloser.addEventListener('click', closeNavHandler);
      window.addEventListener('click', onOverlayClickHandler);
      document.addEventListener('keydown', onEscClickHandler);
    }

    const refresh = () => {
      bodyLocker(false);
      nav.classList.remove('active');
      navCloser.removeEventListener('click', closeNavHandler);
      window.removeEventListener('click', onOverlayClickHandler);
      document.removeEventListener('keydown', onEscClickHandler);
      navOpener.addEventListener('click', init);
    }

    const closeNavHandler = () => {
      refresh();
    }

    const onOverlayClickHandler = (evt) => {
      if(evt.target !== overlay) {
        refresh();
      }
    }

    const onEscClickHandler = (evt) => {
      console.log(evt.key)
      if(evt.key === 'Escape' || evt.key === 27) {
        refresh();
      }
    }

    navOpener.addEventListener('click', init);
  }
}
