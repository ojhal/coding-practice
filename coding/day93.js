
// import React from 'react';
import React, { useEffect, useState } from "react"

export default function App() {
  const [search, setSearch] = useState(0)

  // const array = [
  //   {
  //     name: "ojhal",
  //     email: "123@op"

  //   },

  //   {
  //     name: "john",
  //     email: "123@john"

  //   },
  //   {
  //     name: "shelly",
  //     email: "123@shelly"

  //   }
  // ]
  // const handleSearch = (e) => {
  //   console.log("event")
  //   setSearch(e.target.value)
  // }
  useEffect(() => {
    if(search>=1){
      document.title = `chats(${search})`
    }
      else {
        document.title = `chats`
    }
  },[search])
  return (
    <div>
      <h1>{search}</h1>
      <button className="btn" 
      onClick={()=> setSearch (search + 1)} >+</button>
      <br/>
      <br/>
        <button className="btn" 
      onClick={()=> setSearch (search - 1)} >-</button>
    </div>
    // <div className="App">
    //   <input
    //     className="mark__search"
    //     onChange={handleSearch}
    //     placeholder={"Search"}>

    //   </input>
    //   <div>
    //   {array.filter((i) => JSON.stringify(i)
    //     .toLowerCase()
    //     .indexOf(search.toLowerCase()) !== -1).map(i => (
    //       <li>
    //         {i.name}
    //       </li>
    //     ))}
    //     </div>
    // </div>
  );
}
