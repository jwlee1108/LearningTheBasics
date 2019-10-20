export default function maxSumArray(array) {
  let max = array[0];
  let curr = array[0];

  for (let i = 1; i < array.length; i++) {
    curr = Math.max(curr + array[i], array[i]);
    max = Math.max(curr, max);
  }

  return max;
}
