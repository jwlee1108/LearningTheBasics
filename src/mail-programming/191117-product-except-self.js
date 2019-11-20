export default function productExceptSelf(nums) {
  let acc = 1;
  let revAcc = 1;
  const res = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    acc *= nums[i - 1];
    res[i] = acc;
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    revAcc *= nums[i + 1];
    res[i] *= revAcc;
  }

  return res;
}
