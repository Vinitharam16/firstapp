import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import FormikPlayground from './pages/test.jsx';
import RefPlayground from './pages/RefPlayground.jsx';
import Refform from './pages/Refform.jsx';
import Todo from './pages/Todo.jsx';


function App() {

  return (
    <div className="App">
      <div>
        <Link to={'/home'} >Home</Link>
        <Link to={'/contact'} >Contact</Link>
        <Link to={'/formik'} >Formik</Link>
        <Link to={'/ref'} >Use Ref Playground</Link>
        <Link to={'/refform'} >Use Ref Form</Link>
        <Link to={'/todo'} >Todo</Link>
      </div>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path='/contact' Component={Contact} />
        <Route path='/formik' Component={FormikPlayground} />
        <Route path='/ref' Component={RefPlayground} />
        <Route path='/refform' Component={Refform} />
        <Route path='/todo' Component={Todo} />
      </Routes>


    </div>
  );
}

export default App;
