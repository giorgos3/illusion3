import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getLogged } from './action/isLogged';






const LoginUser = () => {


    let history = useHistory();
    const dispatch = useDispatch();


    const submit = () => {

        const email = document.getElementById('firstname').value
        const password = document.getElementById('password').value


        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmU5YzQxM2M2ZWEyZDMyOWM2OTU2YmUiLCJpYXQiOjE2MDkxNTU2MDN9.Zht_m7Mq8VC3LdYKrr5jqx3N496t5_2HvsHFOq-f4_c'
            },
            body: JSON.stringify({ email: email, password: password })
        };

        fetch('http://localhost:3000/users/login', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.message === 'success') {
                    dispatch(getLogged())
                    history.push('/')
                }
                else {
                    alert('Provide valid data')
                }

            })
            .catch(error => {

                console.error('There was an error!', error);
            });


    }



    return (
        <div className="container-fluid">

            <div className="row loginForm">
                <div className="col-12 mrgnbtm">
                    <h2>Login</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-12" >
                                <label htmlFor="exampleInputEmail1">First Name</label>
                                <input type="text" className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="Name" />
                            </div>

                        </div>
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="exampleInputEmail1">password</label>
                                <input type="text" className="form-control" name="password" id="password" aria-describedby="emailHelp" placeholder="Password" />
                            </div>
                        </div>
                        <button type="button" onClick={() => submit()} className="btn btn-danger">Submit</button>
                        <p style={p_t_20}>Dont have an account? <Link to="/register">Register</Link></p>

                    </form>
                </div>


            </div>


        </div>
    )

}

const p_t_20 = {

    padding: "10px",

};



export default LoginUser 