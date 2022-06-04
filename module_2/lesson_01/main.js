'use strict';

{
  const items = document.querySelector('.items');
  const firstBook = document.querySelector('.item_one');
  const secondBook = document.querySelector('.item_two');
  const threeBook = document.querySelector('.item_three');
  const fourBook = document.querySelector('.item_four');
  const fiveBook = document.querySelector('.item_five');
  const sixBook = document.querySelector('.item_six');
  items.append(firstBook, secondBook, threeBook, fourBook, fiveBook, sixBook);
  // Находим пропажу элемента четвортой книги
  const fourLus = secondBook.querySelector('.props__list .props__item_four');
  // Дабавляем элемент в четвертую книгу
  fourBook.querySelectorAll('.props__list .props__item_four')[2].after(fourLus);
  // Находим пропажу элементов пятой книги и третьей, второй
  const fiveLus = threeBook.querySelectorAll('.props__item_five');
  const treeLus = fiveBook.querySelectorAll('.props__item_three');
  const twoLus = sixBook.querySelectorAll('.props__item_two');
  // спомощью циклов дабавляем пропаажи по местам
  for (let index = 0; index < fiveLus.length; index++) {
    fiveBook.querySelector('.props__list').append(fiveLus[index]);
  }
  for (let index = 0; index < treeLus.length; index++) {
    threeBook.querySelector('.props__list').append(treeLus[index]);
  }
  for (let index = 0; index < twoLus.length; index++) {
    secondBook.querySelector('.props__list').append(twoLus[index]);
  }
}
