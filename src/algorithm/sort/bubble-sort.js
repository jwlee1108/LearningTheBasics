import Swap from '../util/swap';

const bubbleSort = (array) => {
  for (let i = 0 ; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        Swap(array, i , j);
      }
    }
  }

  return array;
}

export default bubbleSort;
