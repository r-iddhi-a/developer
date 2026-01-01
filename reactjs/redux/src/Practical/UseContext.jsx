import React, { createContext, useContext, useState } from 'react'
const UserData=createContext()
const UseContext = () => {
    let [name,setName]=useState("Riddhi")
  return (
    <div>
        <h3>UseContext Example</h3>
        <h2>component1 Called..</h2>
        <h3>Name is --{name}</h3>
        <UserData.Provider value={name}>
            <Component2/>
        </UserData.Provider>
    </div>
  )
}
const Component2=()=>{
    return(
        <div>
            <h2>Component2 Callled..</h2>
            <Component3/>
        </div>
    )
}
const Component3=()=>{
    return(
        <div>
            <h2>Component3 Callled..</h2>
            <Component4/>
        </div>
    )
}
const Component4=()=>{
    let name=useContext(UserData)
    return(
        <div>
            <h2>Component4 Callled..</h2>
            <h4>Final Name is--{name}</h4>
        </div>
    )
}
export default UseContext;
