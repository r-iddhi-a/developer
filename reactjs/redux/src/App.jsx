import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './CounterComponent'
import { UserComponent } from './CrudRedux/UserComponent'
import { RtkComponent } from './RTK/RtkComponent'
import FirebaseCRUD from './CrudRedux/FirebaseCRUD'
import  UseContext  from './Practical/UseContext'
import UseRef from './Practical/UseRef'
import ReComponent from './Revision/ReComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CounterComponent/> */}
      {/* <UserComponent/> */}
      {/* <RtkComponent/> */}
      {/* <FirebaseCRUD/> */}
      {/* <UseContext/> */}
      {/* <UseRef/> */}
      <ReComponent/>
    </>
  )
}

export default App
