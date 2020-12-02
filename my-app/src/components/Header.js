import React,{useState, useEffect} from 'react';
import _ from 'lodash';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    Link
  } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {getLogged} from './action/isLogged';
import {getLANG, getLANG_ES, getLANG_RU, getLANG_PT } from './action/lang'
import '../App.css';






const Header  = () =>{

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLogged);
  const [langList , setLangList] = useState('en')
  const lang = useSelector((state) => state.Language.lang[0]);

  console.log(lang)
  
  


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
        
        <Link to="/" style={{ textDecoration: 'none', padding:'10px' }}>{lang}</Link>
        <Link to="/about" style={{ textDecoration: 'none', padding:'10px' }}>About Us</Link>
        <Link to="/contact"style={{ textDecoration: 'none', padding:'10px' }}>Contact Us</Link>

        <div className="language">
      <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             Select Language
            </Dropdown.Toggle>
              <div className="">
              <Dropdown.Menu>
                  <Dropdown.Item onClick={dispatch(getLANG())} >English</Dropdown.Item>
                  <Dropdown.Item onClick={dispatch(getLANG_RU())} >Russian</Dropdown.Item>
                  <Dropdown.Item onClick={dispatch(getLANG_PT())} >Portuguese</Dropdown.Item>
                  <Dropdown.Item onClick={dispatch(getLANG_ES())} >Español</Dropdown.Item>
              </Dropdown.Menu> 
            </div>
        </Dropdown>

      </div>
      
        
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
                  <Dropdown.Item >
                  <Link to="/profile" style={{ textDecoration: 'none', padding:'10px' }}>
                      Profile
                    </Link>
                    </Dropdown.Item>
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
    



)}





export default Header;