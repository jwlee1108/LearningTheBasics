import Swap from '../util/swap';

const partition = (array, left, right) => {
  const pivot = array[right];
  let elm = left;

  for (let i = left; i <= right; i++) {
    if (array[i] < pivot) {
      Swap(array, i, elm);
      elm++;
    }
  }

  Swap(array, elm, right);
  return elm;
}

const kthSearch = (array, left = 0, right = array.length - 1, k) => {
  const index = partition(array, left, right);

  if (index === k - 1) {
    return array[index];
  } else if (index > k - 1) {
    return kthSearch(array, left, index - 1, k);
  } else {
    return kthSearch(array, index + 1, right, k);
  }
}

export default kthSearch;
