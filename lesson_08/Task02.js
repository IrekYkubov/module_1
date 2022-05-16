'use strict'

{

    const generator = (count, n, m) => {
        const lengthArr = count;
        const genArr = [];
        let max;
        let min;
        if(n > m) {
            max = n;
            min = m;
        } else {
            max = m;
            min = n;
        }
        
        for(let i = 0; i < lengthArr; i++ ) {
            genArr.push(Math.floor(min + Math.random() * (max + 1 - min)));
        }

        

        return genArr;
    }

    console.log(generator(8, 20, 50));
}