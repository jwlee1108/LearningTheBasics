import BaseConversion from '../../../src/algorithm/stack';

test('Base Conversion', () => {
  expect(BaseConversion(32, 2)).toBe('100000');
  expect(BaseConversion(125, 8)).toBe('175');
});
