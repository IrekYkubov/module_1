'use strict';
(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 5,
      computer: 5,
    };
    return function start() {
      const computer = getRandomIntInclusive(0, result.computer);
      const human = parseInt(prompt('Загадай число'));
      if (Number.isInteger(human) === true && human <= result.player) {
        const checkHuman = human % 2;
        const checkComputer = computer % 2;
        let parity;
        if (checkHuman === 0) {
          parity = 'Четное';
        } else {
          parity = 'Нечетное';
        }
        if (checkHuman === checkComputer) {
          alert(`Компьютер: отгадал,
          число ${parity}`);
          result.computer += human;
          result.player -= human;
        } else {
          alert(`Компьютер: неотгадал,
          число ${parity}`);
          result.computer -= human;
          result.player += human;
        }
        if (result.player === 0) {
          return alert(`Компьютер победил!`);
        }
        if (result.computer === 0) {
          return alert(`Вы победили!`);
        }
      } else {
        alert(`Введите число не больше ${result.player}`);
      }
      return start();
    };
  };
  window.marbl = game;
})();
