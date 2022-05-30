//without destructuring
const animalsNames = ['cat','dog']
const catNames = animalsNames[0]
console.log(catNames)

//with destructuring
const animalsName = ['cat','dog']
const [catName , dogName] = animalsName
console.log(catName)


//object
 const dog = {
   name: 'jinni',
   age: 5,
   breed: 'german'
 }
 const {name,age,breed} = dog
 console.log(name)
 console.log(breed)
 //rest op
 const cat = {
   name: 'lola',
   age: 2,
   breed:'ragdoll'
 }
 const {name, ...rest}=cat
 console.log(rest)
  console.log(name)