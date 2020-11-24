import React from 'react';
import CreateUser from './components/CreateUser'
import Login from './components/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Header  = () =>{

return( 
    <Router>
      <div>
        <nav>
          <ul>
              
            <li>
              <Link to="/register" >Register</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
      </div>
    </Router>
)

}



export default Header;