/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function threeSum(nums) {
  const res = [];

  if (nums.length < 3) {
    return res;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return res;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) {
          j++;
        }

        while (nums[k] === nums[k - 1]) {
          k--;
        }

        j++;
        k--;

        continue;
      }

      if (sum < 0) {
        j++;
        continue;
      }

      if (sum > 0) {
        k--;
      }
    }
  }

  return res;
}

// var calc = function(arr, visit, n, comb) {
//   const p = [];
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     if (visit[i] === true) {
//       p.push(arr[i]);
//       sum += arr[i];
//     }
//   }
//
//   if (sum === 0) {
//     comb.push(p.toString());
//   }
// }
//
// var combination = function(arr, visit, start, n, r, comb) {
//   if (r === 0) {
//     calc(arr, visit, n, comb);
//     return;
//   } else {
//     for (let i = start; i < n; i++) {
//       visit[i] = true;
//       combination(arr, visit, i + 1, n, r - 1, comb);
//       visit[i] = false;
//     }
//   }
// };
//
// var threeSum = function(nums) {
//   const n = nums.length;
//   const visit = new Array(n).fill(false);
//   const comb = [];
//   nums.sort();
//   combination(nums, visit, 0, n, 3, comb);
//
//   const res = [...new Set(comb)].map((elm) => {
//     return elm.split(',').map(e => +e);
//   });
//
//   return res;
// };
