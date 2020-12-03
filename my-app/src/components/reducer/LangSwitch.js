const getLangSwith = (state = [JSON.parse(localStorage.getItem('language'))], action) =>  {
                console.log(state.es)
    switch(action.type){
        case 'EN':
            return  [...state ,state.en]

        case 'RU':
            return  [...state, state.ru]

        case 'PT':
            return  [...state, state.pt]

        case 'ES':
            return  [...state, state.es]
        default :
            return state;
                                  

    }


}

export default getLangSwith;