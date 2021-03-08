const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

//////  Tests  ///////
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])

const grocerys = [
  { item: 'milk', price: 3.00 },
  { item: 'bread', price: 2.50 }
]
assertArraysEqual(map(grocerys, product => product.item), ['milk', 'bread']);

module.exports = map