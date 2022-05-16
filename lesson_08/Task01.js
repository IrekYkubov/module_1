'use strict'

{

    const generator = (count) => {
        const lengthArr = count;
        const newArr = [];

        for(let i = 0; i < lengthArr; i++ ) {
            newArr.push(Math.ceil(Math.random()*100));
        }

        return newArr;
    }

    console.log(generator(8));
}