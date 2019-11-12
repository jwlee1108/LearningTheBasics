export default function moveZeroes(array) {
  let point = 0;
  array.forEach((item, index) => {
    if (item) {
      array.splice(point, 0, array.splice(index, 1));
      point += 1;
    }
  });

  return array;
}
