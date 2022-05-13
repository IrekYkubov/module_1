'use strict'
{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    const getAverageValue = (allMoney) => {
        const cash = allMoney;
        let summ = 0;
        let result;
        for (let i = 0; i < cash.length; i++) {
           summ += cash[i];
        }
        result = summ / cash.length;
        return Math.floor(result);
    }

    console.log(getAverageValue(allСashbox));

}