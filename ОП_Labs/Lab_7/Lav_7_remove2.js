'use strict';

const arrayNum = [1, 2, 3, 4, 5, 6, 7];

function removeElement (array, ...items) {
    const a = [...items];
    let i = 0;
    while (i < a.length) {
        const index = array.indexOf(a[i]);
        if (index !== -1) array.splice(index, 1);
        ++i;
    }
}

removeElement(arrayNum, 5, 2, 3);
console.log(arrayNum);

const arrayCity = ['Kiyv', 'Beijing', 'Lima', 'Saratov'];
removeElement(arrayCity, 'Lima', 'Berlin', 'Kiyv');
console.log(arrayCity);