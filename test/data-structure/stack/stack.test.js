import Stack from '../../../src/data-structure/stack';

test('Create Stack', () => {
  const stack = new Stack();

  expect(stack.dataStore).toHaveLength(0);
  expect(stack.peek()).toBe(undefined);
  expect(stack.pop()).toBe(undefined);
  expect(stack.length()).toBe(0);
});

test('Manipulate Stack', () => {
  const stack = new Stack();

  stack.push('David');
  stack.push('Raymond');
  stack.push('Bryan');

  expect(stack.length()).toBe(3);
  expect(stack.peek()).toBe('Bryan');

  expect(stack.pop()).toBe('Bryan');
  expect(stack.peek()).toBe('Raymond');

  stack.push('Cynthia');
  expect(stack.peek()).toBe('Cynthia');

  stack.clear();
  expect(stack.length()).toBe(0);
  expect(stack.peek()).toBe(undefined);

  stack.push('Clayton');
  expect(stack.peek()).toBe('Clayton');
});
