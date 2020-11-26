import React, { useState, useEffect } from 'react';
import BootstrapCarousel from './Carousel';
import Dropdown from 'react-bootstrap/Dropdown'

import {

    Link
  } from "react-router-dom";


const DashBoard  =  () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        
        const fetchData = async () => { 

            
            const item  = await fetch('https://fakestoreapi.com/products/'+ category)
                .then(res=>res.json())
                .then(json=>setProducts(json))
               
            }
            fetchData();
      }, [category]);

     
      console.log(products)
    
        
      const itemProducts = () =>{
         


                return(
                    products.map((items) => (
                    
                        <div className="col-lg-3 col-md-6 col-sm-12" style={{marginTop:'10px'}} key={items.id}>
                            <div  className="card mx-auto" style={{width:'auto' , textAlign:'center', height:'auto'}}>
                                <img className="mx-auto img-responsive" src={items.image} width="40%" height="40%" style={{paddingTop:'10px'}} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <h5 className="card-title">€{items.price}</h5>
                                    {/* <p className="card-text" style={{fontSize:'8x'}}>{items.description}</p> */}
                                   
                        
                                    <Link type="button"  to={{pathname: `/product/${items.id}`, state: items}}><button className="btn btn-info">View Product</button></Link>
                                   
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
    <Dropdown.Item onClick={ () =>setCategory('')}>All</Dropdown.Item>
    <Dropdown.Item onClick={ () =>setCategory('category/men%20clothing')}>Men Clothes</Dropdown.Item>
    <Dropdown.Item onClick={ () =>setCategory('category/jewelery')}>Jewelery</Dropdown.Item>
    <Dropdown.Item onClick={ () =>setCategory('category/electronics')}>Electronic</Dropdown.Item>
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

export default DashBoard;