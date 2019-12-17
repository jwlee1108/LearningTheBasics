function arrayPivotCircular(arr) {
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

console.log(arrayPivotCircular([1, 2, 4, 0, 3])); // 1 2 4 3 0 1
console.log(arrayPivotCircular([1, 4, 5, 0, 3, 2])); // 1 4 3 0 1
console.log(arrayPivotCircular([1, 2, 2, 0])); // false
