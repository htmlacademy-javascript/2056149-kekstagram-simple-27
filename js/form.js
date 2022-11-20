import { changeScale, resetScale } from './photo-scale.js';
import { sendData } from './api.js';
import { renderPostErrorMessage } from './error-message.js';
import { renderSuccessMessage } from './success-message.js';
import { resetEffects } from './effect-slider.js';
import { addEffects } from './effect-slider.js';

const POST_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFormClose = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикация в Kekstagram...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error-text',
});

const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addListeners();
};

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  pristine.reset();
  removeListeners();
  resetScale();
  resetEffects();
};

const onUploadFormCloseClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

function addListeners() {
  uploadFormClose.addEventListener('click', onUploadFormCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function removeListeners() {
  uploadFormClose.removeEventListener('click', onUploadFormCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onUploadFileChange = () => {
  openModal();
};

const errorCallback = () => {
  renderPostErrorMessage();
  unblockSubmitButton();
};

const successCallback = () => {
  renderSuccessMessage();
  unblockSubmitButton();
  closeModal();
};

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    blockSubmitButton();
    sendData(POST_URL, successCallback, errorCallback, new FormData(evt.target),
    );
  }
};

const addFormAction = () => {
  changeScale();
  addEffects();
  uploadFile.addEventListener('change', onUploadFileChange);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
};

export { addFormAction };
