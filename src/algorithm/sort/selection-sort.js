import Swap from '../util/swap';

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      Swap(array, i, minIndex);
    }
  }

  return array;
}

export default selectionSort;
