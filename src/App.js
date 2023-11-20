import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import FormikPlayground from './pages/test.jsx';

function App() {

  return (
    <div className="App">
      <div>
        <Link to={'/home'} >Home</Link>
        <Link to={'/contact'} >Contact</Link>
        <Link to={'/formik'} >Formik</Link>
      </div>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path='/contact' Component={Contact} />
        <Route path='/formik' Component={FormikPlayground} />
      </Routes>


    </div>
  );
}

export default App;
