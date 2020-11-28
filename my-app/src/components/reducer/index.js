import getProductReducer from './getProducts';
import loggedReducer from './isLogged';
import  AddProductReducer from './AddProcutBasket';
import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProductCategory : getProductReducer,
        isLogged : loggedReducer,
        addProduct : AddProductReducer
});


export default allReducer;
 