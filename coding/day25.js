var numbers = [3,2,4,5,7]
var forEachNumbers = []
numbers.forEach(function(value,index,array){//learn forEach syntax
  console.log(value,index,array)
  
})

var numbers = [3,2,4,5,7]
var forEachNumbers = []
numbers.forEach(function(value,index,array){
//   console.log(value,index,array)
  forEachNumbers.push(value * 3)
})
console.log(forEachNumbers)


var numbers = [3,2,4,5,7]
var forEachNumbers = []
numbers.forEach(function(value,index,array){
//   console.log(value,index,array)
  forEachNumbers.push(value * 3)
})
console.log(forEachNumbers)


var doubleNumbers = numbers.map(function(value,index,array){
  return(value * 4)
})
console.log(doubleNumbers)