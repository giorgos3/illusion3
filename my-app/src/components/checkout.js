import React,{useState} from 'react';
import BootstrapCarousel from './Carousel';
import '../App.css';
import {
    Link
  } from "react-router-dom";
  import {useDispatch, useSelector} from 'react-redux';


const CheckOut = () =>{

    const item = useSelector((state) => state.addProduct)
    const [quantity, setQuantity] = useState(1);

    function getProduct(){

        var item_Products = item.info

        

        
                if(item_Products === undefined || item_Products === ''){
                    
                    return(
                        <div className="empty-item">
                            <div><i className="fa fa-shopping-basket" style={{color:'black'}}></i></div>
                            <h3>YOuR SHOPPING CART IS EMPTY</h3>
                            <p>We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!</p>
                            <Link type="button"  to='/'><button className="btn btn-primary">Go to SHOP</button></Link>
                        </div>
                    )
                }
                else{

                    var itemProducts = item_Products.split("+");
                    console.log(item.info);
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
                                    <td>{<img width="5%" height="5%" className="img-responsive img-fluid" src={itemProducts[0] } alt="" />}</td>
                                    <td>
                                        <button onClick={ () => setQuantity( quantity + 1)}>+</button>
                                            <input className="quantity" value={quantity}  />
                                        <button onClick={ () => setQuantity( quantity - 1)}>-</button>
                                    </td>
                                    <td>{ itemProducts[1]}</td>
                                    <td>€ { itemProducts[2]} </td>
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