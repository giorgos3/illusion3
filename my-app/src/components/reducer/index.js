import getProductReduce from './getProducts';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';


const allReducer = combineReducers({
        getProduct : getProductReduce,
        isLogged : loggedReducer
});


export default allReducer;
 