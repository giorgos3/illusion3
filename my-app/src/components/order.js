import React, { useState, useEffect } from 'react';
import '../App.css';



const Order = () => {

    const [Order, setOrder] = useState({})

    useEffect(() => {

        const fetchData = async () => {


            await fetch('http://localhost:3000//users/orders-history')
                .then(res => res.json())
                .then(json => setOrder(json))
                    console.log(setOrder)
        }
        fetchData();
    }, []);


    return (


        <div className="contaier">
            <div className="row">
                <div className="col-12" style={{ textAlign: "center", padding: '20px' }}></div>
            </div>
        </div>


    )


}

export default Order


