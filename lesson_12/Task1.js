'use strict';

{
  let input; const random = Math.floor(Math.random() * 100);

  const gaming = () => {
    input = prompt('Введите число от 0 до 100:');
    if (isNaN(input)) {
      alert('Введите число!');
    } else if (input > random) {
      alert('Меньше!');
    } else if (input < random) {
      alert('Больше!');
    } else if (input === random) {
      return alert('Правильно!');
    }
    return gaming();
  };

  gaming();
}
