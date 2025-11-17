import React, { Component } from 'react'

export default class 
 extends Component {
  constructor(){
    super()
    this.state={
      name:"riddhi",
      age:22,
      salary:25000
    }
    this.handleClick=()=>{
      this.setState({
        name:"Abc"
      })
    }
     this.handleage=()=>{
      this.setState({
        age:28
      })
    }
    this.handlesalary=()=>{
      this.setState({
        salary:50000
      })
    }
  }
  render() {
    return (
      <div>
          <h3>Name is--{this.state.name}</h3>
          <h3>Age is--{this.state.age}</h3>
          <h3>Salary is--{this.state.salary}</h3>
          <button onClick={this.handleClick}>Set New Name</button>
          <button onClick={this.handleage}>Set New Age</button>
          <button onClick={this.handlesalary}>Set New Salary</button>
      </div>
    )
  }
}
