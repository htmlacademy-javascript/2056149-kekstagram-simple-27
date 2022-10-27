const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('kekstagram', 2);

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }
};

getRandomInteger(1, 2);
