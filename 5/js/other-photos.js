import { arrayPhotos } from './data.js';

const pictures = document.querySelector('.pictures');

const picture = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = arrayPhotos();

const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({url, likes, comments}) => {
  const pictureElement = picture.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;

  pictureElement.querySelector('.picture__likes').textContent = likes;

  pictureElement.querySelector('.picture__comments').textContent = comments;

  similarListFragment.appendChild(pictureElement);
});

pictures.appendChild(similarListFragment);
