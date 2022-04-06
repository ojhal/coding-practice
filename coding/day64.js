const func1 = () => {
    console.log("use callback")
  }
  const func2 = () => {
    console.log("use callback another function")
  }
  func1()
  func2()
  //using callback

  const func3 = (friend,callback) => {
    console.log(`use callback another function ${friend}`)
    callback()
  }
  const func4 = () => {
    console.log("use callback function")
  }
  func3("ojhal",func4)