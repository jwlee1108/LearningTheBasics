import InsertionSort from '../../../src/algorithm/sort/insertion-sort';

test('Insertion Sort', () => {
  expect(InsertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(InsertionSort([1])).toEqual([1]);
  expect(InsertionSort([])).toEqual([]);
});

