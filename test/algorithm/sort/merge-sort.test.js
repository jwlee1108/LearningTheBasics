import MergeSort from '../../../src/algorithm/sort/merge-sort';

test('Merge Sort', () => {
  expect(MergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(MergeSort([1])).toEqual([1]);
  expect(MergeSort([])).toEqual([]);
});

