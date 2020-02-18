function makeParens(res, parens, open, close, n) {
  if (parens.length === n * 2) {
    res.push(parens);
    return;
  }

  if (open < n) {
    makeParens(res, parens + '(', open + 1, close, n);
  }

  if (close < open) {
    makeParens(res, parens + ')', open, close + 1, n);
  }
}

function generateParenthesis(n) {
  const res = [];
  makeParens(res, '', 0, 0, n);

  return res;
}
