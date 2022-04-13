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