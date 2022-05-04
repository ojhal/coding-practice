async function ojhal(){
    console.log("inside ojhal")
    const response = await fetch('https://api.github.com/users')
    console.log("before response")
    const users = await response.json()
    console.log("response resolved")
    return users;
  //   return "ojhal"
  }
  console.log("before calling ojhal")
  const a = ojhal()
  a.then(data => console.log(data))
  console.log("after calling ojhal")
  console.log(a)
  console.log("last line calling ojhal")