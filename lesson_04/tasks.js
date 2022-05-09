'use strict'
// Вторая задача
{
    const rain = Math.round(Math.random());

    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else {
        console.log('Дождя нет!');
    }
}

// Третья задача
{
    const mathematics = prompt('Введите кол-во баллов по математике', );
    const russian = prompt('Введите кол-во баллов по русскому языку', );
    const informatics = prompt('Введите кол-во баллов по информатике', );

    if (isNaN(mathematics) === true || isNaN(russian) === true || isNaN(informatics) === true) {
        console.log('Вы ввели некорректные данные');
    } else {
        const result = Number(mathematics) + Number(russian) + Number(informatics);
        if (result >= 265) {
            console.log('Поздравляю, вы поступили на бюджет!');
        } else {
            console.log('Вы не набрали необходимый порог баллов');
        }
    }
}

// Четвёртая задача
{
    const money = prompt('Cколько денег Вы хотите снять?', );

    if (isNaN(money) === true) {
        console.log('Вы ввели некорректные данные');
    } else {
        if (money % 100 === 0) {
            console.log('Вы можете снять данную сумму');
        } else {
            console.log('Выбирите другую сумму');
        }
    }
}