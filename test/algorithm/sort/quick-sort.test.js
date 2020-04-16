import QuickSort from '../../../src/algorithm/sort/quick-sort';

test('Quick Sort', () => {
  expect(QuickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(QuickSort([1])).toEqual([1]);
  expect(QuickSort([])).toEqual([]);
});

