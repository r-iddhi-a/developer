import React, { useState } from 'react'


const CrudComponent = () => {
    const [data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const[allData,setAllData]=useState([])
    const handleChange=(e)=>{
        let{name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData=(e)=>{
        e.preventDefault()
       setAllData([...allData,data])
    }
    return (
        <div>
            <h4>Crud Example</h4>
            <form action="#" method="post" name="frm" onSubmit={saveData}>
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
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((i, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>{i.salary}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default CrudComponent;
