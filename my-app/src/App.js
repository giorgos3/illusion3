import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateUser from './components/CreateUser'
import Login from './components/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App(){

 
  return (
    <Switch>
        <Route exact path="/register"   component={CreateUser} ></Route>
        <Route path="/" component={Login}></Route>
      </Switch>
    
  );
  


}

export default App;

