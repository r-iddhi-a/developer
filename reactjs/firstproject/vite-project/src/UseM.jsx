import React, {createContext, useState, useContext } from 'react'


const UserData=createContext()

const UseM = () => {
    let [name,setName]=useState("Jisha")
  return (
    <div>
        <h3>Use Context Example</h3>
        <h2>Component1 Called..</h2>
        <h2>Name is -- {name}</h2>
        <UserData.Provider value={name}>
            <Component2/>
        </UserData.Provider>
        
    </div>
  )
}
const Component2=()=>{
    return(
        <div>
            <h2>Component2 Called..</h2>
            <Component3/>
        </div>
    )
}
const Component3=()=>{
    return(
        <div>
            <h2>Component3 Called..</h2>
            <Component4/>
        </div>
    )
}
const Component4=()=>{
    let name=useContext(UserData)
    return(
        <div>
            <h2>Component4 Called..</h2>
            <h3>Final Name is{name}</h3>
        </div>
    )
}
export default UseM
