const merge = (left, right) => {
  const result = [];

  let li = 0;
  let ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      result.push(left[li++]);
    } else {
      result.push(right[ri++]);
    }
  }

  const leftRemain = left.slice(li);
  const rightRemain = right.slice(ri);

  return result.concat(leftRemain).concat(rightRemain);
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
