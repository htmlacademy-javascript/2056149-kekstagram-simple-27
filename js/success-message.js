const successTemplate = document.querySelector('#success').content.querySelector('.success');

const createSuccess = () => {
  const successClone = successTemplate.cloneNode(true);
  document.body.append(successClone);
};

const onDocumentClick = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.success')) {
    evt.target.closest('.success').remove();
    removeListeners();
  }
};

const onDocumentKeydown = (evt) => {
  evt.preventDefault();
  const successBlock = document.querySelector('.success');
  if (evt.key === 'Escape' && successBlock) {
    successBlock.remove();
    removeListeners();
  }
};

const addListeners = () => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function removeListeners() {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const renderSuccessMessage = () => {
  createSuccess();
  addListeners();
};

export { renderSuccessMessage };
