export default function secondLargest(array) {
  let fst = array[0];
  let sec = Number.MIN_VALUE;
  let isSwap = false;

  array.reduce((prev, curr) => {
    if (prev !== curr) {
      if (fst < curr) {
        sec = fst;
        fst = curr;
      } else if (sec < curr) {
        sec = curr;
      }

      isSwap = true;
    }

    return curr;
  });

  return isSwap ? sec : 'Does not exist';
}
