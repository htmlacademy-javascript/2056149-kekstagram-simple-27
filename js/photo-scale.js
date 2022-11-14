const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview');

let scaleValue = 100;

const decreaseScale = () => {
  if (scaleValue > 25) {
    scaleValue -= 25;
    controlValue.value = `${scaleValue}%`;
    photoPreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

const increaseScale = () => {
  if (scaleValue < 100) {
    scaleValue += 25;
    controlValue.value = `${scaleValue}%`;
    photoPreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

const changeScale = () => {
  controlSmaller.addEventListener('click', decreaseScale);
  controlBigger.addEventListener('click', increaseScale);
};

export {changeScale};
