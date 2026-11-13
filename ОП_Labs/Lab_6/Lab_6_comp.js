'use strict';

const comp = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('compose: усі аргументи мають бути функціями');
    }
  }

  const handlers = {};  // event -> [callbacks], живе в замиканні

  const emit = (event, data) => {
    (handlers[event] || []).forEach(cb => cb(data));
  };

  const f = (x) => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x); // без рекурсії
    } catch (err) {
      emit('error', err);
      return undefined;
    }
  };

  f.on = (event, cb) => {
    (handlers[event] ||= []).push(cb);
    return f; // можна ланцюжком: f.on(...).on(...)
  };

  return f;
};

const inc = x => ++x;
const twice = x => x * 2;
const bad = () => { throw new Error('Щось пішло не так'); };

const f = comp(twice, inc);   // справа наліво: спочатку inc, потім twice
console.log(f(5));               // 12

const g = comp(inc, bad, twice);
g.on('error', e => console.log('Помилка:', e.message));

console.log(g(5));               // undefined
// Помилка: Щось пішло не так
