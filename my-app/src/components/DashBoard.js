import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'


const DashBoard  =  () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setProducts(json))

      }, []);
        
      console.log(products)

    
    

    return(
        
        <div className="container">
            <Header/>
            <div className="row">
                <div className="col-12">
                    <h3 style={{textAlign: "center"}}>Shop</h3>
                </div>
                <div className="col-12" style={{padding:'20px'}}>
                { 
                products.map((items) => (
                    <>
                    <div  className="card mx-auto" style={{width:'25rem' , textAlign:'center'}}  key={items.id}>
                        <img className="mx-auto" src={items.image} width="40%" height="40%" style={{paddingTop:'10px'}} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{items.title}</h5>
                            <h5 className="card-title">€{items.price}</h5>
                            <p className="card-text">{items.description}</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                            <a href="#" className="btn btn-success">Buy</a>
                        </div>
                    </div>
                    </>
                ))}
                   
                </div>
            </div>
        </div>
    )

}

export default DashBoard;