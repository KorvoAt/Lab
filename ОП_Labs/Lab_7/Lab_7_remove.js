'use strict';

const arrayNum = [1, 2, 3, 4, 5, 6, 7];

function removeElement (array, item) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
}

removeElement(arrayNum, 5);
console.log(arrayNum);

const arrayCity = ['Kiyv', 'Beijing', 'Lima', 'Saratov'];
removeElement(arrayCity, 'Lima');
removeElement(arrayCity, 'Berlin');
console.log(arrayCity);