/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  const numberMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const counter = numberMap.get(target - nums[i]);

    if (counter !== undefined) {
      return [counter, i];
    }

    numberMap.set(nums[i], i);
  }

  return [-1, -1];
}
