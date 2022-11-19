const pictures = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = ({url, likes, comments}) => {
  const pictureElement = picture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;

  return pictureElement;
};

const drawPhotos = (similarPictures) => {
  similarPictures.forEach((item) => {
    const photo = createPhoto(item);
    pictures.append(photo);
  });
};

export { drawPhotos };
