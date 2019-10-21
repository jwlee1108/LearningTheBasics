import { palindrome } from '../../src/mail-programming';

test('palindrome', () => {
  expect(palindrome(12345)).toBe(false);
  expect(palindrome(12321)).toBe(true);
  expect(palindrome(121)).toBe(true);
  expect(palindrome(1111)).toBe(true);
});
