/**
 * @param {number[]} height
 * @return {number}
 */
export default function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = Number.MIN_VALUE;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    const h = Math.min(leftHeight, rightHeight);
    const w = right - left;

    max = Math.max(h * w, max);

    if (leftHeight <= rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
