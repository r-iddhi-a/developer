import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase'


const FirebaseCRUD = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        pwd:"",
    })
    const [alldata,setAlldata]=useState([])
    const handleChange=(e)=>{
        let {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData=async(e)=>{
        e.preventDefault();
        await addDoc(collection(db,"Userinfo"),data)
        setData({
            name:"",
            email:"",
            pwd:""
        })
    }
  return (
    <div>
        <h3>Firebase Crud</h3>
        <form action='#' method='post' name='frm' onSubmit={saveData}>
        <label htmlFor=''>Name:</label>
        <input type='text' name='name' id="name" value={data.name} onChange={handleChange} />
        <br/><br/>

        <label htmlFor=''>Email:</label>
        <input type='email' name='email' id="email" value={data.email} onChange={handleChange} />
        <br/><br/>

        <label htmlFor=''>Password:</label>
        <input type='password' name='pwd' id="pwd" value={data.pwd} onChange={handleChange} />
        <br/><br/>
        <input type="submit" value="Save" />
        </form>
        <br/><br/>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    alldata.map((i,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.pwd}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default FirebaseCRUD