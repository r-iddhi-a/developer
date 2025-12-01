import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[],
            loading:true
        };
    }

  componentDidMount(){
    console.log("Component mounted..");

    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({users:data,loading:false});
      })
      .catch((error)=>console.log("Error factching data:",error));

  }
  render() {
    const{users,loading}=this.state;
    return (
      <div>
        <h2>Fetched Users</h2>
        {loading ? 
        (<p>Loading...</p>):
        (<ul>
          {users.map((users)=>{
            <li key={users.id}>{users.name}</li>
          })}
        </ul>)}
      </div>
    )
  }
}
export default LifeCycle;
