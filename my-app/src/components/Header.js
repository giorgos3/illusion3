import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import 'font-awesome/css/font-awesome.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Header  = () =>{

return( 
   
    <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">E-shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
   
  
      <div className="mr-auto">
        <Link to="/" style={{ textDecoration: 'none', padding:'10px' }}>Home</Link>
        <Link to="/dashboard" style={{ textDecoration: 'none', padding:'10px' }}>Shop</Link>
        <Link to="/about" style={{ textDecoration: 'none', padding:'10px' }}>About Us</Link>
        <Link to="/contact"style={{ textDecoration: 'none', padding:'10px' }}>Contact Us</Link>
        
      </div>
      <Link to="/" style={{ textDecoration: 'none', padding:'10px' }}>
      <div><i className="fa fa-user" style={{color:'white'}}></i></div>
      </Link>
   
 
  </Navbar.Collapse>
</Navbar>
  </>
    



)

}



export default Header;