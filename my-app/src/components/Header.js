import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getLogged } from './action/isLogged';
import { SwitchLanguageEN, SwitchLanguageRU, SwitchLanguageES, SwitchLanguagePT } from './action/LangManage'
import '../App.css';






const Header = () => {

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLogged);
  const item = useSelector((state) => state.addProduct)
  const getLang = useSelector((state) => state.getLangSwitch);


  const languages = JSON.parse(localStorage.getItem('language'))

  console.log(item)
  return (

    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: 'none', padding: '10px' }}>
            E-shop
    </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">



          <div className="mr-auto">

            <Link to="/" style={{ textDecoration: 'none', padding: '10px' }}>{languages[0][getLang].shop}</Link>
            <Link to="/about" style={{ textDecoration: 'none', padding: '10px' }}>{languages[0][getLang].about}</Link>
            <Link to="/contact" style={{ textDecoration: 'none', padding: '10px' }}>{languages[0][getLang].contact}</Link>

            <div className="language">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {languages[0][getLang].selectLang}
                </Dropdown.Toggle>
                <div className="">
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { dispatch(SwitchLanguageEN()) }} >English</Dropdown.Item>
                    <Dropdown.Item onClick={() => { dispatch(SwitchLanguageRU()) }} >Russian</Dropdown.Item>
                    <Dropdown.Item onClick={() => { dispatch(SwitchLanguagePT()) }} >Portuguese</Dropdown.Item>
                    <Dropdown.Item onClick={() => { dispatch(SwitchLanguageES()) }} >Español</Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Dropdown>

            </div>


          </div>

          <Link to="/checkout" style={{ textDecoration: 'none', padding: '10px' }}>
            <div className="basketCount">
              <i className="fa fa-shopping-basket" style={{ color: 'white' }}>
                {item.basket.length === 0 ? <div />
                  :
                  <span className="basketItem">{item.basket.length}</span>
                }

              </i>
            </div>
          </Link>
          {isLogged === true ?
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fa fa-user" style={{ color: 'white' }}></i>
              </Dropdown.Toggle>
              <div className="header-menu" style={{ background: 'red' }}>
                <Dropdown.Menu>
                  <Dropdown.Item >
                    <Link to="/profile" style={{ textDecoration: 'none', padding: '10px' }}>
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item >Order History</Dropdown.Item>
                  <Dropdown.Item >Change Password</Dropdown.Item>
                  <Dropdown.Item onClick={() => { dispatch(getLogged()) }} >Logout</Dropdown.Item>
                </Dropdown.Menu>
              </div>
            </Dropdown>


            :

            <Link to="/login" style={{ textDecoration: 'none', padding: '10px' }}>
              <div><i className="fa fa-lock" style={{ color: 'white' }}></i></div>
            </Link>
          }



        </Navbar.Collapse>
      </Navbar>
    </>




  )
}





export default Header;