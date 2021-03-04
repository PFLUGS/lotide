let eqArrays = function (array1, array2) {
  let accumulator = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        accumulator++;
      }
    }
  }
  if (accumulator === array1.length) {
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

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