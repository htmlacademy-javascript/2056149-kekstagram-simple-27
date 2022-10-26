const CHECKING_LENGHT = (line, maxlenght) => {
  if (line < 0 || maxlenght < 0) {
    return NaN;
  } else {
    return line <= maxlenght;
  }
}

console.log(CHECKING_LENGHT(-1, 2));
console.log(CHECKING_LENGHT(1, -2));
console.log(CHECKING_LENGHT(2, 2));
console.log(CHECKING_LENGHT(1, 2));
console.log(CHECKING_LENGHT(2, 1));
