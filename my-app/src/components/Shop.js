import React, { useState, useEffect } from 'react';
import BootstrapCarousel from './Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getAll, getJewellery, getWomenCLothing, getMenCLothing, getElectronics } from './action/productsAPI';
import { ProductCheckOut } from './action/ProductCheckOut';


import {

    Link
} from "react-router-dom";


const Shop = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const getLang = useSelector((state) => state.getLangSwitch);
    const languages = JSON.parse(localStorage.getItem('language'))
    const category = useSelector((state) => state.getProductCategory)

    useEffect(() => {

        const fetchData = async () => {


            await fetch('https://fakestoreapi.com/products/' + category)
                .then(res => res.json())
                .then(json => setProducts(json))

        }
        fetchData();
    }, [category]);


    console.log(category)


    const itemProducts = () => {

        return (

            products.map((items) => (

                <div className="col-lg-3 col-md-6 col-sm-12" style={{ marginTop: '10px' }} key={items.id}>
                    <div className="card mx-auto" style={{ width: 'auto', textAlign: 'center', height: '350px' }}>
                        <img className="mx-auto img-responsive" src={items.image} width="150" height="150" style={{ paddingTop: '10px' }} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-title">{items.title}</p>
                            <h5 className="card-title">€{items.price}</h5>
                            <div className="product-button">
                                <div className="view-product">
                                    <Link type="button" to={{ pathname: `/product/${items.id}`, state: items }}><button className="btn btn-info">{languages[0][getLang].view_product}</button></Link>
                                </div>
                                <div className="add-product">
                                    <button onClick={() => dispatch(ProductCheckOut({ 'id': items.id, 'img': items.image, 'title': items.title, 'price': items.price }))} className="btn btn-success">{languages[0][getLang].add_card}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))

        )
    }




    return (

        <div className="container-fluid">
            <BootstrapCarousel></BootstrapCarousel>
            <div className="row">

                <div className="col-12">
                    <h3 style={{ textAlign: "center" }}>{languages[0][getLang].shop}</h3>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {languages[0][getLang].category}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => dispatch(getAll())}>{languages[0][getLang].all}</Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(getMenCLothing())}>{languages[0][getLang].men_cloth}</Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(getWomenCLothing)}>{languages[0][getLang].women_cloth}</Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(getJewellery())}>{languages[0][getLang].jewellery}</Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(getElectronics())}>{languages[0][getLang].electronic}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="row">
                {itemProducts()}
            </div>
        </div>
    )

}

export default Shop;