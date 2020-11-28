import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    Link
  } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {getLogged} from './action/isLogged';
import '../App.css';



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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <i className="fa fa-user" style={{color:'white'}}></i>
            </Dropdown.Toggle>
              <div className="header-menu" style={{background:'red'}}>
              <Dropdown.Menu>
                  <Dropdown.Item >Profile</Dropdown.Item>
                  <Dropdown.Item >Order History</Dropdown.Item>
                  <Dropdown.Item >Change Password</Dropdown.Item>
                  <Dropdown.Item onClick={ () =>{ dispatch(getLogged()) }} >Logout</Dropdown.Item>
              </Dropdown.Menu> 
            </div>
        </Dropdown>

        
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