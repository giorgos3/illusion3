const INITIAL_LANGUAGE = {

    lang : []
}
     
 

  
//   'es': {
//     shop: 'Frühling',
//     contact_us: 'Hallo',
//     about_us: 'Wählen Sie Ihre Sprache:'
//   },
  
//   }

  const languagesReducer = (state =INITIAL_LANGUAGE, action) => {

    switch(action.type){ 

        case 'GET_LANG':
            return { ...state, basket:[...state.lang,{
                'en': {
                    shop: 'Shop',
                    contact_us: 'Contact Us',
                    about_us: 'About Us'
                  },
                }]
            };
            case 'GET_LANG_RU':
            return { ...state, basket:[...state.lang,{
                'ru': {
                    shop: 'Весна',
                    contact_us: 'Привет',
                    about_us: 'Выберите ваш язык:'
                  },
                }]
            };
            case 'GET_LANG_PT':
            return { ...state, basket:[...state.lang,{
                'pt': {
                    shop: 'Frühling',
                    contact_us: 'Hallo',
                    about_us: 'Wählen Sie Ihre Sprache:'
                  },
                }]
            }; 
            case 'GET_LANG_ES':
            return { ...state, basket:[...state.lang,{
                'pt': {
                    shop: 'Frühling',
                    contact_us: 'Hallo',
                    about_us: 'Wählen Sie Ihre Sprache:'
                  },
                }]
            }; 
        default :    
            return state;
    }



  }

  export default languagesReducer