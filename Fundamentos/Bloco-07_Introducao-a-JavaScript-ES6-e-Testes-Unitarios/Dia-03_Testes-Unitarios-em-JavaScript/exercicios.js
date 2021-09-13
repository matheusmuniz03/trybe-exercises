//Exercicios 01:
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// implemente seus testes aqui
assert.strictEqual(sum(4,5),9,'4 + 5 = 9');

assert.strictEqual(sum(0,0),0,'0 + 0 = 0');

assert.throws(() => {
  sum(4,'5');
});

assert.strictEqual(sum(4,'5'),9);



//Exercicios 02:
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1,2,3,4],3),[1,2,4]);

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const test = [1,2,3,4,5];
myRemove(test,4);

assert.deepStrictEqual(test,[1,2,3,4,5]);

assert.deepStrictEqual(myRemove([1,2,3,4],5),[1,2,3,4]);



//Exercicio 03:
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),([1, 2, 4]));

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),([1, 2, 3, 4]));

const test = [1,2,3,4,5];
myRemoveWithoutCopy(test,3);

assert.notDeepStrictEqual(test,[1,2,3,4,5]);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),([1, 2, 3, 4]));



//Exercicio 04:
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15),'fizzbuzz');

assert.strictEqual(myFizzBuzz(6),'fizz');

assert.strictEqual(myFizzBuzz(10),'buzz');

assert.strictEqual(myFizzBuzz(7),7);

assert.strictEqual(myFizzBuzz('7'),false);