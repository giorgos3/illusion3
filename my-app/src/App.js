import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  DashBoard from './components/DashBoard';
import CreateUser from './components/CreateUser';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";


function App(){

  let history = useHistory();
  return (
    <Router history={history}>
    <Switch>
        <Route exact path="/contact"   component={Contact} ></Route>
        <Route exact path="/about"   component={About} ></Route>
        <Route exact path="/dashboard"   component={DashBoard} ></Route>
        <Route exact path="/register"   component={CreateUser} ></Route>
        <Route exact path="/" component={Login}></Route>
      </Switch>
      </Router>
    
  );
  


}

export default App;

