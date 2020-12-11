


const INITIAL_STATE = {
    basket: []
};

const AddRemoveUpdateProductReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_BASKET':
            return {
                ...state, basket: [...state.basket, {
                    id: action.payload.id,
                    image: action.payload.img,
                    title: action.payload.title,
                    price: action.payload.price
                }]
            }; 

        case 'UPDATE_ITEM_BASKET':
            return { basket: action.payload }


        case 'UPDATE_PRICE':
                console.log(action.payload[1]) 
                let oldPrice = state.basket.find(object => object.id == action.payload[0].id ).price  
               

                return  {basket:[...state.basket.map(obj => {
                    if (obj.id === action.payload[0].id) {
                        obj.price = oldPrice *action.payload[1];
                    }
                   
                    return obj;
                  })]};
            

            
            

    
        default:
            return state










    }



}

export default AddRemoveUpdateProductReducer;