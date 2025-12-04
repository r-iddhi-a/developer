import React, { useState } from 'react'

const NewCrud = () => {
  const [data,setData]=useState({
    name:"",
    age:"",
    salary:""
  })
  const [alldata,setAllData]=useState([])
  const [id,setId]=useState('')
  const handleChange=(e)=>{
    let{name,value}=e.target;
    setData({
      ...data,
      [name]:value,
    })
  }
  const saveData=(e)=>{
    e.preventDefault()
    if(id!=""){
      let res=alldata.map((i,index)=>{
        if(index==id){
          i=data
        }
        return i;
      })
      setAllData(res)
    }
    else{
      setAllData([...alldata,data])
    }
    setId(id)
    setData({
      name:"",
      age:"",
      salary:""
    })
  }
  const editdata=(id)=>{
    let res=alldata.find((i,index)=>{
      return index==id
    })
    setId(id)
    setData(res)
  }
  const deldata=(id)=>{
    let res=alldata.filter((i,index)=>{
      return index!=id
    })
    setAllData(res)
  }
  return (
    <div>
      <h3>Short Crud</h3>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange} />
        <br /><br />

        Age:
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange} />
        <br /><br />

        Salary:
        <input type="number" name="salary" id="salary" value={data.salary} onChange={handleChange} />
        <br /><br />

        <input type="submit" value="save" />
      </form>
      <br /><br />
      <table border={2}>
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
            alldata.map((i,index)=>{
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
export default NewCrud;
