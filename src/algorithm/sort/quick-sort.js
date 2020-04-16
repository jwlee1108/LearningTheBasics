import Swap from '../util/swap';

const partition = (array, left, right) => {
  const pivot = array[Math.floor((left + right) / 2)];

  while (left <= right) {
    if (pivot > array[left]) {
      left++;
    }

    if (pivot < array[right]) {
      right--;
    }

    if (left <= right) {
      Swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (array.length > 1) {
    const index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      quickSort(array, index, right);
    }
  }

  return array;
};

export default quickSort;
