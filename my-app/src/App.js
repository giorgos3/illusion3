import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shop from './components/Shop';
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




function App() {



  const Language = [{


    'en': {
      'shop': 'Shop',
      'about': 'About Us',
      'contact': 'Contact Us',
      'selectLang':'Select Language',
      'view_product':'View Product',
      'login':'Login',
      'category':'Category',
      'all':'All',
      'men_cloth':'Men Clothing',
      'women_cloth':'Women Clothing',
      'jewellery':'Jewellery',
      'electronic':'Electronic'
    },

    'ru': {
      'shop': 'Магазин',
      'about': 'Насчет нас',
      'contact': 'Связаться с нами',
      'selectLang':'Выбрать язык',
      'view_product':'Посмотреть продукт',
      'login':'авторизоваться',
      'category':'Категория',
      'all':'Все',
      'men_cloth':'Мужская одежда',
      'women_cloth':'Женская одежда',
      'jewellery':'Ювелирные изделия',
      'electronic':'Электронный',
    },
    'pt': {
      'shop': 'Fazer Compras',
      'about': 'Sobre nós',
      'contact': 'Contato',
      'selectLang':'Selecione o idioma',
      'view_product':'Ver produto',
      'login':'Conecte',
      'category':'Categoría',
      'all':'Todos',
      'men_cloth':'Roupas masculinas',
      'women_cloth':'Roupas Femininas',
      'jewellery':'Jóias',
      'electronic':'Eletrônica',
    },
    'es': {
      'shop': 'Tienda',
      'about': 'Sobre nosotras',
      'contact': 'Contacto',
      'selectLang':'Seleccione el idioma',
      'view_product':'Ver el producto',
      'login':'iniciar',
      'category':'Categoría',
      'all':'Todas',
      'men_cloth':'Hombres Ropa',
      'women_cloth':'Ropa de mujeres',
      'jewellery':'Joyería',
      'electronic':'Electrónica'
    },
  }
  ];



  localStorage.setItem("language", JSON.stringify(Language));



  let history = useHistory();
  return (

    <div className="page-container">
      <div className="content-wrap">
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/checkout" component={CheckOut} ></Route>
            <Route exact path="/product/:id" component={ProductDetail} ></Route>
            <Route exact path="/contact" component={Contact} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/login" component={Login} restricted={true}></Route>
            <Route exact path="/register" component={CreateUser} ></Route>
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/" component={Shop}></Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>

  );



}

export default App;

