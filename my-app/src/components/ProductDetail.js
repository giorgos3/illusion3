import React from 'react';




const ProductDetail = ( props ) =>{
    // const  data  = this.props

    
return(
    <div className="container-fluid">
        <div className="row">
            <h2> { props.location.state.title} </h2>
        </div>
        
    </div>
)

}


export default ProductDetail;