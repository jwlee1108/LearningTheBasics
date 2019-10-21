import Stack from '../../../src/data-structure/stack';

test('Create Stack', () => {
  const stack = new Stack();

  expect(stack.dataStore).toHaveLength(0);
});
