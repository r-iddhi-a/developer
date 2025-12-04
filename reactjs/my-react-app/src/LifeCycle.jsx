import React, { Component } from 'react'

export default class 
 extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      name:this.props.myname,
    };
    console.log("Constructor Called..")
  }
  componentDidMount(){
    console.log("ComponentDidMount Called...")
    setTimeout(()=>{
      this.setState({
        name:"riddhi",
      })
    },3000)
  }
  static getDerivedStateFromProps(props,state){
     console.log("getDerivedStateFromProps called...");
     console.log("props")
     console.log(props);
     console.log("state")
     console.log(state)
     return null
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate called');
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate Called...")
    console.log("Previous State")
    console.log(prevState)
    return null
  }
  componentDidUpdate(){
     console.log('Finally component updated...');
  }

  render() {
    return (
      <div>
        <h3>LifeCycle Example</h3>
        <h4>Name is--{this.state.name}</h4>
        <h4>Count is--{this.state.count}</h4>
      </div>
    )
  }
}
