import { parentheses } from '../../src/mail-programming';

test('parentheses', () => {
  expect(parentheses(1)).toBe(1);
  expect(parentheses(2)).toBe(2);
  expect(parentheses(3)).toBe(5);
});
