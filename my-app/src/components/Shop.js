import React, { useState, useEffect } from 'react';
import BootstrapCarousel from './Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import {useDispatch, useSelector} from 'react-redux';
import  {getAll, getJewellery , getWomenCLothing, getMenCLothing, getElectronics} from './action/productsAPI';
import {ProductCheckOut } from './action/ProductCheckOut';

import {

    Link
  } from "react-router-dom";


const Shop  =  () => {
    const dispatch = useDispatch();
    
    const [products, setProducts] = useState([]);
   
    const category = useSelector((state) => state.getProductCategory)
    useEffect(() => {
        
        const fetchData = async () => { 

            
             await fetch('https://fakestoreapi.com/products/'+ category)
                .then(res=>res.json())
                .then(json=>setProducts(json))
               
            }
            fetchData();
      }, [category]);

     
    console.log(category)
    
        
      const itemProducts = () =>{
         
        // const productDetail = items.id + items.image + items.title + items.price

                return(
                    
                    products.map((items) => (
                           
                        <div className="col-lg-3 col-md-6 col-sm-12" style={{marginTop:'10px'}} key={items.id}>
                            <div  className="card mx-auto" style={{width:'auto' , textAlign:'center', height:'auto'}}>
                                <img className="mx-auto img-responsive" src={items.image} width="150" height="150" style={{paddingTop:'10px'}} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <h5 className="card-title">€{items.price}</h5>
                                    <Link type="button"  to={{pathname: `/product/${items.id}`, state: items}}><button className="btn btn-info">View Product</button></Link>
                                    {/* <Link type="button"  to='/'><button onClick={() => dispatch(ProductCheckOut(productDetail)) } className="btn btn-primary">Add Card</button></Link> */}
                                   
                                </div>
                            </div>
                        </div>
            ))

             )
      }

    
    

    return(
        
        <div className="container-fluid">
            <BootstrapCarousel></BootstrapCarousel>
            <div className="row">
              
                <div className="col-12">
                    <h3 style={{textAlign: "center"}}>Shop</h3>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={ () =>dispatch(getAll())}>All</Dropdown.Item>
                            <Dropdown.Item onClick={ () =>dispatch(getMenCLothing())}>Men Clothes</Dropdown.Item>
                            <Dropdown.Item onClick={ () =>dispatch(getWomenCLothing)}>Women Clothes</Dropdown.Item>
                            <Dropdown.Item onClick={ () =>dispatch(getJewellery())}>Jewelery</Dropdown.Item>
                            <Dropdown.Item onClick={ () =>dispatch(getElectronics())}>Electronic</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="row">
                {itemProducts()}           
            </div>
        </div>
    )

}

export default Shop;