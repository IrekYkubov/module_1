'use strict'

// Первая задача
{
    const goodsName = prompt('Наименование товара', );
    const quantityGoods = prompt('Количество товара', );
    const categoryGoods = prompt('Категория товара', );
    const priceGoods = prompt('Цена товара', );

    if (isNaN(priceGoods) === true || isNaN(quantityGoods) === true) {
        console.log('Вы ввели некорректные данные');
    } else {
        console.log(`На складе ${quantityGoods} единицы товара "${goodsName}" на сумму ${Number(priceGoods) * Number(quantityGoods)} деревянных`);
    }
   

}
