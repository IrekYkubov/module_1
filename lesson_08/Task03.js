'use strict'

{

    const generator = (count, n, m, param = '') => {
        const lengthArr = count;
        const genArr = [];
        const options = param;
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
        if(options === 'even') {
            return genArr.filter((item, index, arr) => item % 2 === 0);
        }

        if(options === 'odd') {
            return genArr.filter((item, index, arr) => item % 2 !== 0);
        }

        if(options === '') {
            return genArr;
        }

    }

    console.log(generator(8, 20, 50,'odd'));
}