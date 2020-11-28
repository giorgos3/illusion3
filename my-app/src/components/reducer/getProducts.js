
const getProductReducer = (state ='', action) => {


    

        switch(action.type){
            case 'ALL':
                return state=''

            case 'MEN_CLOTHING':
                return state='category/men%20clothing'

            case 'JEWELERY':
                return state='category/jewelery'

            case 'WOMEN_CLOTHING':
                return state='category/women%20clothing' 
                
            case 'ELECTRONICS':
                 return state='category/electronics' 
            default :
                return state;
                                      

        }
        
}

export default getProductReducer;