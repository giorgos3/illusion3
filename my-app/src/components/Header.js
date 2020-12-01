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
// import {getLang} from './action/getLang';
import '../App.css';





const Header  = () =>{

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLogged);
  const getLang = useSelector((state) => state.getLang);
  const [language, setLanguage] = useState('en');

 

 
    
  

   // let lang = getLang[0].en;

  console.log(getLang)

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
        
          {/* <Link to="/" style={{ textDecoration: 'none', padding:'10px' }}>{lang.language.shop}</Link>
        <Link to="/about" style={{ textDecoration: 'none', padding:'10px' }}>{lang.language.about_us}</Link>
        <Link to="/contact"style={{ textDecoration: 'none', padding:'10px' }}>{lang.language.contact_us}</Link> */}
        {/* <select name="language" id="language">
          <option value="en" onClick={setLanguage('en')}>English</option>
          <option value="ru" onClick={setLanguage('ru')} >Russian</option>
          <option value="es" onClick={setLanguage('es')} >Espanyol</option>
          <option value="pt" onClick={setLanguage('pt')} >Portuguese</option>
      </select> */}
        
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