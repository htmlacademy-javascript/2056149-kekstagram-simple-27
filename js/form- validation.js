const commentForm = document.querySelector('.img-upload__form');

new Pristine(commentForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text'
});

commentForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});
