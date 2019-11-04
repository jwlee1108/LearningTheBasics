import { secondLargestElement } from '../../src/mail-programming';

test('targetSum', () => {
  expect(secondLargestElement([10, 5, 4, 3, -1])).toBe(5);
  expect(secondLargestElement([3, 3, 3])).toBe('Does not exist');
});
