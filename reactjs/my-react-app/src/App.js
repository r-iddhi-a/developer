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
      <LifeCycle/>
    </div>
    
  );
}

export default App;
