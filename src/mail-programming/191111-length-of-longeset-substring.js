export default function lengthOfLongestSubstring(s) {
  const map = new Map();

  let start = 0;
  let maxLen = 0;
  let subLen = 0;

  s.split('').forEach((c, index) => {
    const repeatIndex = map.get(c);

    if (repeatIndex === undefined) {
      map.set(c, index);
      subLen = index - start + 1;
    } else {
      subLen = index - start;
      start = repeatIndex + 1;
      map.delete(c);
      map.set(c, index);

      maxLen = Math.max(maxLen, subLen);
    }
  });

  return Math.max(maxLen, subLen);
}
