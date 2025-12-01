import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewCrud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: ""
  })
  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState('')
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const editdata=(id)=>{
    axios.patch("http://localhost:3000/users/"+id)
    .then((res)=>setData(res.data));
    setId(id);
  }
  useEffect(()=>{
    disp()
  })
  const disp=()=>{
    axios.get("http://localhost:3000/users")
    .then((res)=>setAlldata(res.data))
  }
  const deldata=(id)=>{
    axios.delete("http://localhost:3000/users/"+id)
    .then(()=>console.log("deleted"))
    disp()
  }
  const saveData=(e)=>{
    e,preventDefault()
    if(id!=""){
        axios.put("http://localhost:3000/users/"+id,data)
        .then(()=>console.log("updated"));
    }else{
      axios.post("http://localhost:3000/users",data)
      .then(()=>console.log("insertrd"));
    }
    disp();
    setData({
      name:"",
      age:"",
      salary:""
    })
  }
  return (
    <div>
      <h3>Api Crud</h3>
      <form name='frm' action="#" method="post" onSubmit={saveData}>
        <label htmlFor=''>Name:</label>
        <input type='text' name='name' id="name" value={data.name} onChange={handleChange} />
        <br /><br />

        <label htmlFor=''>Age:</label>
        <input type='number' name='age' id="age" value={data.age} onChange={handleChange} />
        <br /><br />

        <label htmlFor=''>Salary:</label>
        <input type='number' name='salary' id="salary" value={data.salary} onChange={handleChange} />
        <br /><br />

        <input type="submit" value="Save Data" />
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
            alldata.map((i)=>{
              return(
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                  <td>
                    <button onClick={()=>editdata(i.id)}>Edit</button>
                    <button onClick={()=>deldata(i.id)}>Delete</button>
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
export default NewCrud;
