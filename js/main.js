import { addFormAction } from './form.js';
import { drawPhotos } from './draw-photos.js';
import { getData } from './api.js';
import { addSubmitMessage } from './form-submit-message.js';
import { addEffects } from './effect-slider.js';

getData((photos) => {
  drawPhotos(photos);
});

addFormAction();
addSubmitMessage();
addEffects();
