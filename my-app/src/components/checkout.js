import React,{useState} from 'react';
import BootstrapCarousel from './Carousel';
import '../App.css';
import {
    Link
  } from "react-router-dom";


const CheckOut = (props) =>{

    const [quantity, setQuantity] = useState(1);

    function getProduct(){

        
                if(props.location.state === undefined){
                    
                    return(
                        <div className="empty-item">
                            <div><i className="fa fa-shopping-basket" style={{color:'black'}}></i></div>
                            <h3>YOuR SHOPPING CART IS EMPTY</h3>
                            <p>We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!</p>
                            <Link type="button"  to='/dashboard'><button className="btn btn-primary">Go to SHOP</button></Link>
                        </div>
                    )
                }
                else{
                        return(

                            <div className="product-item">
                                 <table>            
                                 <thead>
                                     <tr>
                                      <th>Product</th>
                                      <th>Quantity</th>
                                       <th>Title</th>
                                     <th>Price</th>
                                 </tr>
                               </thead>
                               <tbody>
                                  <tr>
                                    <td>{<img width="5%" height="5%" className="img-responsive img-fluid" src={ props.location.state.image} alt="" />}</td>
                                    <td>
                                        <button onClick={ () => setQuantity( quantity + 1)}>+</button>
                                            <input className="quantity" value={quantity}  />
                                        <button onClick={ () => setQuantity( quantity - 1)}>-</button>
                                    </td>
                                    <td>{ props.location.state.title}</td>
                                    <td>€ { props.location.state.price} </td>
                                   </tr>
                               </tbody>
                                 </table>
                                             
                                    <form>
                                        <label>
                                            First Name:
                                        </label> <br/> 
                                            <input type="text" name="name" placeholder="First Name" /> <br/>
                                        
                                        <label>
                                            Last Name:
                                        </label> <br/>   
                                            <input type="text" name="name" placeholder="Last Name" /> <br/>
                                        
                                        <label>
                                        Address:
                                        </label> <br/>    
                                            <input type="text" name="name" placeholder="Address" />  <br/> <br/> 
                                        
                                        <input type="submit" value="Proceed Checkout" />
                                    </form>  
                            </div>                  
                
            
                        )
        }
    }

    console.log(props)
    
    return(

        <div className="container-fluid">
            <BootstrapCarousel></BootstrapCarousel>
            <div className="row"> 
                <div className="col-12" style={{textAlign:'center' , padding:'20px'}}>
                     {getProduct()}
                </div>
            </div> 
        </div>
        
     
    )


}


export default CheckOut;