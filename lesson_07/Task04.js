'use strict'

{
    const allСashbox = [
        [12, 4500], 
        [7, 3210], 
        [4, 650], 
        [3, 1250], 
        [9, 7830], 
        [1, 990], 
        [6, 13900], 
        [1, 370]
    ];

    const getAveragePriceGoods = (arr) => {
        const allCashes = arr;
        const OneGoodsPrice = [];
        let summ = 0;
        let result;

        for(let i = 0; i < allCashes.length; i++) {
            OneGoodsPrice.push(allCashes[i][1] / allCashes[i][0]);
        }

        for(let k = 0; k < OneGoodsPrice.length; k++) {
            summ += OneGoodsPrice[k];
        }

        return result = summ / OneGoodsPrice.length;
    }

    console.log(getAveragePriceGoods(allСashbox));
}