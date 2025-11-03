import React, { useState } from 'react'

export const Statecomponent = () => {
    const[name,setName]=useState("riddhi")
    const[count,setCount]=useState(20)
    let newName=()=>{
        setName("TEST")
    }
  return (
    <>
    <h3>State Example</h3>
    <h4>Name is--{name}</h4>
    <h4>Count is--{count}</h4>
    <button onClick={newName}>Change Name</button>
    <button onClick={()=>setCount(25)}>Add Counter</button>
    </>
  )
}
export default Statecomponent;
