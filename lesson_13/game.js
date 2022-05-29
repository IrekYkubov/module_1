'use strict';
(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;
    return function start() {
      const stepComputer = getRandomIntInclusive(0, FIGURES_RUS.length);
      const сhoiceMan = prompt(lang.toString());
      const choiceComp = lang[stepComputer];
      const rock = lang[0][0];
      const scissors = lang[1][0];
      const paper = lang[2][0];
      if (сhoiceMan === null) {
        const exitGame = prompt('точно ли хотите выйти?');
        if (exitGame !== null) {
          if (language === 'EN' || language === 'ENG') {
            return alert(`Game result:
            Computer: ${result.computer};
            Player: ${result.player}`);
          } else {
            return alert(`Результат игр:
            Компьютер: ${result.computer};
            Игрок: ${result.player}`);
          }
        } else {
          return start();
        }
      }

      if (сhoiceMan === '') {
        alert('введите свой ход');
      }

      if (сhoiceMan[0] === choiceComp[0]) {
        alert('Ничья');
      } else {
        if (сhoiceMan[0] === rock && choiceComp[0] === scissors ||
          сhoiceMan[0] === scissors && choiceComp[0] === paper ||
          сhoiceMan[0] === paper && choiceComp[0] === rock) {
          alert(`Компьютер: ${choiceComp}
            Вы: ${lang[0]}
            Вы выиграли!`);
          result.player += 1;
        } else {
          alert(`Компьютер: ${choiceComp}
            Вы: ${lang[0]}
            Вы проиграли!`);
          result.computer += 1;
        }
      }
      return start();
    };
  };
  window.RPS = game;
})();
