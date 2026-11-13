'use strict';

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function'){
         throw new TypeError('pipe: усі аргументи мають бути функціями');
    }
  }
  return fns.reduce((f, g) => (x) => g(f(x)), (x) => x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
const x1 = f1(5);
console.log(x1);

const f2 = pipe(inc, inc);
const x2 = f2(7);
console.log(x2);


try {
  const f3 = pipe(inc, 7, cube); // помилка тут, ще до виклику f2
} catch (err) {
  console.error('Помилка:', err.message);
};
