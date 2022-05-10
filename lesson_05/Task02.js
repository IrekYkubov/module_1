'use strict'

// Вторая задача урока 5

{
    const phrase = 'привеТ Мир';

    const getNewPhrase = (words) => {
        let copyPhrase = words;

        return copyPhrase.charAt(0).toUpperCase() + copyPhrase.slice(1).toLowerCase(); 
    }

    console.log(getNewPhrase(phrase));
}