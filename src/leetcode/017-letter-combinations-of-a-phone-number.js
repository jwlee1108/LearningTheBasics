function comb(alpha, numIdx, pickIndex, len, res, strings) {
  let str = strings;
  str += alpha[numIdx][pickIndex];

  if (str.length === len) {
    res.push(str);
    return;
  }

  if (numIdx < len - 1) {
    for (let i = 0; i < alpha[numIdx + 1].length; i++) {
      comb(alpha, numIdx + 1, i, len, res, str);
    }
  }
}

/**
 * @param {string} digits
 * @return {string[]}
 */
export default function letterCombinations(digits) {
  const numPad = new Map([
    ['2', ['a', 'b', 'c']], ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']], ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']], ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']], ['9', ['w', 'x', 'y', 'z']],
  ]);

  const alpha = digits.split('').map((num) => numPad.get(num));
  const res = [];

  if (!alpha.length) {
    return [];
  }

  for (let i = 0; i < alpha[0].length; i++) {
    comb(alpha, 0, i, alpha.length, res, '');
  }

  return res;
};
