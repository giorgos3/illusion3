import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import {
    Link
  } from "react-router-dom";
  import {useDispatch, useSelector} from 'react-redux';


const Header  = () =>{

  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.isLogged)


return( 
   
    <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand>
    <Link to="/" style={{ textDecoration: 'none', padding:'10px' }}>
      E-shop
    </Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
   
  
      <div className="mr-auto">
        
        <Link to="/" style={{ textDecoration: 'none', padding:'10px' }}>Shop</Link>
        <Link to="/about" style={{ textDecoration: 'none', padding:'10px' }}>About Us</Link>
        <Link to="/contact"style={{ textDecoration: 'none', padding:'10px' }}>Contact Us</Link>
        
      </div>
      <Link to="/checkout" style={{ textDecoration: 'none', padding:'10px' }}>
      <div><i className="fa fa-shopping-basket" style={{color:'white'}}></i></div>
      </Link>
      { isLogged === true ? 
        <Link to="/" style={{ textDecoration: 'none', padding:'10px' }}>
        <div><i className="fa fa-user" style={{color:'white'}}></i></div>
        </Link>
      : 
      
      <Link to="/login" style={{ textDecoration: 'none', padding:'10px' }}>
      <div><i className="fa fa-lock" style={{color:'white'}}></i></div>
      </Link>
      }
      
   
 
  </Navbar.Collapse>
</Navbar>
  </>
    



)

}



export default Header;