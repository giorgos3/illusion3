

const INITIAL_LANGUAGE = {
     
 
    'en': {
      shop: 'Shop',
      contact_us: 'Contact Us',
      about_us: 'About Us'
    },
    'ru': {
        shop: 'Весна',
        contact_us: 'Привет',
        about_us: 'Выберите ваш язык:'
      },
    'es': {
      shop: 'Frühling',
      contact_us: 'Hallo',
      about_us: 'Wählen Sie Ihre Sprache:'
    },
    'pt': {
        shop: 'Frühling',
        contact_us: 'Hallo',
        about_us: 'Wählen Sie Ihre Sprache:'
      },
    }
   
  



const getLangReducer = (state =INITIAL_LANGUAGE, action) => {
        console.log(state)
    switch(action.type){
        case 'SET_LANG':
            return state;
        default : 
            return state;
                                  
    }

}

export default getLangReducer