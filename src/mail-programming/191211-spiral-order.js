export default function spiralOrder(matrix) {
  const output = [];
  let sr = 0; // start row
  let sc = 0; // start col

  if (!matrix.length) {
    return output;
  }

  let er = matrix.length; // end row
  let ec = matrix[0].length; // end col

  while (sr < er && sc < ec) {
    for (let i = sr; i < ec; i++) {
      output.push(matrix[sr][i]);
    }

    sr++;

    for (let i = sr; i < er; i++) {
      output.push(matrix[i][ec - 1]);
    }

    ec--;

    if (sr < er) {
      for (let i = ec - 1; i >= sc; i--) {
        output.push(matrix[er - 1][i]);
      }

      er--;
    }

    if (sc < ec) {
      for (let i = er - 1; i >= sr; i--) {
        output.push(matrix[i][sc]);
      }

      sc++;
    }
  }

  return output;
}
