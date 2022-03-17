const arr = [2,4,6]

function avg(a,b,c){
  return a+b+c/3
  
}
let a = avg(...arr)//spread oprator
console.log(a)


const arr = [2,4,6]

function avg(a,b,c){
  return a+b+c/3
  
}
// let a = avg(...arr)
let a = [8,10,...arr,7,56]
console.log(a)