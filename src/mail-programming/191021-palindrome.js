export default function palindrome(number) {
  const stack = [];
  let num = number;
  let result = 0;
  let digit = 1;

  while (num > 0) {
    const ret = num % 10;
    num = (num - ret) / 10;
    stack.push(ret);
  }

  while (stack.length) {
    result += stack.pop() * digit;
    digit *= 10;
  }

  return result === number;
}
