const SCALE_STEP = 25;
const MAX_SCALE_LEVEL = 100;
const MIN_SCALE_LEVEL = 25;
const PERCENT_DIVIDER = 100;

const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');

let scaleValue = 100;

const decreaseScale = () => {
  if (scaleValue > MIN_SCALE_LEVEL) {
    scaleValue -= SCALE_STEP;
    controlValue.value = `${scaleValue}%`;
    photoPreview.style.transform = `scale(${scaleValue / PERCENT_DIVIDER})`;
  }
};

const increaseScale = () => {
  if (scaleValue < MAX_SCALE_LEVEL) {
    scaleValue += SCALE_STEP;
    controlValue.value = `${scaleValue}%`;
    photoPreview.style.transform = `scale(${scaleValue / PERCENT_DIVIDER})`;
  }
};

const changeScale = () => {
  controlSmaller.addEventListener('click', decreaseScale);
  controlBigger.addEventListener('click', increaseScale);
};

const resetScale = () => {
  scaleValue = MAX_SCALE_LEVEL;
  photoPreview.style.transform = null;
};

export { changeScale, resetScale };
