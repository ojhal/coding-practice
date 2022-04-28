const mySet = new Set(['john',123,"this",{a:4,b:8}])
console.log("new set",mySet)
//set// uniqe value


const mySet = new Set(['john',123,"this",{a:4,b:8},"om"])
console.log("new set",mySet.size)
console.log("new set",mySet.has(123))

//has true/false

const mySet = new Set(['john',123,"this",{a:4,b:8},"om"])
console.log("new set",mySet.size)
console.log("new set",mySet.has(123))

console.log("befor remove", mySet.size)
console.log(mySet.delete("john"))
console.log("after remove", mySet.size)
//delete


//for check has

const mySet = new Set(['john',123,"this",{a:4,b:8},"om"])
console.log("new set",mySet.size)
console.log("new set",mySet.has(123))

console.log("befor remove", mySet.size)
console.log("befor remove", mySet.has("john"))
console.log(mySet.delete("john"))
console.log("after remove", mySet.size)
console.log("befor remove", mySet.has("john"))

//Iterating a set

for(let item of mySet){
    console.log("this is set:", item)
  }


//use forEach
mySet.forEach((item)=>{
    console.log("this is set:", item)
  })

  //convert the set to array
  const mySet = new Set(['john',123,"this",{a:4,b:8}])
  console.log( Array.from(mySet))

  
//Array.from(set)
  const set = new Set(['a', 'b']);
// const array = [...set]; // or Array.from(set)
const array = Array.from(set)
console.log(array)
//with add
let mySet = new Set()
mySet.add(1)
mySet.add(5)
mySet.add(5) 
let arr = [...mySet ]
console.log(arr)

//self
const arr1 = ["ojhal",123,"this","this","that"]
const arr = new Set([...arr1])
console.log(Array.from(arr))

const arr1 = ["ojhal",123,"this","this","that"]
const arr = new Set([...arr1])
console.log(arr.has("this1"))
{Array.from(arr).map((e,i)=>{
//   console.log(e,i)
}) 
}