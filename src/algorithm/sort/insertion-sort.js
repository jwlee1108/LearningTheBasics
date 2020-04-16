const insertSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    let j;

    for (j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = value;
  }

  return array;
}

export default insertSort;
