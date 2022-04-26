var missingNumber = function(nums) {
    let total1=0,total2=0
    for(let i=0;i<nums.length;i++){
        total1+=nums[i]
        total2+=i
    }
    total2+=nums.length
    return total2-total1
    
};
//Q7 L7