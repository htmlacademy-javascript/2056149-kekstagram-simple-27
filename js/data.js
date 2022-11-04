import { getRandomInteger } from './util.js';

const TOTAL_PHOTOS = 25;

const likesCounter = {
  min: 15,
  max: 200
};

const commentsCounter = {
  min: 0,
  max: 200
};

let id = 0;

const createPhoto = () => {
  id++;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Описание фотографии',
    likes: getRandomInteger(likesCounter.min, likesCounter.max),
    comments: getRandomInteger(commentsCounter.min, commentsCounter.max)
  };
};

const arrayPhotos = () => Array.from({ length: TOTAL_PHOTOS }, createPhoto);

export { arrayPhotos };
