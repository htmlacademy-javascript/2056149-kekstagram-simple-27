import { isEscapeKey } from './util.js';

const mainPage = document.querySelector('body');
const photoWindow = document.querySelector('.img-upload__overlay');
const uploadButton = document.querySelector('.img-upload__input');
const closeButton = document.querySelector('.img-upload__cancel');

const openOverlay = () => {
  photoWindow.classList.remove('hidden');
  mainPage.classList.add('modal-open');
};

const closeOverlay = () => {
  photoWindow.classList.add('hidden');
  mainPage.classList.remove('modal-open');
};

const onOpenButtonClick = () => {
  uploadButton.addEventListener('click', () => {
    openOverlay();
  });
};

const onCloseButtonClick = () => {
  closeButton.addEventListener('click', () => {
    closeOverlay();
  });
};

const onPhotoWindowEscKeydown = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      closeOverlay();
    }
  });
};


export { onCloseButtonClick, onOpenButtonClick, onPhotoWindowEscKeydown };
