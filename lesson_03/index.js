'use strict'
{
    const smartPhoneName = 'Sony';
    const quantityGoods = 3;
    const categoryGoods = 'Phone';
    const priceGoods = 1200;

    console.log('Наименование товара:', smartPhoneName);
    console.log('Общая сумма товаров:', priceGoods * quantityGoods, '$');
}

{
    const smartPhoneName = 'Iphone 11';
    const quantityGoods = 4;
    const categoryGoods = 'Phone';
    const priceGoods = 1800;

    console.log('Наименование товара:', smartPhoneName);
    console.log('Общая сумма товаров:', priceGoods * quantityGoods, '$');
}

{
    const goodsName = prompt('Наименование товара', );
    const quantityGoods = prompt('Количество товара', );
    const categoryGoods = prompt('Категория товара', );
    const priceGoods = prompt('Цена товара', );

    // Проверяем типы данных
    console.log('Наименование товара:', typeof(goodsName));
    console.log('Количество товара:', typeof(quantityGoods));
    console.log('Категория товара:', typeof(categoryGoods));
    console.log('Цена товара:', typeof(priceGoods));
   
    console.log(`На складе ${quantityGoods} единицы товара "${goodsName}" на сумму ${Number(priceGoods) * Number(quantityGoods)} деревянных`);

}