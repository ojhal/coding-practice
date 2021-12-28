var num=0, 
    nums = ['100','300','400','60','440'];

for(var i=0; i < nums.length; i++){            
        num += +nums[i];
}
//   alert(num)
console.log(num)



var numbers = [10, 42, 5, 87, 61, 34, 99],
    i = numbers.length,
    e = 0;

while (i--) {
    e += numbers[i]; 
}

console.log(e);

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)