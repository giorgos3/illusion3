import getProductReducer from './getProducts';
import loggedReducer from './isLogged';
import  AddRemoveUpdateProductReducer from './AddProcutBasket';
import getLangSwitch from './LangSwitch';



import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProductCategory : getProductReducer,
        isLogged : loggedReducer,
        addProduct : AddRemoveUpdateProductReducer,
        getLangSwitch : getLangSwitch
       
        
        
});


export default allReducer;
 