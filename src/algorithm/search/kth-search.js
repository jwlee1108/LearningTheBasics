import Swap from '../util/swap';

const partition = (array, left, right) => {
  const pivot = array[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      Swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
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
