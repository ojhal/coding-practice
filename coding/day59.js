//leetcode Q2
const nums = [3,2,3,8,6,7,7,7,7,7]
var majorityElement = function() {
      return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)]
    
};
console.log(nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)])