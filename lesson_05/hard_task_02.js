'use strict'

// Вторая задача не обязательная урока 5

{
    const firstInt = prompt('Введите первое число', );
    const secondInt = prompt('Введите второе число', );

    const min = (first, second) => {
        if(first < second) {
            return first;
        } else if(first > second) {
            return second;
        } else if(first = second) {
            return 'Вы ввели одинаковые числа';
        }
    } 

    if (Number.isNaN(firstInt) === true || Number.isNaN(secondInt) === true) {
        console.log('Вы ввели некорректные данные');
    } else {
        console.log(min(firstInt, secondInt));
    }
    
}