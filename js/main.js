const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('kekstagram', 2);

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteger(1, 2);

const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const URL = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
const TOTAL_PHOTOS = 25;

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhoto = () => ({
  id: getRandomElement(ID),
  url: `photos/${getRandomElement(URL)}.jpg`,
  description: 'Описание фотографии',
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200)
});

const arrayPhotos = Array.from({ length: TOTAL_PHOTOS }, createPhoto);
