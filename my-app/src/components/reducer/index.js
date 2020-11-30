import getProductReducer from './getProducts';
import loggedReducer from './isLogged';
import  AddRemoveProductReducer from './AddProcutBasket';
import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProductCategory : getProductReducer,
        isLogged : loggedReducer,
        addProduct : AddRemoveProductReducer
});


export default allReducer;
 