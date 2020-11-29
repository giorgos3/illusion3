const AddProductReducer = (state = { items: [] } , action) => {
        

    // state.push(payload)

    
    
    console.log(state.items)
    switch(action.type){
        
        case 'ADD_BASKET':
                let basket = state.items
                let newState = basket.push(action.payload)
            return{ items: [...state.items, newState ]};
                // console.log(action.payload).
            // return state = state.push(action.payload);
                
        default :
            return state
      
    
    }

    

}

export default  AddProductReducer;