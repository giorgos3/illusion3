import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'

const Footer = () =>{


    return( 
   
        <>
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">E-shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        
       
          {/* <Switch>
          <div className="mr-auto">
            <Link to="/" style={{ textDecoration: 'none', padding:'10px' }}>Home</Link>
            <Link to="/dashboard" style={{ textDecoration: 'none', padding:'10px' }}>Shop</Link>
            <Link to="/about" style={{ textDecoration: 'none', padding:'10px' }}>About Us</Link>
            <Link to="/contact"style={{ textDecoration: 'none', padding:'10px' }}>Contact Us</Link>
          </div>
          </Switch>   */}
       
     
      </Navbar.Collapse>
    </Navbar>
      </>
        
    
    
    
    )

}

export default Footer;