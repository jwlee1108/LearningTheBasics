import { targetSum } from '../../src/mail-programming';

test('targetSum', () => {
  expect(targetSum([2, 5, 6, 1, 10], 8).toString()).toBe([0, 2].toString());
  expect(targetSum([2, 5, 6, 1, 10], 1)).toBe(false);
  expect(targetSum([4, 4], 8).toString()).toBe([0, 1].toString());
});
