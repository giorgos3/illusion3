const getProductReducer = (state = {} , action) => {
        console.log(action.payload)
    switch(action.type){

        case 'ADD_BASKET':
            return state = {
                
                info: action.payload,
                
                } 
        default :
            return state
      
    
    }

    

}

export default  getProductReducer;