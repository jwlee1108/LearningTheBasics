function find(s, e, nums, target, res) {
  const m = Math.floor((s + e) / 2);
  if (s > e) {
    return;
  }

  if (nums[m] === target) {
    res[0] = res[0] === -1 ? m : Math.min(res[0], m);
    res[1] = res[1] === -1 ? m : Math.max(res[1], m);

    find(s, m - 1, nums, target, res);
    find(m + 1, e, nums, target, res);
  } else if (nums[m] < target) {
    find(m + 1, e, nums, target, res);
  } else {
    find(s, m - 1, nums, target, res);
  }
}

function searchRange(nums, target) {
  const res = [-1, -1];

  let s = 0;
  let e = nums.length - 1;
  let m = Math.floor((s + e) / 2);

  if (!nums.length) {
    return res;
  }

  if (nums[m] === target) {
    res[0] = res[0] === -1 ? m : Math.min(res[0], m);
    res[1] = res[1] === -1 ? m : Math.max(res[1], m);

    find(s, m - 1, nums, target, res);
    find(m + 1, e, nums, target, res);
  } else if (nums[m] < target) {
    find(m + 1, e, nums, target, res);
  } else {
    find(s, m - 1, nums, target, res);
  }

  return res;
}
