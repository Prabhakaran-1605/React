import React, { useState, useEffect } from 'react'
const App = () => 
{
  const [name, setname] = useState(1)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <div> <input type="text" Placeholder="Name" value={name} onChange={(e) => { setname(e.target.value) }} /> <br />
      <input type="text" Placeholder="FirstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />{firstName} <br />
      <input type="text" Placeholder="LastName" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />{lastName}<br />
    </div>
  )
}

export default App