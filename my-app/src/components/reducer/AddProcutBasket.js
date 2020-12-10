


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
                const oldPrice = state.basket.find(object => object.id == action.payload[0].id ).price  
                 const newPrice = oldPrice * action.payload[1]
                return { state , basket:[state.basket.find(object => object.id == action.payload[0].id ).price = newPrice]}
            

            
            

    
        default:
            return state










    }



}

export default AddRemoveUpdateProductReducer;