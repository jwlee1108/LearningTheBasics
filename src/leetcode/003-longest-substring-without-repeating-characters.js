/**
 * @param {string} s
 * @return {number}
 */
export default function lengthOfLongestSubstring(s) {
  const map = new Map();

  let start = 0;
  let maxLen = 0;

  s.split('').forEach((c, index) => {
    const repeatIndex = map.get(c);

    if (repeatIndex !== undefined) {
      start = Math.max(map.get(c), start);
    }
    maxLen = Math.max(maxLen, index - start + 1);
    map.set(c, index + 1);
  });

  return maxLen;
}
