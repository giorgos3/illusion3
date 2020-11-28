const AddProductReducer = (state = {} , action) => {
        
    switch(action.type){

        case 'ADD_BASKET':
            return state = {
                
                info: action.payload,
                
                } 
        default :
            return state
      
    
    }

    

}

export default  AddProductReducer;