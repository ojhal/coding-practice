//without destructuring
const animalsNames = ['cat','dog']
const catNames = animalsNames[0]
console.log(catNames)

//with destructuring
const animalsName = ['cat','dog']
const [catName , dogName] = animalsName
console.log(catName)