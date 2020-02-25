function isValidSudoku(board) {
  const verArr = [[], [], [], [], [], [], [], [], []];
  const subArr = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];
  for (let i = 0; i < 9; i++) {
    const horArr = [];
    const subX = Math.floor(i / 3);

    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      if (num !== '.') {
        if (horArr.includes(num)) {
          return false;
        } else {
          horArr.push(num);
        }

        if (verArr[j].includes(num)) {
          return false;
        } else {
          verArr[j].push(num);
        }

        const subY = Math.floor(j / 3);
        if (subArr[subX][subY].includes(num)) {
          return false;
        } else {
          subArr[subX][subY].push(num);
        }
      }
    }
  }

  return true;
}
