export default function targetSum(array, target) {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    const counter = map.get(target - array[i]);
    if (counter !== undefined) {
      return [counter, i];
    }

    map.set(array[i], i);
  }

  return false;
}
