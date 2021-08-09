const maxArea = (height) => {
  let maxArea = 0;
  let r = 0;
  let l = height.length-1;

  for (let i = 0; i < height.length-1; i++) {
    let curHeight = 0;
    let width = l-r;
    if (height[r] > height[l]) {
      curHeight = height[l];
      l--;
    }
    else {
      curHeight = height[r];
      r++;
    }
    maxArea = maxArea < curHeight*width? curHeight*width: maxArea;
    
  }
  return maxArea;
}

// console.log(maxArea([4,3,2,1,4]));