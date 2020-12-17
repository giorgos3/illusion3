import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link , useHistory } from "react-router-dom";
import {getLogged} from './action/isLogged';


const CreateUser = () => {


    let history = useHistory();
    const dispatch = useDispatch();

    const submit = () =>{

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
    
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email : email , password: password})
        };
    
        fetch('http://localhost:3000/register', requestOptions)
                .then(response => response.json())
            .then(response => {
                console.log(response.message);
                if(response.message === 'success'){
                    dispatch(getLogged())
                    history.push('/')
                }
                else{
                    alert('Provide valid data')
                }
                
            }) 
            .catch(error => {
               
                console.error('There was an error!', error);
            });
            
    
    }



    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create User</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="exampleInputEmail">Email</label>
                            <input type="text"   className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="First Name" required/>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="password">password</label>
                            <input type="text"  className="form-control" name="password" id="password" aria-describedby="emailHelp" placeholder="Password" required/>
                        </div>
                    </div>
          
                    <button type="button" onClick= {() => submit()} className="btn btn-danger">Create</button>
                    
                </form>
                </div>
            </div>
        </div>
    )
}




export default CreateUser;