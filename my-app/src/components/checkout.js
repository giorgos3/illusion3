import React, { useState } from 'react';
import BootstrapCarousel from './Carousel';
import '../App.css';
import {
    Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProductCheckOut } from './action/ProductCheckOut'
import { isEmpty } from "lodash";


export function Quantity() {


    let [quantity, setQuantity] = useState(1)


    function plusOne() {
        setQuantity(quantity + 1)
    }

    function minusOne() {
        if (quantity < 1)
            return setQuantity(quantity + 1)
        setQuantity(quantity - 1)

    }



    return (
        <>
            <button  onClick={minusOne}>-</button>
            <input className="quantity" defaultValue={quantity < 1 ? 1 : quantity} />
            <button  onClick={plusOne}>+</button>

        </>
    )
}




const CheckOut = () => {


    const dispatch = useDispatch();
    const item = useSelector((state) => state.addProduct)
    let [itemBasket, setItemBasket] = useState([...item.basket])
    const getLang = useSelector((state) => state.getLangSwitch);
    const languages = JSON.parse(localStorage.getItem('language'))







    const getProduct = () => {


        function RemoveItem(id) {



            let newItemBasket = [...itemBasket.filter(item => item.id !== id)]



            setItemBasket(newItemBasket)
            dispatch(UpdateProductCheckOut(newItemBasket))


        }





        if (isEmpty(itemBasket[0]) === true) {



            return (
                <div className="empty-item">
                    <div><i className="fa fa-shopping-basket" style={{ color: 'black' }}></i></div>
                    <h3>{languages[0][getLang].checkout_empty}</h3>
                    <p>{languages[0][getLang].shop_find}</p>
                    <Link type="button" to='/'><button className="btn btn-primary">{languages[0][getLang].go_shop}</button></Link>
                </div>
            )
        }
        else {

            var result = itemBasket.reduce(function (tot, item) {
                // return the sum with previous value

                return tot + (item.price);

                // set initial value as 0
            }, 0);


            return (
                <div className="container">

                    {itemBasket.map(item => (

                        <div className="product-item" key={item.id}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>{languages[0][getLang].product}</th>
                                        <th>{languages[0][getLang].quantity}</th>
                                        <th>{languages[0][getLang].title}</th>
                                        <th>{languages[0][getLang].price}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{<img width="100" height="100" className="img-responsive img-fluid" src={item.image} alt="" />}</td>
                                        <td>

                                            <Quantity />

                                        </td>
                                        <td>{item.title}</td>
                                        <td>€ {item.price} </td>
                                        <td> <button onClick={() => RemoveItem(item.id)} className="btn btn-danger">{languages[0][getLang].remove}</button> </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>))}

                    <div className="row">
                        <div className="col-12 center">
                            <div className="total-price">
                                <h3>{languages[0][getLang].tot_amount} : €{result} </h3>
                            </div>
                            <div className="button-proceed">
                                <button className="btn btn-success">{languages[0][getLang].proceed}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )




        }
    }



    return (

        <div className="container-fluid">
            <BootstrapCarousel></BootstrapCarousel>
            <div className="row">
                <div className="col-12" style={{ textAlign: 'center', padding: '20px' }}>
                    {getProduct()}
                </div>
            </div>
        </div>


    )


}


export default CheckOut;