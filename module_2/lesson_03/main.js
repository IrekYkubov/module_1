'use strict';

{
  const startProgram = () => {
    let comand;
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    do {
      comand = prompt('Введите текст или команду', '');

      if (comand.trim() !== '' && comand.trim() !== null && comand !== 'del' &&
      comand !== 'clear' && comand !== 'exit') {
        const li = document.createElement('li');
        li.textContent = comand;
        ul.insertAdjacentElement('beforeend', li);
      }
      if (comand === 'del') {
        const liAll = document.querySelector('li:nth-laest-child(1)');
        liAll.remove();
      }
      if (comand === 'clear') {
        ul.innerHTML = '';
      }
    } while (comand !== '' && comand !== null && comand !== 'exit');
  };

  startProgram();
}
