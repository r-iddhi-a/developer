import React, { useRef, useState } from 'react'

export const Home1 = () => {
    let[count,setCount]=useState(0)
    let a=useRef(10)
    const addCounter=()=>{
        setCount(count+1)
        a.current += 1
        console.log(a);
    }
  return (
    <>
    <h3>Home Component Called...</h3>
    <h4>Use Ref Hooks example</h4>
    <h3>Count is -- {count}</h3>
    <h4>A is -- {a.current}</h4>
    <button onClick={addCounter}>Add Counter</button>
    </>
  )
};
export default Home1;
