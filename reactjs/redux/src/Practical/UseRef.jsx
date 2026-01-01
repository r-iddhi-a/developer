import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const inp=useRef(null)
    const inp1=useRef(null)
    const saveData=(e)=>{
        e.preventDefault()
        inp.current.focus()
    }
    useEffect(()=>{
        inp1.current.focus()
    })
  return (
    <div>
        <h3>Use Ref Example</h3>
        <form action="#" method="post" name='frm' onSubmit={saveData} >
        <label htmlFor='#'>UserName:</label>
        <input type='text' name='username' id="username" ref={inp1}/>
        <br/><br/>

        <label htmlFor='#'>Email:</label>
        <input type='text' name='email' id="email" ref={inp1}/>
        </form>
        <br/><br/>
        <input type="submit" value="Save" />
    </div>
  )
}
export default UseRef;
