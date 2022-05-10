'use strict'

// Первая задача не обязательная урока 5

{
    const smallestDivisor = (firstParam, secondParam) => {
        if(secondParam > firstParam) {
            return smallestDivisor(secondParam, firstParam);
        }

        if(!secondParam) {
            return firstParam;
        }

        return smallestDivisor(secondParam, firstParam % secondParam);
    }

    console.log(smallestDivisor(78, 354));
}