'use strict'

{
    const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    const addPrefix = (array, prefix) => {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[i] = `${prefix} ${array[i]}`;
        }
        return newArray;
    }   

    console.log(addPrefix(names, 'Mr'));
}