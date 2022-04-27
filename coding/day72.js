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