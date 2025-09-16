const valuesAppearsMoreThanOnce = (arr) => {
  // 1. Write a function that takes an array of integers and returns a new array containing only the elements that appear more than once.
  // Example:
  // Input → [4, 5, 9, 4, 9, 2]
  // Output → [4, 9]
  let obj = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      newArr.push(key);
    }
  }
  return newArr;
};
console.log(valuesAppearsMoreThanOnce([4, 5, 9, 4, 9, 2]))

const rotateArr = (arr) => {
  //     2. Write a function to rotate a 2D matrix (n x n) by 90 degrees clockwise.
  // Input →
  // [[1,2,3],
  //  [4,5,6],
  //  [7,8,9]]
  // Output
  // [[7,4,1],
  //  [8,5,2],
  //  [9,6,3]]
  let n = arr.length - 1;
  let newArr = [];
  for (let i = n; i >= 0; i--) {
    let temp = [];
    for (let j = 0; j <= n; j++) {
      temp.push(arr[j][i]);
    }
    newArr.push(temp);
  }
  return newArr;
};

console.log(
  rotateArr([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

const binarySearch = (arr, target) => {
  //   3. Binary Search Problem
  // Implement binary search to find the index of a given number in a sorted array. If not found, return -1.

  // Example:
  // Input → [2, 5, 7, 10, 14, 20], target = 10
  // Output → 3

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middleIdx = Math.round((left + right) / 2);
    if (target == arr[middleIdx]) {
      return middleIdx;
    } else if (target > arr[middleIdx]) {
      left = middleIdx + 1;
    } else if (target < arr[middleIdx]) {
      right = middleIdx - 1;
    }
  }
};
console.log(binarySearch([2, 5, 7, 10, 14, 20],14))

const longestString = (str) => {
  //     . String Problem
  // Write a function to find the longest substring without repeating characters.
  // Example:
  // Input → "abcabcbb"
  // Output → "abc" (length = 3)
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
 
    if (!newStr.includes(str[i])) {
      newStr += str[i];
    } else {
      break;
    }
  }
  return newStr
};
console.log(longestString("abcabcbb"));

const subArray = (arr, k) => {
//      Subarray Problem
// Write a function to find the maximum sum of any contiguous subarray of size k.
// Example:
// Input → [2, 1, 5, 1, 3, 2], k = 3
// Output → 9 (5 + 1 + 3)

// console.log(arr.length - k)
  let maxSum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

console.log(subArray([2, 1, 5, 1, 3, 2], 3)); 

