

const LANG_EN ='en'
const LANG_RU ='ru'
const LANG_PT ='pt'
const LANG_ES ='es'

const getLangSwitch = (state =LANG_EN, action) =>  {
                
    switch(action.type){
        case 'EN':
            return  state =LANG_EN;

        case 'RU':
            return  state =LANG_RU;

        case 'PT':
            return  state =LANG_PT;

        case 'ES':
            return  state =LANG_ES;
        default : return state;
            
                                  

    }


}

export default getLangSwitch;