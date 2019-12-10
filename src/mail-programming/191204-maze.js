function escapeMaze(maze) {
  const { start, end, size, map } = maze;

  const mark = new Array(size[0]).fill(new Array(size[1]).fill(0));
  const queue = [];
  const result = [];

  let count = 0;

  for (ix = 0; ix < size[0]; ix++) {
    for (jx = 0; jx < size[1]; jx++) {
      if (map[ix][jx] === '1' && mark[ix][jx] === 0) {
        result.push(bfs(ix, jx, ++count, mark, size, map));
      }
    }
  }
}

function bfs(x, y, count, mark, size, map) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [];

  let number = 1;

  queue.push([x, y]);
  mark[x][y] = count;


  while (queue.length) {
    const v = queue.shift();

    for (let ix = 0; ix < 4; ix++) {
      const nx = v[0] + dx[ix];
      const ny = v[1] + dy[ix];

      if (0 <= nx && nx < size[0] && 0 <= ny && ny < size[1]) {
        if (map[nx][ny] === '1' && mark[nx][ny] === 0) {
          queue.push([nx, ny]);
          mark[nx][ny] = count;
          number++;
        }
      }
    }

  }

  return number;
}

function makeMaze(maze) {
  const result = {
    map: [],
    start: null,
    end: null,
    size: null
  };

  maze.forEach((row, index) => {
    const start = row.indexOf('Y');
    const end = row.indexOf('X');

    if (start > -1) {
      result.start = { row: index, col: start };
    }

    if (end > -1) {
      result.end = { row: index, col: start };
    }

    if (index) {
      result.map.push(row.split(''));
    } else {
      result.size = row.split(' ').map((size) => +size);
    }
  })

  return result;
}

function processData(inputs) {
  const input = inputs.split('\r\n');
  const mazes = [];
  let offset = 0;

  for (let i = 1; i < input.length; i += offset) {
    offset = +input[i].split(' ')[0] + 1;
    mazes.push(makeMaze(input.slice(i, i + offset)));
  }

  mazes.forEach(maze => escapeMaze(maze));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
