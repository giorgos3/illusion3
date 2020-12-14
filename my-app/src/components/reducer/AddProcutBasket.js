


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
                    initial_price: action.payload.price,
                    new_price: '',
                }]
            };

        case 'UPDATE_ITEM_BASKET':
            return { basket: action.payload }


        case 'UPDATE_PRICE':



            return {
                basket: [...state.basket.map(obj => {
                    if (obj.id === action.payload[0].id) {
                        obj.new_price = (obj.initial_price * action.payload[1]);
                        
                    }

                    return obj;
                })]
            };






        default:
            return state










    }



}

export default AddRemoveUpdateProductReducer;