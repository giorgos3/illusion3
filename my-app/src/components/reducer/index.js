import getProductReducer from './getProducts';
import loggedReducer from './isLogged';
import  AddRemoveUpdateProductReducer from './AddProcutBasket';
import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProductCategory : getProductReducer,
        isLogged : loggedReducer,
        addProduct : AddRemoveUpdateProductReducer,
        
});


export default allReducer;
 