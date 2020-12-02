import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Shop from './components/Shop';
import CreateUser from './components/CreateUser';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/Login';
import Header from './components/Header'
import Footer from './components/footer';
import ProductDetail from './components/ProductDetail'
import Profile from './components/profile';
import CheckOut from './components/checkout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
  } from "react-router-dom";
  import PrivateRoute from './components/PrivateRoute';  
 



function App(){



  let history = useHistory();
  return (
    
      <div className="page-container">
        <div className="content-wrap">
          <Router history={history}>
              <Header />
              <Switch>
                <Route exact path="/checkout"   component={CheckOut} ></Route>
                <Route exact path="/product/:id"   component={ProductDetail} ></Route>
                <Route exact path="/contact"   component={Contact} ></Route>
                <Route exact path="/about"   component={About} ></Route>
                <Route exact path="/login"   component={Login} restricted={true}></Route>
                <Route exact path="/register"   component={CreateUser} ></Route>
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route exact path="/" component={Shop}></Route>
              </Switch>
            </Router> 
        </div>
          <Footer/>
      </div>
    
  );
  


}

export default App;

