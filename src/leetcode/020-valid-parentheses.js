export default function validParentheses(s) {
  const parenStack = [];
  const pairParens = { ')': '(', '}': '{', ']': '[' };
  const closeParens = Object.keys(pairParens);

  for (let i = 0; i < s.length; i++) {
    if (closeParens.includes(s[i])) {
      const open = parenStack.pop();
      if (pairParens[s[i]] !== open) {
        return false;
      }
    } else {
      parenStack.push(s[i]);
    }
  }

  return !parenStack.length;
};
