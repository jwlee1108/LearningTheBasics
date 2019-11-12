import { moveZeroes } from '../../src/mail-programming';

test('moveZeroes', () => {
  expect(moveZeroes([0, 1, 0]).join(' ')).toBe('1 0 0');
  expect(moveZeroes([0, 1, 0, 3, 12]).join(' ')).toBe('1 3 12 0 0');
});
