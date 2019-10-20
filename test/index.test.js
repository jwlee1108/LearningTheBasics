import mail from '../src/index';

test('maxSumArray', () => {
  expect(mail.maxSumArray([-5, -3, -1])).toBe(-1);
  expect(mail.maxSumArray([-1, 3, -1, 5])).toBe(7);
  expect(mail.maxSumArray([2, 4, -2, -3, 8])).toBe(9);
});

test('fibonacci', () => {
  expect(mail.fibonacci(12)).toBe(10);
});

test('parentheses', () => {
  expect(mail.parentheses(1)).toBe(1);
  expect(mail.parentheses(2)).toBe(2);
  expect(mail.parentheses(3)).toBe(5);
});
