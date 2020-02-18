function strStr(haystack, needle) {
  const needleLen = needle.length;

  if (haystack === needle) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needleLen) === needle) {
      return i;
    }
  }

  return -1;
}
