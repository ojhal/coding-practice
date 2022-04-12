function getData(){
    console.log("started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
      console.log("first then")
      return response.json()
    }).then((data)=>{
      console.log("second then")
      console.log(data)
    })
    
  }
  console.log("before getData")
  getData()
  console.log("after getData")
  //fetch api