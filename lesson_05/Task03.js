'use strict'

// Третья задача урока 5

{
    const words = 'Привет мир';

    const getNewRevWord = phrase => phrase.split("").reverse().join("");

    console.log(getNewRevWord(words));
}