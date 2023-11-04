import React from 'react';
import ButtonComponent from './Components/Buttons/Button';
import './App.css';
import TextField from './Components/TextField/TextField';
import { Routes } from 'react-router-dom';

function App() {
  const [count,setCount] = React.useState(0);

  React.useEffect(()=>{
    console.log(`current x value is ${count}`)
  },[count])

  return (
    <div className="App">

     <ButtonComponent label="+" onClick={() => setCount(count + 1)}/>
     <h1>{count}</h1>
     <ButtonComponent label="-" onClick={() => setCount(count - 1)}/>
     <TextField placeholder="EnterSomething" />
     <TextField placeholder="Email"/>
     <TextField placeholder="DOB"/>
     <TextField placeholder="Enter Phone"/>
    
    </div>
  );
}

export default App;
