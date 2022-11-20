import { renderGetErrorMessage } from './error-message.js';
import { drawPhotos } from './draw-photos.js';
import { getData } from './api.js';

const GET_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';

const loadImages = () => {
  getData(GET_URL, drawPhotos, renderGetErrorMessage);
};

export { loadImages };
