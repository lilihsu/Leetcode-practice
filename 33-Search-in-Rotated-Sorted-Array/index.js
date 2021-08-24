const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let root = 0;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  root = left;
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let realMid = (mid + root) % nums.length;

    if (nums[realMid] === target) return realMid;
    if (nums[realMid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

// console.log(search([1,3], 1));