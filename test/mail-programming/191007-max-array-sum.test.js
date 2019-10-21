import { maxSumArray } from '../../src/mail-programming';

test('maxSumArray', () => {
  expect(maxSumArray([-5, -3, -1])).toBe(-1);
  expect(maxSumArray([-1, 3, -1, 5])).toBe(7);
  expect(maxSumArray([2, 4, -2, -3, 8])).toBe(9);
});
