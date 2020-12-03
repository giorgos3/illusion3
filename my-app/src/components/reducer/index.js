import getProductReducer from './getProducts';
import loggedReducer from './isLogged';
import  AddRemoveUpdateProductReducer from './AddProcutBasket';
import getLangSwith from './LangSwitch';



import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProductCategory : getProductReducer,
        isLogged : loggedReducer,
        addProduct : AddRemoveUpdateProductReducer,
        getLangSwitch : getLangSwith
       
        
        
});


export default allReducer;
 