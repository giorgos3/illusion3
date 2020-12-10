import React from 'react';
import {
 
    Link
  } from "react-router-dom";
  import {useDispatch} from 'react-redux';
  import {ProductCheckOut } from './action/ProductCheckOut';




const ProductDetail = ( props ) =>{ 
    
    const dispatch = useDispatch();
    

    const id = props.location.state.id;
    const img = props.location.state.image;
    const title = props.location.state.title;
    const price = props.location.state.price;
    

    const productDetail = { 'id': id ,'img' : img ,'title': title, 'price': price}
    
return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="product-container" style={{textAlign:'center', padding:'20px'}}>
                <img src={ props.location.state.image} width="250" height="250" />
                <h3> { props.location.state.title} </h3>
                <p> { props.location.state.description} </p>
                <h2> € { props.location.state.price} </h2>
                <Link type="button"  to='/'><button onClick={() => dispatch(ProductCheckOut(productDetail)) } className="btn btn-primary">Add Card</button></Link>
                
                
                </div> 
            </div>
        </div>

    </div>
)

}


export default ProductDetail;