import React, { useState } from 'react'

function VoteComponent  () {
    const[age,setAge]=useState("");
  return (
    <div>
        <input type='number' placeholder='Enter Your Age' onChange={(e)=>setAge(e.target.value)}/>
        <h3>
            {
                age>=18 ? "You Are eligible to Vote" : "You Are not eligible to Vote"
            }
        </h3>
    </div>
  )
}
export default VoteComponent;
