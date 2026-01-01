import React, { useCallback, useState } from 'react'
import Display from './Display'

const OldCrud = () => {
    const [data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const [alldata,setAllData]=useState([])
    const handleChange=(e)=>{
        let {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData=useCallback((e)=>{
        e.preventDefault()
        setAllData([...alldata,data])
        setData({
            name:"",
            age:"",
            salary:""
        })
    },[data])
    // useCallback hooks = to prevent unneccesary function 
    // -->returns memoized function
    //--> to freeze a function
  return (
    <div>
        <h3>Crud</h3>
        <form method='post' action="#" name="frm" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name='name' id="name" value={data.name} onChange={handleChange}/>
        <br/><br/>

        <label htmlFor="">Age:</label>
        <input type="number" name='age' id="age" value={data.age} onChange={handleChange}/>
        <br/><br/>

        <label htmlFor="">Salary:</label>
        <input type="number" name='salary' id="salary" value={data.salary} onChange={handleChange}/>
        <br/><br/>
        <input type="submit" value="Save" />
        </form>
        <br/><br/>
       <Display alldata={alldata}/>
    </div>
  )
}
export default OldCrud;