function search(nums, target) {
  let s = 0;
  let e = nums.length - 1;

  while (s < e) {
    let m = Math.floor((s + e) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (nums[m] > nums[s]) {
      if (target >= nums[s] && target < nums[m]) {
        e = m - 1;
      } else {
        s = m + 1;
      }
    } else if (nums[m] < nums[e]) {
      if (target > nums[m] && target <= nums[e]) {
        s = m + 1;
      } else {
        e = m - 1;
      }
    } else {
      break; // [3, 1] 0
    }
  }

  return nums[e] === target ? e : -1;
}

