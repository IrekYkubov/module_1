'use strict';

{
  const numArr = [5, 4, 5, 2];

  /**
 * Adds one array together.
 * @param {Array} arrayDef Array.
 * @return {Array} The sum of the Array.
 */
  const summArrayElements = function(arrayDef) {
    let x = 0;
    return arrayDef.map(i => x += i, x).reverse()[0];
  };
  const recArr = (arr) => {
    const random = Math.floor(Math.random() * 10);
    const newArr = arr;
    newArr.push(random);
    const sumArr = summArrayElements(newArr);
    console.log(sumArr);
    if (sumArr < 50) {
      return recArr(newArr);
    }
    return newArr;
  };
  console.log(recArr(numArr));
}
