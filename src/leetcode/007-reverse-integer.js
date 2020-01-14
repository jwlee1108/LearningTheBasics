export default function reverseInteger(num) {
  let x = num;
  let result = 0;
  let digitCount = 0;
  let isMinus = false;

  const rev = [];
  const max = 2 ** 31;

  if (x < 0) {
    x = Math.abs(x);
    isMinus = true;
  }

  while (x > 0) {
    rev.push(x % 10);
    x = Math.floor(x / 10);
  }

  while (rev.length) {
    result += rev.pop() * (10 ** digitCount++);
  }

  if (result > max) {
    return 0;
  }

  return isMinus ? -result : result;
}
