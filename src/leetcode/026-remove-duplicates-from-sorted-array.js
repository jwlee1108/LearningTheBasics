function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1]) {
      if ((nums[i] === nums[i + 1])) {
        nums.splice(i, 1);
      }
    }
  }

  return nums.length;
}
