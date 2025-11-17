
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, Button, Row, Col, Container, Table } from 'react-bootstrap';

const Usercomponent=()=> {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[salary,setSalary]=useState("")
    const[data,setData]=useState([])
    const[id,setId]=useState('')
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const saveData=(e)=>{
        e.preventDefault();
        if(id !=""){
            //update
            let res = data.map((i,index)=>{
                if(index == id){
                    i.name=name
                    i.age=age
                    i.salary=salary
                }
                return i
            })
            setData(res)
        }
        else{
            //insert
        setData([
            ...data,
           // {name,age,salary},
        {
            "name":name,
            "age":age,
            "salary":salary
        }
       ])
    }
    setName("");
    setAge("");
    setSalary("");
    setId("");  
};

    const delData=(id)=>{
        //1 2 3  5 id=4
        let res=data.filter((i,index)=>{
            return index !=id
        })
        setData(res)
    }
    const editData=(id)=>{
        //1 2 3  5 id=4
        let res=data.find((i,index)=>{
            return index ==id
        })
        setName(res.name)
        setAge(res.age)
        setSalary(res.salary)
        setId(id);
    }
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <h3>User Form</h3>
                            <Form name="frm" method="post" action="#" onSubmit={saveData}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        onChange={handleName}
                                        value={name}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Age:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder='Enter age'
                                        name="age"
                                        onChange={(e)=>setAge(e.target.value)}
                                        value={age}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword1">
                                    <Form.Label>Salary:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder='Enter salary'
                                        name="salary"
                                        onChange={(e)=>setSalary(e.target.value)}
                                        value={salary}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit"> Save</Button>
                                <Button variant="danger" type="reset">Cancel</Button>
                            </Form>
                        </Col>
                        <Col>
                            <h3>User List</h3>
                            <Table striped bordered hover>
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
                                                <Button variant="danger" type="submit" onClick={()=>delData
                                                (index)}> Delete
                                                </Button>
                                                 <Button variant="primary" type="submit" onClick={()=>editData
                                                (index)}> Edit</Button>   
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
export default Usercomponent;