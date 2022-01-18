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

var num =["joy","toy","soy","hoy"]
var Mrnum =[]
for(let i=0; i<num.length; i++){//via for loop
  Mrnum.push(`Mr ${num[i]}`)
}
console.log(Mrnum)

var numbers = [1,2,3,4,5,6,7,8,9,10]
var newNums = numbers.map((value)=>value*2)
var newNumsFil = numbers.map((value)=>{
  if(value % 2 === 0){//for getting the even number
    return value *2
  }
}).filter((value)=>!isNaN(value))//with condition
console.log(newNums)
console.log(newNumsFil)

var numbers = [1,2,3,4,5,6,7,8,9,10]
var newNums = numbers.map((value)=>value*2)
var newNumsFil = numbers.map((value)=>{
  if(value % 2 === 1){//for getting the odd number
    return value * 3
  }
}).filter((value)=>!isNaN(value))
// console.log(newNums)
console.log(newNumsFil)