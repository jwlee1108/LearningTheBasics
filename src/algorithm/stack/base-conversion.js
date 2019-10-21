import Stack from '../../data-structure/stack';

export default function mulBase(num, base) {
  const stack = new Stack();
  let n = num;
  let converted = '';

  do {
    stack.push(n % base);
    n = Math.floor(n /= base);
  } while (n > 0);

  while (stack.length()) {
    converted += stack.pop();
  }

  return converted;
}
