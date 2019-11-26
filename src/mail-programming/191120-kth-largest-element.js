// 개발 중...
class PriorityQueue {
  constructor(comparator) {
    this.store = [];
    this.size = 0;
    this.compare = comparator || ((a, b) => a > b);
  }

  enqueue(num) {
    let i = this.size;
    let p;
    let ap;

    this.store[this.size] = num;
    this.size += 1;

    while (i > 0) {
      p = (i - 1) >> 1; // eslint-disable-line
      ap = this.store[p];
      if (!this.compare(num, ap)) {
        break;
      }
      this.store[i] = ap;
      i = p;
    }
    this.store[i] = num;
  }

  heapify() {
    for (let i = this.size >> 1; i >= 0; i--) {
      this.percolateDown(i);
    }
  }

  percolateDown(i) {
    const { size } = this;
    const hsize = this.size >>> 1;
    const ai = this.store[i];
    let l;
    let r;
    let bestc;
    while (i < hsize) {
      l = (i << 1) + 1;
      r = l + 1;
      bestc = this.store[l];
      if (r < size) {
        if (this.compare(this.store[r], bestc)) {
          l = r;
          bestc = this.store[r];
        }
      }
      if (!this.compare(bestc, ai)) {
        break;
      }
      this.store[i] = bestc;
      i = l;
    }
    this.store[i] = ai;
  }

  getItem(i) {
    return this.store[i - 1];
  }
}

const findKthLargest = function (nums, k) {
  const pq = new PriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
  }
  pq.heapify();

  console.log(pq.store.join(' '));
  return pq.getItem(k);
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
