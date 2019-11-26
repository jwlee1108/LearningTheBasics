export default function kthLargestElement(nums, k) {
  const pq = [];

  nums.forEach((item) => {
    let added = false;
    if (!pq.length) {
      pq.push(item);
    } else {
      for (let i = 0; i < pq.length; i++) {
        if (item >= pq[i]) {
          pq.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        pq.push(item);
      }
    }
  });

  return pq[k - 1];
}
