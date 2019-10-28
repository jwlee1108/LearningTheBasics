export default function intersectingInterval(array) {
  const result = [];
  result.push(array.reduce((prev, curr) => {
    const [prevStart, prevEnd] = prev;
    const [currStart, currEnd] = curr;

    let start = currStart < prevStart ? currStart : prevStart;
    let end = currEnd > prevEnd ? currEnd : prevEnd;

    if (currStart > prevEnd) {
      result.push(prev);
      start = currStart;
      end = currEnd;
    }

    return [start, end];
  }));

  return result;
}
