//clouser
const outerFun = (a) =>{
    let b = 20
    const innerFunc = () =>{
      let sum = a+b
      console.log(`the sum of ${sum}`)
    }
    innerFunc()
  }
  outerFun(5)


const outerFun = (a) =>{
    let b = 20
    const innerFunc = () =>{
      let sum = a+b
      console.log(`the sum of ${sum}`)
    }
    return innerFunc;
  }
  let inner = outerFun(5)
  console.log(inner)
  inner()