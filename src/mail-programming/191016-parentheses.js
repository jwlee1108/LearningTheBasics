export default function parentheses(pairCount) {
  /*
  * case1. prev + ()
  * case2. () + prev
  * case3. ( + prev + )
  * */
  const pSet = new Set();
  pSet.add('()');

  for (let i = 0; i < pairCount - 1; i++) {
    const prev = [...pSet.values()];

    for (let j = 0; j < prev.length; j++) {
      pSet.add(`${prev[j]}()`);
      pSet.add(`()${prev[j]}`);
      pSet.add(`(${prev[j]})`);

      pSet.delete(prev[j]);
    }
  }

  return [...pSet.values()].length;
}
