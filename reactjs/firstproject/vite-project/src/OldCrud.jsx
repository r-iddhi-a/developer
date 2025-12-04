import React, { useState } from 'react'

const OldCrud = () => {
    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [salary,setSalary]=useState("")
    const [id,setId]=useState("")
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const editdata=(id)=>{
        let res=data.find((i,index)=>{
            return index==id
        })
        setName(res.name)
        setAge(res.age)
        setSalary(res.salary)
        setId(id)
    }
    const deldata=(id)=>{
        let res=data.filter((i,index)=>{
            return index!=id
        })
        setData(res)
    }
    const saveData=(e)=>{
        e.preventDefault()
        if(id!="")
        {
            let res=data.map((i,index)=>{
                if(index==id){
                    i.name=name
                    i.age=age
                    i.salary=salary
                }
                return i
            })
            setData(res)
        }
        else{
            setData([
                ...data,
                {
                   "name":name,
                   "age":age,
                   "salary":salary
                }
            ])
        }
        setName(""),
        setAge(""),
        setSalary(""),
        setId("");

    }
  return (
    <div>
        <h3>Long Crud</h3>
        <form action="#" method="post" name='frm' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type='text' name='name' id="name" value={name} onChange={handleName}/>
        <br/><br/>

        <label htmlFor="">Age:</label>
        <input type='number' name='age' id="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br/><br/>

        <label htmlFor="">Salary:</label>
        <input type='number' name='salary' id="salry" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
        <br/><br/>
        <input type="submit" value="Save" />
        </form>
        <br/><br/>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((i,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>
                                    <button onClick={()=>editdata(index)}>Edit</button>
                                    <button onClick={()=>deldata(index)}>Delete</button>
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
export default OldCrud;
