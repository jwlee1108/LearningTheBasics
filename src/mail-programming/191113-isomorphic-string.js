export default function isomorphicString(s, t) {
  const obj = {};

  if (new Set(s).size !== new Set(t).size) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    const c1 = s[i].charCodeAt();
    const c2 = t[i].charCodeAt();
    const diff = Math.abs(c1 - c2);

    if (!obj[s[i]]) {
      obj[s[i]] = [diff];
    } else if (!obj[s[i]].includes(diff)) {
        return false;
    }
  }

  return true;
}
