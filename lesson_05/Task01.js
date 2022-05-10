'use strict'

// Первая задача урока 5

{
    const priceGood = 50;

    const getPriceRubls = (money) => {
        let euroMoney = money;

        euroMoney *= 1.2; // Переводим евро в доллары
        euroMoney *= 73; // Переводим доллары в евро

        return euroMoney; // возвращаем результат
    }

    console.log('Сумма в рублях', getPriceRubls(priceGood));
}