import { fibonacci } from '../../src/mail-programming';

test('fibonacci', () => {
  expect(fibonacci(12)).toBe(10);
});
