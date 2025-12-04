import React, { useState } from 'react'

function Event () {
    const[data,setData]=useState("Not Clicked!")
    const[value,setValue]=useState("")
  return (
    <div>
        <h3>{data}</h3>
        <button onClick={()=>setData("Clicked!")}>Click</button>
        <hr/>
        <input type='data' placeholder='Type Something...' onChange={(e)=>setValue(e.target.value)}/>
        <h3>Typed Value: {value}</h3>
    </div>
  )
}
export default Event;