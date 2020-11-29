const AddProductReducer = (state = { items: [] } , action) => {
        

    // state.push(payload)

    let basket = state.items
    let newState = basket.push(action.payload)
    
    console.log(state.items)
    switch(action.type){
        
        case 'ADD_BASKET':
            return{ items: [...state.items, newState ]};
                // console.log(action.payload).
            // return state = state.push(action.payload);
                
        default :
            return state
      
    
    }

    

}

export default  AddProductReducer;