import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/Home' Component={Home} />
        <Route path='/Contact' Component={Contact} />
      </Routes>


    </div>
  );
}

export default App;
