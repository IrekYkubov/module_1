'use strict'

{
    let input, random = Math.floor(Math.random() * 100);
    
        while (input !== random) {
            if (isNaN(input)) {
                alert("Введите число!");
            }
            if (input > random) {
                alert("Меньше!");
            }
            if (input < random) {
                alert("Больше!");
            }
            if (input === random) {
                alert("Правильно!");
            }
            input = prompt("Введите число от 0 до 100:");
        }

}