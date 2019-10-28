import { intersectingInterval } from '../../src/mail-programming';

test('targetSum', () => {
  expect(intersectingInterval([[2, 4], [1, 5], [7, 9]]).toString())
    .toBe([[1, 5], [7, 9]].toString());
  expect(intersectingInterval([[3, 6], [1, 3], [2, 4]]).toString())
    .toBe([[1, 6]].toString());
});
