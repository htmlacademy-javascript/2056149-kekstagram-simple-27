const currentImage = document.querySelector('.img-upload__preview').querySelector('img');
const effects = document.querySelectorAll('.effects__radio');
const effectsList = document.querySelector('.effects');

const changeEffect = () => {
  let currentEffect = '';
  for (let i = 0; i < effects.length; i++) {
    if(effects[i].checked) {
      currentEffect = effects[i].value;
      break;
    }
  }
  currentImage.classList.remove(...currentImage.classList);
  currentImage.classList.add(`effects__preview--${currentEffect}`);
};

const onChangeEffect = () => {
  effectsList.addEventListener('change', changeEffect);
};

export { onChangeEffect };
