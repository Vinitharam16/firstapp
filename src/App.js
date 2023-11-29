import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import FormikPlayground from './pages/test.jsx';
import RefPlayground from './pages/RefPlayground.jsx';
import Refform from './pages/Refform.jsx';
import Todo from './pages/Todo.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Groceries from './pages/Groceries.jsx';
import Perfumes from './pages/Perfumes.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Login from './pages/Authentication/Login.jsx';
import Signup from './pages/Authentication/Signup.jsx';
import Notfound from './pages/Notfound.jsx';
import { useAuthentication } from './Contexts/Authentication.context.js';


function App() {
  const {loggedIn, setLoggedIn} = useAuthentication();
  function renderRoutes(flag = false) {
    if(flag) {
      return (
        <React.Fragment>
          <Route path="/home" Component={Home} />
          <Route path='/contact' Component={Contact} />
          <Route path='/formik' Component={FormikPlayground} />
          <Route path='/ref' Component={RefPlayground} />
          <Route path='/refform' Component={Refform} />
          <Route path='/todo' Component={Todo} />
          <Route path='/product' Component={Product}>
            <Route path='/product/groceries' Component={Groceries} />
            <Route path='/product/perfumes' Component={Perfumes} />
          </Route>
          <Route path='/groceries/:type' Component={Groceries} />
          <Route path='/cart' Component={Cart} />
        </React.Fragment>
      );    
    } 
    else {
      return (
        <React.Fragment>
        <Route path='/' Component={Login} />
        <Route path='/signup' Component={Signup} />
        </React.Fragment>
      );
    }
  }



  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>{renderRoutes(loggedIn)}
      <Route path='*' Component={Notfound}/>
      </Routes>
    </div>
  );
}

export default App;
