const getLangReducer = (state ='', action) => {


    switch(action.type){
        case 'EN':
            return state=''

        case 'RU':
            return state='ru'

        case 'DE':
            return state='de'

        case 'ES':
            return state='es' 
            
        case 'PT':
             return state='pt' 
        default :
            return state;
                                  

    }

}

export default getLangReducer