export default function longestCommonPrefix(strs) {
  let commonPrefix = '';
  if (!strs.length) {
    return commonPrefix;
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return commonPrefix;
      }
    }
    commonPrefix += char;
  }

  return commonPrefix;
}
