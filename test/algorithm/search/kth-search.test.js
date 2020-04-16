import KthSearch from '../../../src/algorithm/search/kth-search';

test('Kth Search', () => {
  const arr = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];
  // sorted = [-2, 1, 1, 2, 2, 3, 3, 3, 7, 8 , 14]
  expect(KthSearch(arr.slice(), 0, arr.length - 1, 5)).toBe(2);
  expect(KthSearch(arr.slice(), 0, arr.length - 1, 10)).toBe(8);
});


