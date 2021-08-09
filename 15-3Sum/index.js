const isSame = (arr, element) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    result = true;
    for (let j = 0; j < element.length; j++) {
      if (arr[i][j] !== element[j]) result = false;
    }
    if (result) return true;
  }
  return false;
}

const threeSum = (nums) => {
  nums.sort();
  // console.log(nums);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let hashMap = {}
    let target = 0 - nums[i];
    // console.log(i);
    for (let j = i+1; j < nums.length; j++) {
      hashMap[target - nums[j]] = nums[j];
      if ((hashMap[nums[j]] !== undefined)) {
        if ((hashMap[nums[j]] === nums[j]) && (nums[j] !== nums[j+1])) continue; 
        if (!isSame(result, [nums[i], hashMap[nums[j]], nums[j]]))
          result.push([nums[i], hashMap[nums[j]], nums[j]]);
      }
    }
    // console.log(target);
    // console.log(hashMap);
    // console.log(result);
  }
  return result;
}

// console.log(threeSum([-1,0,1,2,-1,-4]));

// let test = [[2,3,5],[2,2,5]];

// console.log(isSame(test,[2,4,5]));
