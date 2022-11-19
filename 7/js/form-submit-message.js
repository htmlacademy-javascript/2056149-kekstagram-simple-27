const error = document.querySelector('#error').content.querySelector('.error');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');
const success = document.querySelector('#success').content.querySelector('.success');
const successButton = document.querySelector('#success').content.querySelector('.success__button');
const container = document.createElement('div');

const successAlert = () => {
  const successElement = success.cloneNode(true);
  container.append(successElement);
  document.body.append(container);
};

const errorAlert = () => {
  const errorElement = error.cloneNode(true);
  container.append(errorElement);
  document.body.append(container);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    container.remove();
  }
};

const onButtonClick = (evt) => {
  evt.preventDefault();
  container.remove();
};

const addSubmitMessage = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  errorButton.addEventListener('click', onButtonClick);
  successButton.addEventListener('click', onButtonClick);
};

export { errorAlert, successAlert, addSubmitMessage };
