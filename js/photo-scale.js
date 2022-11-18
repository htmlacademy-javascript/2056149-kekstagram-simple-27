const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');
const SCALE_STEP = 25;
const MAX_SCALE_LEVEL = 100;
const MIN_SCALE_LEVEL = 25;
let scaleValue = 100;

const decreaseScale = () => {
  if (scaleValue > MIN_SCALE_LEVEL) {
    scaleValue -= SCALE_STEP;
    controlValue.value = `${scaleValue}%`;
    photoPreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

const increaseScale = () => {
  if (scaleValue < MAX_SCALE_LEVEL) {
    scaleValue += SCALE_STEP;
    controlValue.value = `${scaleValue}%`;
    photoPreview.style.transform = `scale(${scaleValue / 100})`;
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
