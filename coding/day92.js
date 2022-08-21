// import React from 'react';
import React, { useState } from "react"

export default function App() {
  const [search, setSearch] = useState("")

  const array = [
    {
      name: "ojhal",
      email: "123@op"

    },

    {
      name: "john",
      email: "123@john"

    },
    {
      name: "shelly",
      email: "123@shelly"

    }
  ]
  const handleSearch = (e) => {
    console.log("event")
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <input
        className="mark__search"
        onChange={handleSearch}
        placeholder={"Search"}>

      </input>
      <div>
      {array.filter((i) => JSON.stringify(i)
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1).map(i => (
          <li>
            {i.name}
          </li>
        ))}
        </div>
    </div>
  );
}
