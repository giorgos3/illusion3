import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Header  = () =>{

return( 
    // <Router>
    //   <div>
    //     <nav style={{background:'black'}}>
    //       <ul>
              
    //         <li>
    //           <Link to="/register" >Register</Link>
    //         </li>
    //         <li>
    //           <Link to="/">Login</Link>
    //         </li>

    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
        
    //   </div>
    // </Router>
    <>
    <Router>
    <Navbar bg="dark">
      <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
      <Navbar.Brand ><Link to="/dashboard">Shop</Link></Navbar.Brand>
      <Navbar.Brand ><Link to="/about">About Us</Link></Navbar.Brand>
      <Navbar.Brand ><Link to="/about">Contact Us</Link></Navbar.Brand>
      </Navbar>
      </Router>   
  </>
    



)

}



export default Header;