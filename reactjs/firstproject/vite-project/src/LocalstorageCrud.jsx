import React, { useEffect, useState } from 'react'

const LocalstorageCrud = () => {
    const [data,setData]=useState([])
    const [id,setId] =useState('')
    const [form,setForm]=useState({
        name:"",
        age:"",
        email:""
    })
    const handleChange=(e)=>{
        let {name, value}=e.target
        setForm({
            ...form,
            [name]:value,
        })
    }
    useEffect(()=>{
        let allData=JSON.parse(localStorage.getItem("userData"))
        if(allData != null)setData(allData);
    },[]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        let data1;
        if(id!==""){
            data1 =data.map((i,index)=>{
                if(index == id){
                    i = form
                }
                return i
            })
        }else{
            data.push(form)
            data1=[...data];
        }
        setData(data1)
        localStorage.setItem("userData",JSON.stringify(data));
        setForm({
            name:"",
            age:"",
            email:"",
        });
        setId("");
    }
    const deldata=(id)=>{
        let res =data.filter((i,index)=>index!=id)
        setData(res)
        localStorage.setItem("userData",JSON.stringify(res));
    }
    const editdata=(id)=>{
        let res =data.find((i,index)=>index == id)
        setForm(res)
        setId(id)
    }
  return (
    <div>
        <h3>User Form</h3>
        <form action="#" method="post" name="frm" onSubmit={handleSubmit}>
        <label htmlFor=''>Name:</label>
        <input type='text' name="name" id="name" value={data.name} onChange={handleChange}/>
        <br/><br/>

        <label htmlFor=''>Age:</label>
        <input type='number' name="age" id="age" value={data.age} onChange={handleChange}/>
        <br/><br/>

        <label htmlFor=''>email:</label>
        <input type='text' name="email" id="email" value={data.email} onChange={handleChange}/>
        <br/><br/>
        <input type="submit" value="Save" />
        </form>
        <br/><br/>
        <table border={2}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
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
                                <td>{i.email}</td>
                                <td>
                                    <button onClick={()=>deldata(index)}>Delete</button>
                                    <button onClick={()=>editdata(index)}>Edit</button>
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
export default LocalstorageCrud;
