
const { bindActionCreators } = require("redux");
const getProductReduce = (state ='', action) => {


    
    
    



        switch(action.type){
            case 'ALL':
                return state=''
            case 'MEN_CLOTHING':
                return state='category/men%20clothing'
            case 'JEWELLERY':
                return state='category/jewelery'
            case 'WOMEN_CLOTING':
                return state='category/women%20clothing'
            case 'ELECTRONICS':
                 return state='category/electronics' 
            default :
                return state;
                                      

        }
        
}

export default getProductReduce;