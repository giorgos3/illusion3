import React,{useState} from 'react';
import BootstrapCarousel from './Carousel';
import '../App.css';
import {
    Link
  } from "react-router-dom";
  import {useDispatch, useSelector} from 'react-redux';
  import {UpdateProductCheckOut} from './action/ProductCheckOut'
  import {isEmpty} from "lodash";
  

  


const CheckOut = () =>{


    const dispatch = useDispatch();
    const item = useSelector((state) => state.addProduct)
    const [quantity, setQuantity] = useState(1);
    let [itemBasket, setItemBasket] = useState([...item.basket ])

    const getLang = useSelector((state) => state.getLangSwitch);
    const languages = JSON.parse(localStorage.getItem('language'))  
    

    
          
    const getProduct = () => {

        
        function RemoveItem(id){
            
            console.log(id)
           
            let newItemBasket = [ ...itemBasket.filter(item => item.id !== id)]
           
   
            console.log(newItemBasket)
               setItemBasket(newItemBasket)
               dispatch(UpdateProductCheckOut(newItemBasket))
               
           
             }
            //  console.log('/---------------/')
            //     console.log(isEmpty(itemBasket))
            //     console.log('/---------------/')
            //     console.log(itemBasket.length)
           
                

                if( isEmpty(itemBasket[0]) === true){
                    
                    newItemBasket = itemBasket.splice(1,1)
                    console.log(itemBasket)
                    
                    return(
                        <div className="empty-item">
                            <div><i className="fa fa-shopping-basket" style={{color:'black'}}></i></div>
                            <h3>YOUR SHOPPING CART IS EMPTY</h3>
                            <p>We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!</p>
                            <Link type="button"  to='/'><button className="btn btn-primary">Go to SHOP</button></Link>
                        </div>
                    )
                }
                else{

                        return(
                            <div className="container">

                                {itemBasket.map(item => (
 
                                    <div className="product-item" key={item.key}>
                                    <table>            
                                    <thead>
                                        <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{<img width="5%" height="5%" className="img-responsive img-fluid" src={ item.image } alt="" />}</td>
                                        <td>
                                            <button onClick={ () => setQuantity( quantity + 1)}>+</button>
                                                <input className="quantity" value={quantity}  />
                                            <button onClick={ () => setQuantity( quantity - 1)}>-</button>
                                        </td>
                                        <td>{ item.title}</td>
                                        <td>€ { item.price} </td>
                                        <td> <button onClick={ () => RemoveItem(item.id) } className="btn btn-danger">REMOVE</button> </td>
                                    </tr>
                                </tbody>
                                    </table>
                                                 
                                </div> ))}
                                    <div className="row">
                                        <div className="col-12 center">
                                            <div className="button-proceed">
                                                <button className="btn btn-success">Proceed to Checkout</button>
                                            </div>
                                        </div>
                                    </div>
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