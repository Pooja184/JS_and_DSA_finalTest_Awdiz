const twoD_SpiralArr = (arr) => {
  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;
  let spiralArr = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
        // console.log(arr[top][i])
      spiralArr.push(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      spiralArr.push(arr[i][right]);
    }
    right--;
// console.log(right)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiralArr.push(arr[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiralArr.push(arr[i][left]);
      }
      left++;
    }
  }

  return spiralArr.join(" ");
};

console.log(
  twoD_SpiralArr([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

const stringManipulation=(str)=>{

    let arrStr=str.split(" ");
    let maxLength=0;
    let maxStr="";
    // console.log(arrStr)
        for(let i=0;i<arrStr.length;i++){
            if(arrStr[i].length>maxLength){
                maxLength=arrStr[i].length
                maxStr=arrStr[i]
            }
        }
        // console.log(maxStr)
        return maxStr
}
console.log(stringManipulation("JavaScript is an amazing programming language!"))

const flagLogic = (arr) => {
  let strictlyChecking = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) { 
      if (arr[i][j + 1] <= arr[i][j]) {
        // console.log(arr[i][j + 1],"First", arr[i][j],"second")
        strictlyChecking = false;
        break; 
      }
    }

    if (!strictlyChecking) {
      break; 
    }
  }

  if (strictlyChecking) {
    return "All rows are strictly increasing";
  } else {
    return "Not strictly increasing";
  }
};


console.log(
  flagLogic([
    [1, 3, 5],
    [2, 1, 8],
    [10, 11, 12],
  ])
);



