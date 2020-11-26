import React from 'react';
import {
 
    Link
  } from "react-router-dom";




const ProductDetail = ( props ) =>{ 
    

    
return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="product-container" style={{textAlign:'center', padding:'20px'}}>
                <img src={ props.location.state.image} />
                <h3> { props.location.state.title} </h3>
                <p> { props.location.state.description} </p>
                <h2> € { props.location.state.price} </h2>
                <Link type="button"  to={{pathname: '/checkout', state: props.location.state}}><button className="btn btn-primary">Add Card</button></Link>
                </div> 
            </div>
        </div>

    </div>
)

}


export default ProductDetail;