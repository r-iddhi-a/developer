import React, { useState } from 'react'

const FormComponent = () => {
    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const[error,setError]=useState({});
    const[submittedData,setSubmittedData]=useState(null);

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setData({
            ...data,
            [name]:value
        });
    }

    //form validation
    const validate=()=>{
        const newErrors={};

        if(!data.name.trim()){
            newErrors.name="Name is required";
        }
        if(!data.email.trim()){
            newErrors.email="Email is required";
        }
        else if(!/^\S+@\S+\.\S+$/.test(data.email)){
            newErrors.email = "Enter a valid email address";
        }

        if(!data.password.trim()){
            newErrors.password="Password is required";
        }
        else if(data.password.length<6){
            newErrors.password = "Password must be at least 6 characters long";
        }
        return newErrors;
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        const validationErrors=validate();
        setError(validationErrors);

        if(Object.keys(validationErrors).length===0){
            setSubmittedData(data);
        }
    }
    
  return (
    <div>
        <h3>Registration Form</h3>
        <form action='#' method='post' name='frm' onSubmit={handleSubmit}>
            <label for="">Name:</label>
            <input type="text" name="name" id="name" onChange={handleChange} value={data.name}/>
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            <br/><br/>

            <label for="">Email:</label>
            <input type="text" name="email" id="email" onChange={handleChange} value={data.email}/>
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            <br/><br/>

            <label for="">Password:</label>
            <input type="password" name="password" id="password" onChange={handleChange} value={data.password}/>
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
            <br/><br/>

            <button type="submit">Submit</button>
        </form>

        {submittedData &&(
            <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
        )}
    </div>
  )
}
export default FormComponent;
