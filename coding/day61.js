const arr =[2,1,3]


console.log(Math.min(...arr));
//practise


//Leetcode Q4

var distributeCandies = function(candyType) {
    return Math.min(candyType.length/2, [...new Set(candyType)].length)
  
};

const  candyType =[1,1,2,2,3,3]
var distributeCandies = function(candyType) {
      return Math.min(candyType.length/2, [...new Set(candyType)].length)
    
};
console.log(Math.min(candyType.length/2, [...new Set(candyType)].length))
