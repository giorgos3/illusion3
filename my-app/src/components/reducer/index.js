import getProductReducer from './getProducts';
import loggedReducer from './isLogged';
import  AddRemoveUpdateProductReducer from './AddProcutBasket';
import getLangReducer from './SetLang';
import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProductCategory : getProductReducer,
        isLogged : loggedReducer,
        addProduct : AddRemoveUpdateProductReducer,
        getLang : getLangReducer
        
});


export default allReducer;
 