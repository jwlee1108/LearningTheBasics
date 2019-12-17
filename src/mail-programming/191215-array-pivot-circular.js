export default function arrayPivotCircular(arr) {
  let traverseCount = 0;
  let pivotValue = arr[0];
  let result = false;

  while (traverseCount <= arr.length) {
    traverseCount++;
    pivotValue = arr[pivotValue];

    if (pivotValue === 0) {
      result = true;
      break;
    }
  }

  return result;
}
