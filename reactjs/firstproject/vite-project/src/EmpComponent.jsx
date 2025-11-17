import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

export const EmpComponent = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        salary: "",
    });
    const [allData, setallData] = useState([]);
    const [id, setId] = useState("")
    const handleChange = (e) => {
        let { name, value } = e.target;
        //let nm=e.target.name
        //let val=e.target.value
        setData({
            ...data,
            [name]: value,
            //[nm]:val
        });
    };
    const saveData = (e) => {
        e.preventDefault();
        if (id != "") {
            let res = allData.map((i, index) => (index == id) ? i = data : i)
            //let res = alldata.map((i,index)=>{
            //   if(index == id){
            //        i=data;
            //    }});
            setallData(res)
        } else {
            setallData([...allData, data]);
        }
        setId("");
        setData({
            name: "",
            age: "",
            salary: "",
        })
    };
    const delData = (id) => {
        let res = allData.filter((i, index) => index != id)
        setallData(res)
    }
    const editData = (id) => {
        let res = allData.find((i, index) => index == id);
        setData(res);
        setId(id);
    }
    return (
        <div>
            <h3>Employee Data</h3>
            <form action='#' method='post' name='frm' onSubmit={saveData}>
                <label htmlFor="">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="">Age:</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    value={data.age}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="">Salary:</label>
                <input
                    type="number"
                    name="salary"
                    id="salary"
                    value={data.salary}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input type="submit" name="save" value="Save Data" />
                <br />
                <br />
            </form>
            <br />
            <tabel border={"2"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((i, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>
                                    <Button variant="danger" type="button" onClick={() => delData
                                        (index)}> Delete
                                    </Button>
                                    <Button variant="primary" type="button" onClick={() => editData
                                        (index)}> Edit
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </tabel>
        </div>
    )
}

