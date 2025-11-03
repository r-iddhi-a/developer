import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import Statecomponent from './Statecomponent';
import { Styledcomponent } from './Styledcomponent';

function App() {
  let a=20
  var b=35
  const name="abc"
  let age=25
  let salary=15000
  return (
    <>
    <div>
      <h3>First React Project</h3>
      <h4>A is {a}</h4>
      <h4>Addition is {a+b}</h4>
    </div>
    <Firstcomponent/>
    <Secondcomponent myname={name} myage={age} sal={salary} />
    <Statecomponent/>
    <Styledcomponent/>
    </>
  );
}

export default App;
