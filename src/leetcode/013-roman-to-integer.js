/**
 * @param {string} s
 * @return {number}
 */
export default function romanToInt(s) {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  const revRoman = s.split('').reverse();

  let res = 0;

  revRoman.reduce((prev, curr) => {
    const prevInt = romanMap.get(prev);
    const currInt = romanMap.get(curr);

    if (currInt < prevInt) {
      res -= currInt;
    } else {
      res += currInt;
    }

    return curr;
  }, revRoman[0]);

  return res;
}
