import getProductReduce from './getProducts';
import loggedReducer from './isLogged';
import  getProductReducer from './AddProcutBasket';
import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProduct : getProductReduce,
        isLogged : loggedReducer,
        addProduct : getProductReducer
});


export default allReducer;
 