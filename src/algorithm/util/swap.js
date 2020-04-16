const swap = (array, pos1, pos2) => {
  // const temp = array[pos1];
  // array[pos1] = array[pos2];
  // array[pos2] = temp;

  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

export default swap;
