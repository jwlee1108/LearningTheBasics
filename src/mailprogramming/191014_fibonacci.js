export default function fibonacci(num) {
  const memo = [0, 1];
  let evenSum = 0;

  for (let i = 2; i < num; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
    if (memo[i] % 2 === 0) {
      evenSum += memo[i];
    }

    if (memo[i] >= num) {
      break;
    }
  }

  return evenSum;
}
