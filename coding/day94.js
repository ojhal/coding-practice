
// import React from 'react';
import React, { useEffect, useState } from "react"

export default function App() {
  const [search, setSearch] = useState(0)
  const [search1, setSearch1] = useState(0)

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
  const increament = () =>{
    setSearch (search + 1)
  }
  const decreament = () =>{
    setSearch1 (search1 - 1)
  }
  useEffect(() => {
    console.log("alert")
    alert("Alert in useEffect hook")
  },[search1])
  return (
    <div>
      <h1>{search}</h1>
      <h2> {search1}</h2>
      <button className="btn" 
      onClick={increament} >+</button>
      <br/>
      <br/>
        <button className="btn" 
      onClick={decreament} >-</button>
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
