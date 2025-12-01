import React, { useState } from 'react'

export const ContextExample = () => {
  let[name,setname]=useState("Riddhi");
  return (
    <div>
        <h3>Context Example</h3>
        <h3>Component1 Called..</h3>
        <h4>Name is -- {name}</h4>

        <Component2 name={name}/>
    </div>
  );
};
const Component2=({name})=>{
    return(
        <div>
            <h3>Component2 Called..</h3>
            <Component3 name={name}/>
        </div>
    );
};
const Component3=({name})=>{
    return(
        <div>
            <h3>Component3 Called..</h3>
            <Component4 name={name}/>
        </div>
    );
};
const Component4=({name})=>{
    return(
        <div>
            <h3>Component4 Called..</h3>
            <h4>Final Name is -- {name}</h4>
        </div>
    );
};
export default ContextExample;
