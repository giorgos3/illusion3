import _ from 'lodash';

const getTranslation = (language) => {
    return _.get(translations, language);
}

const getLanguages = () => {
    return _.keys(translations);
}


  const translations = {
    'en': {
      'shop': 'Shop',
      'contact_us': 'Contact Us',
      'about_us': 'About Us'
    },
    'ru': {
        'shop': 'Весна',
        'contact_us': 'Привет',
        'about_us': 'Выберите ваш язык:'
      },
    'es': {
      'shop': 'Frühling',
      'contact_us': 'Hallo',
      'about_us': 'Wählen Sie Ihre Sprache:'
    },
    'pt': {
        'shop': 'Frühling',
        'contact_us': 'Hallo',
        'about_us': 'Wählen Sie Ihre Sprache:'
      },
   
  }

  export {
    getTranslation,
    getLanguages
}

  