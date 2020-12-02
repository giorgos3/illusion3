import getProductReducer from './getProducts';
import loggedReducer from './isLogged';
import  AddRemoveUpdateProductReducer from './AddProcutBasket';
import languagesReducer from './LangReducer'


import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProductCategory : getProductReducer,
        isLogged : loggedReducer,
        addProduct : AddRemoveUpdateProductReducer,
        Language : languagesReducer
        
        
});


export default allReducer;
 