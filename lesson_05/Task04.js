'use strict'

// Четвертая задача урока 5

{
    const sumPrice = 40000;
    const amountGoods = 12;
    const promoCode = 'G3H2Z1';

    const calculate = (price, amount, code) => {

        let basketValue = price;
        let numberGoods = amount;
        let promo = code;
        let sale;

        if(numberGoods > 10) {
            sale = basketValue * 0.03;
            basketValue -= sale
        }

        if(basketValue > 30000) {
            sale = (basketValue - 30000) * 0.15;
            basketValue -= sale;
        }

        if(promo === 'METHED') {
            sale = basketValue * 0.10;
            basketValue -= sale;
        }

        if(promo === 'G3H2Z1') {
            sale = 500;
            if(basketValue > 2000) {
                basketValue -= sale;
            }
        }

        return basketValue;
    }

    console.log(calculate(sumPrice, amountGoods, promoCode));
}