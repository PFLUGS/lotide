const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};


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

const eqObjects = function (object1, object2) {
  const objectKeys1 = Object.keys(object1)
  const objectKeys2 = Object.keys(object2)

  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  } else {
    for (let values in object1) {
      if (Array.isArray(object1[values])) {
        if (!eqArrays(object1[values], object2[values])) {
          return false
        }
      } else {
        if (object1[values] !== object2[values]) {
          return false;
        }
      }
    }
  } return true
};


const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected) === true) {
    const inspect = require('util').inspect;
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} = ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
}

let A = { a: '1', b: 2 }
let B = { b: 2, a: '1' }
assertObjectsEqual(A, B); // Pass

module.exports = assertObjectsEqual;