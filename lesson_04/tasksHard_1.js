'use strict'
// Задание дополнительное первое
{
    const budget = prompt('Введите ваш доход', );

    if (isNaN(budget) === true) {
        console.log('Вы ввели некорректные данные');
    } else {
        if (budget < 15000) {
            const tax = (13 * budget) / 100;
            console.log(tax);
        } 

        if (budget >= 15000 && budget < 50000) {
            const tax = (20 * budget) / 100;
            console.log(tax);
        } 

        if (budget >= 50000) {
            const tax = (30 * budget) / 100;
            console.log(tax);
        } 
    }
}