
const INITIAL_STATE = {
    basket: []
};

const AddRemoveUpdateProductReducer = (state = INITIAL_STATE, action) => {
     
        switch(action.type){    
            case 'ADD_BASKET':   
                return { ...state, basket:[...state.basket,{
                    id : action.payload.id,
                    image : action.payload.img,
                    title : action.payload.title,
                    price : action.payload.price
                    }]
                };  

                case 'UPDATE_ITEM_BASKET':  
                return {...state, basket:[ action.payload ]};
                 
            default :           
                return state
        
        
        }

    

}

export default  AddRemoveUpdateProductReducer;