import _ from 'lodash';
import {remove} from 'lodash';

const INITIAL_STATE = {
    basket: []
};

const AddRemoveProductReducer = (state = INITIAL_STATE, action) => {
        
    console.log(action.payload)   
    
        switch(action.type){    
            case 'ADD_BASKET':   
                return { ...state, basket:[...state.basket,{
                    id : action.payload.id,
                    image : action.payload.img,
                    title : action.payload.title,
                    price : action.payload.price
                    }]
                };
                case 'REMOVE_ITEM_BASKET':  
                return state;
                 
            default :           
                return state
        
        
        }

    

}

export default  AddRemoveProductReducer;