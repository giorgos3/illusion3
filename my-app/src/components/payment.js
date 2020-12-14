import React, { useState } from 'react';

import '../App.css';
import {
    Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const payment = () => {


    const item = useSelector((state) => state.addProduct)
    const getLang = useSelector((state) => state.getLangSwitch);
    const languages = JSON.parse(localStorage.getItem('language'))

    return (

        <div className="contaier">
            <div className="row">
                <div className="col-12" style={{ textAlign: "center" }}>
                    <h3>Payment GateWay</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-6" style={{ textAlign: "center" }}>
                    <form className="payment-form">
                        <label>
                            Name:
                        <input type="text" name="name" />
                        </label>
                        <label>
                            Name:
                        <input type="text" name="name" />
                        </label>
                        <label>
                            Name:
                        <input type="text" name="name" />
                        </label>
                        <label>
                            Name:
                        <input type="text" name="name" />
                        </label>
                        <label>
                            Name:
                        <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="col-6" style={{ textAlign: "center" }}>
                    {item.basket.map(item => (

                        <div className="product-item" key={item.id}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>{languages[0][getLang].product}</th>
                                        
                                        <th>{languages[0][getLang].title}</th>
                                        <th>{languages[0][getLang].price}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{<img width="100" height="100" className="img-responsive img-fluid" src={item.image} alt="" />}</td>
                                       
                                        <td>{item.title}</td>
                                        <td>€ {

                                            item.new_price == '' ? item.initial_price.toFixed(2) : item.new_price.toFixed(2)

                                        }
                                        </td>
                                        
                                    </tr>
                                </tbody>
                            </table>


                        </div>))}
                </div>
            </div>
        </div>
    )


}

export default payment