import BubbleSort from '../../../src/algorithm/sort/bubble-sort';

test('Bubble Sort', () => {
  expect(BubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(BubbleSort([1])).toEqual([1]);
  expect(BubbleSort([])).toEqual([]);
});

