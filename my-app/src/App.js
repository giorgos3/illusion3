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
import Payment from './components/payment';
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
      'selectLang': 'Select Language',
      'view_product': 'View Product',
      'add_card': 'Add Card',
      'exist': 'Already in Basket',
      'login': 'Login',
      'category': 'Category',
      'all': 'All',
      'men_cloth': 'Men Clothing',
      'women_cloth': 'Women Clothing',
      'jewellery': 'Jewellery',
      'electronic': 'Electronic',
      'checkout_empty': 'YOUR SHOPPING CART IS EMPTY',
      'shop_find': 'We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!',
      'go_shop': 'Go To Shop',
      'product':'Product',
      'quantity':'Quantity',
      'title':'Title',
      'price':'Price',
      'remove':'REMOVE',
      'tot_amount':'Total Amount',
      'proceed':'Proceed Checkout',
      'name':'Name',
      'surname':'Surname',
      'company':'Company(Optional)',
      'country':'Country/Region',
      'street':'Street Adress',
      'town':'Town/City',
      'zip_code':'PostCode / ZIP',
      'email':'Email Address',
      'other':'Other(Optional)',
      'submit':'Submit'

    },

    'ru': {
      'shop': 'Магазин',
      'about': 'Насчет нас',
      'contact': 'Связаться с нами',
      'selectLang': 'Выбрать язык',
      'view_product': 'Посмотреть продукт',
      'add_card': 'Добавить карту',
      'exist': 'Уже в корзине',
      'login': 'авторизоваться',
      'category': 'Категория',
      'all': 'Все',
      'men_cloth': 'Мужская одежда',
      'women_cloth': 'Женская одежда',
      'jewellery': 'Ювелирные изделия',
      'electronic': 'Электронный',
      'checkout_empty': 'ВАША КОРЗИНА ПУСТА',
      'shop_find': 'Приглашаем вас ознакомиться с ассортиментом нашего магазина. Наверняка можно найти что-нибудь для себя!',
      'go_shop': 'Идти в магазин',
      'product':'Товар',
      'quantity':'Количество',
      'title':'заглавие',
      'price':'Цена',
      'remove':'УДАЛЯТЬ',
      'tot_amount':'Итого',
      'proceed':'Продолжить оформление заказа',
      'name':'имя',
      'surname':'фамилия',
      'company':'Компания (необязательно)',
      'country':'Страна / регион',
      'street':'Адрес улицы',
      'town':'Город / Город',
      'zip_code':'Почтовый индекс',
      'email':'Эл. адрес',
      'other':'Другое (необязательно)',
      'submit':'Разместить'

    },
    'pt': {
      'shop': 'Fazer Compras',
      'about': 'Sobre nós',
      'contact': 'Contato',
      'selectLang': 'Selecione o idioma',
      'view_product': 'Ver produto',
      'add_card': 'Adicionar cartão',
      'exist': 'Já está na cesta',
      'login': 'Conecte',
      'category': 'Categoría',
      'all': 'Todos',
      'men_cloth': 'Roupas masculinas',
      'women_cloth': 'Roupas Femininas',
      'jewellery': 'Jóias',
      'electronic': 'Eletrônica',
      'checkout_empty': 'SEU CARRINHO DE COMPRAS ESTÁ VAZIOYOUR SHOPPING CART IS EMPTY',
      'shop_find': 'Convidamo-lo a conhecer uma grande variedade da nossa loja. Certamente você pode encontrar algo para você!',
      'go_shop': 'Vá para a loja',
      'product':'produtos',
      'quantity':'Quantidade',
      'title':'Título',
      'price':'Preço',
      'remove':'REMOVER',
      'tot_amount':'Valor total',
      'proceed':'Proceder checkout',
      'name':'Nome',
      'surname':'Sobrenome',
      'company':'Companhia (opcional)',
      'country':'País / Região',
      'street':'Endereço',
      'town':'Cidade Cidade',
      'zip_code':'Código Postal',
      'email':'O email',
      'other':'Outro (opcional)',
      'submit':'Enviar'
    },
    'es': {
      'shop': 'Tienda',
      'about': 'Sobre nosotras',
      'contact': 'Contacto',
      'selectLang': 'Seleccione el idioma',
      'view_product': 'Ver el producto',
      'add_card': 'Agregar tarjeta',
      'exist': 'Ya en la cesta',
      'login': 'iniciar',
      'category': 'Categoría',
      'all': 'Todas',
      'men_cloth': 'Hombres Ropa',
      'women_cloth': 'Ropa de mujeres',
      'jewellery': 'Joyería',
      'electronic': 'Electrónica',
      'checkout_empty': 'SU CESTA ESTÁ VACÍA',
      'shop_find': 'Le invitamos a familiarizarse con un surtido de nuestra tienda. ¡Seguro que puedes encontrar algo para ti!',
      'go_shop': 'Ir a la tienda',
      'product':'Producto',
      'quantity':'Cantidad',
      'title':'Título',
      'price':'Precio',
      'remove':'ELIMINAR',
      'tot_amount':'Cantidad total',
      'proceed':'Continuar con el pago',
      'name':'Nombre',
      'surname':'Apellido',
      'company':'Companía (opcional)',
      'country':'País / Región',
      'street':'Dirección',
      'town':'Pueblo / Ciudad',
      'zip_code':'Código postal',
      'email':'Email',
      'other':'Otro (opcional)',
      'submit':'Enviar'

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
            <Route exact path="/payment" component={Payment} ></Route>
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

