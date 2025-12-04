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
import ApiExample from './ApiExample'
import  ApiCrudExample  from './ApiCrudExample';
import   NewCrud  from './NewCrud';
import { BrowserRouter, Link, Route } from 'react-router'
import Menu from './Menu'
import { Home } from './Home'
import { Contact } from './Contact'
import { About } from './About'
import { Routes } from 'react-router'
import { About1 } from './About1'
import { About2 } from './About2'
import  Navigation  from './Navigation'
import { First } from './First'
import { Home1 } from './Home1'
import { UseRefExample } from './UseRefExample'
import { ContextExample } from './ContextExample'
import UseContextExample from './UseContextExample'
import  CrudComponent  from './CrudComponent'
import  OldCrud  from './OldCrud'




function App() {
  
  return (
    <>
     {/* <h3>vite project</h3> */}
     {/* <Menu/> */}
    {/* <BrowserRouter>  */}
    {/* <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}>
         <Route path='a1' element={<About1/>}/>
         <Route path='a2' element={<About2/>}/>
      </Route>
      <Route path='/contact' element={<Contact/>}/>
    </Routes> */}
    
     {/* </BrowserRouter>  */}
     {/* <ClassExample/> */}
     {/* <LifecycleClass/>  */}
       {/* <Usercomponent/>    */}
      {/* <PropExample myname="riddhi" myage="21"/>  */}
     {/* <PropExample2/> */}
     {/* <ReactComponent/> */}
      {/* <Practice/>  */}
      {/* <EmpComponent/>   */}
     {/* <ApiExample />  */}
      {/* <ApiCrudExample/>  */}
        {/* <NewCrud/>  */}
      {/* <Navigation/>
      <Routes>
        <Route path='/first' element={<First/>}/>
         <Route path='/link' element={<Link/>}/>
      </Routes>  */}
      {/* <Home1/>
      <UseRefExample/> */}
      {/* <ContextExample/> */}
      {/* <UseContextExample/> */}
      {/* <CrudComponent/> */}
      <OldCrud/>
    </>
  )
}
export default App
