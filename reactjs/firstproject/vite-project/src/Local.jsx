import { all } from 'axios'
import React, { useEffect, useState } from 'react'

const Local = () => {
   const [data,setData]=useState({
    name:"",
    age:"",
    salary:""
   })
   const [alldata,setAllData]=useState([])
   const [id,setId]=useState('')
   const handleChange=(e)=>{
    let {name,value}=e.target
    setData({
        ...data,
        [name]:value
    })
   }
   const saveData=(e)=>{
    e.preventDefault()
    let data1;
    if(id!=""){
        let res=alldata.map((i,index)=>{
            if(index==id){
                i=data
            }
            return i
        })
        setAllData(res)
    }
    else{
        alldata.push()
        data1=[...alldata]
    }
    setAllData(data1)
    localStorage.setItem("data",JSON.stringify(alldata))
    setId('')
    setData({
        name:"",
        age:"",
        salary:""
    })
   }
   useEffect(()=>{
    let formdata=JSON.parse(localStorage.getItem("data"))
    if(formdata!=null)setAllData(formdata)
   },[])
const editdata=(id)=>{
    let res=alldata.find((i,index)=>{
        return index==id
    })
    setData(res)
    setId(id)
}
const deldata=(id)=>{
    let res=alldata.filter((i,index)=>{
        return index!=id
    })
    setAllData(res)
    localStorage.setItem("data",JSON.stringify(res))
}
    return (
        <div>
            <h4>User Information</h4>
            <form action="#" method="post" name='frm' onSubmit={saveData}>
                <label htmlFor=''>Name:</label>
                <input type='text' name='name' id="name" value={data.name} onChange={handleChange} />
                <br /><br />

                <label htmlFor=''>Age:</label>
                <input type='number' name='age' id="age" value={data.age} onChange={handleChange} />
                <br /><br />

                <label htmlFor=''>Salary:</label>
                <input type='number' name='salary' id="salary" value={data.salary} onChange={handleChange} />
                <br /><br />
                <input type="submit" value="Save" />
            </form>
            <br /><br />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alldata.map((i, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>{i.salary}</td>
                                    <td>
                                        <button onClick={() => editdata(index)}>Edit</button>
                                        <button onClick={() => deldata(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Local