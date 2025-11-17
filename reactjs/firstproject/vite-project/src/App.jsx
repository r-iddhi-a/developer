import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClassExample from './ClassExample'
import LifecycleClass from './LifecycleClass'
import Usercomponent from './Usercomponent'
import { PropExample } from './PropExample'
import { ReactComponent } from './ReactComponent'
import Practice from './Practice'
import { EmpComponent } from './EmpComponent'
import { ApiExample } from './ApiExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h3>vite project</h3>
     {/* <ClassExample/> */}
     {/* <LifecycleClass/> */}
       {/* <Usercomponent/>   */}
      {/* <PropExample myname="riddhi" myage="21"/>  */}
     {/* <PropExample2/> */}
     {/* <ReactComponent/> */}
      {/* <Practice/>  */}
     {/* <EmpComponent/>  */}
     <ApiExample/>
    </>
  )
}
export default App
