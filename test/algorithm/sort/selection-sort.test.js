import SelectionSort from '../../../src/algorithm/sort/selection-sort';

test('Selection Sort', () => {
  expect(SelectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(SelectionSort([1])).toEqual([1]);
  expect(SelectionSort([])).toEqual([]);
});

