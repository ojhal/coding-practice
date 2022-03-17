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

const arr = [2,4,6,67,80,00]

function avg(a,b,c){
  return a+b+c/3
  
}
// let a = avg(...arr)
// let a = [8,10,...arr,7,56]
const a2 = [23,576,890,546]
const a = [...a2, ...arr]
console.log(a)
//with objects
const arr = [2,4,6,67,80,00]

function avg(a,b,c){
  return a+b+c/3
  
}
// let a = avg(...arr)
// let a = [8,10,...arr,7,56]
// const a2 = [23,576,890,546]
// const a = [...a2, ...arr]
const obj = {
  name: "john",
  class: "1st year",
  favLang:"javaScript"
}
const obj1 = {...obj,favLang: "react",name:"ojhal"}
console.log(obj1)

//destructuring
const arr = [2,4,6,67,80,00]

function avg(a,b,c){
  return a+b+c/3
  
}
// let a = avg(...arr)
// let a = [8,10,...arr,7,56]
// const a2 = [23,576,890,546]
// const a = [...a2, ...arr]
const obj = {
  name: "john",
  class1: "1st year",
  favLang:"javaScript"
}
// const obj1 = {...obj,favLang: "react",name:"ojhal"}
const {name,class1,favLang} = obj
console.log(name,class1,favLang)