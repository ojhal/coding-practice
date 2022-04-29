var moveZeroes = function(nums) {
    let head = 0
 for(let i = 0; i < nums.length; i++) {
   console.log(nums[i])
   if(nums[i] !== 0) {
     [nums[head], nums[i]] = [nums[i], nums[head]]
     head++
   }
//     console.log(head++)
 }
};
moveZeroes([0,1,0,3,12])
//L9


var moveZeroes = function(nums) {
    let head = 0
 for(let i = 0; i < nums.length; i++) {
   console.log([nums[head], nums[i]] = [nums[i], nums[head]])
   if(nums[i] !== 0) {
     [nums[head], nums[i]] = [nums[i], nums[head]]
     head++
   }
 }
};
moveZeroes([0,1,0,3,12])