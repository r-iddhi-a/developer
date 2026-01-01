import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import JsxComponent from './JsxComponent';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import UserCard from './UserCard';
import Counter from './Counter';
import FormComponent  from './FormComponent';
import LifeCycle from './LifeCycle';
import Event from './Event';
import LoginLogout from './LoginLogout';
import VoteComponent from './VoteComponent';
import List from './List';
import Key from './Key';
import CounterComponent from './CounterComponent';
import UseEffect from './UseEffect';
import Navigation from './Navigation';
import { First } from './First';
import { Demo } from './Demo';
import { BrowserRouter, Routes } from 'react-router'
import { Route } from 'react-router';
import { ContextApi } from './Context/ContextApi';
import UserEvent from './UserEvent';


function App() {
  return (
     <div>
      {/* <Hello />
      <JsxComponent/>
      <FunctionComponent name="Riddhi"/>
      <ClassComponent/>
      <UserCard name="Siya" age="21" location="India"/>
      <Counter/> */}
      {/* <FormComponent/> */}
      {/* <LifeCycle/> */}
      {/* <Event/> */}
      {/* <LoginLogout/> */}
      {/* <VoteComponent/> */}
      {/* <List/> */}
      {/* <Key/> */}
      {/* <CounterComponent/> */}
      {/* <UseEffect/> */}

      {/* <Navigation/>
      <BrowserRouter>
      <Routes>
        <Route path='/first' element={<First/>}/>
         <Route path='/link' element={<Demo/>}/>
      </Routes>
      </BrowserRouter>   */}
      <ContextApi/>
      {/* <UserEvent/> */}
    </div>
    
  );
}

export default App;
