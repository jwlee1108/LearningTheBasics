function isExistElement(array, target) {
  let s = 0;
  let e = array.length - 1;

  while (s <= e) {
    const m = Math.floor((s + e) / 2);

    if (array[m] === target) {
      return true;
    }

    if (array[m] < target) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }

  return false;
}

console.log(isExistElement([1, 2, 3, 7, 10], 7));
console.log(isExistElement([-5, -3, 0, 1], 0));
console.log(isExistElement([1, 4, 5, 6, 8, 9], 10));
