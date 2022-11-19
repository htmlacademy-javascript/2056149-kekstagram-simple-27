const currentPhoto = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

const photoEffects = [
  { name: 'none', min: 0, max: 100 },
  { name: 'chrome', style: 'grayscale', min: 0, max: 1, step: 0.1, unit: '' },
  { name: 'sepia', style: 'sepia', min: 0, max: 1, step: 0.1, unit: '' },
  { name: 'marvin', style: 'invert', min: 0, max: 100, step: 1, unit: '%' },
  { name: 'marvin', style: 'invert', min: 0, max: 100, step: 1, unit: '%' },
  { name: 'phobos', style: 'blur', min: 0, max: 3, step: 0.1, unit: 'px' },
  { name: 'heat', style: 'brightness', min: 1, max: 3, step: 0.1, unit: '' }
];

const noneFilter = photoEffects[0];
let chosenEffect = noneFilter;

const isDefault = () => chosenEffect === noneFilter;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });
  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = photoEffects.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  currentPhoto.style.filter = 'none';
  currentPhoto.className = '';
  valueElement.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  currentPhoto.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  currentPhoto.classList.add(`effects__preview--${chosenEffect.name}`);
  valueElement.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = noneFilter;
  updateSlider();
};

const addEffects = () => {
  effects.addEventListener('change', onFormChange);
  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      'min': noneFilter.min,
      'max': noneFilter.max,
    },
    step: noneFilter.step,
    start: noneFilter.max,
    connect: 'lower',
  });
  resetEffects();
};

createSlider();

export { resetEffects, addEffects};
