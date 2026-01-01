import React, { useState } from 'react'
import { del, ins, upd } from './CoReducer'
import { useDispatch, useSelector } from 'react-redux'

const CoComponent = () => {
    const [data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const alldata=useSelector((i)=>i.User.data)
    const dispatch=useDispatch()
    const [id,setId]=useState("")
    const saveData=(e)=>{
        e.preventDefault()
        if(id!=""){
            dispatch(upd({id,data}))
        }
        else{
            dispatch(ins(data))
        }
        setData({
            name: "",
            age: "",
            salary: ""
        })
        setId('')
    }
    const handleChange=(e)=>{
        let {name, value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const editdata=(id)=>{
        let res=alldata.find((i,index)=>{
            return index==id
        })
        setData(res)
        setId(id)
    }
    return (
        <div>
            <h3>User Componet</h3>
            <form action="#" method="post" name="frm" onSubmit={saveData}>
                name:
                <input type="text" name='name' id="name" value={data.name} onChange={handleChange} />
                <br /><br />

                Age:
                <input type="number" name='age' id="age" value={data.age} onChange={handleChange} />
                <br /><br />

                Salary:
                <input type="number" name='salary' id="salary" value={data.salary} onChange={handleChange} />
                <br /><br />
                <input type="submit" value="Save" />
            </form>
            <br /><br />
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        alldata.map((i,index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>{i.salary}</td>
                                    <td>
                                        <button onClick={()=>editdata(index)}>Edit</button>
                                        <button onClick={()=>dispatch(del(index))}>Delete</button>
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
export default CoComponent;
