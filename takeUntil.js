////// testing code ////
let eqArrays = function(array1, array2) {
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
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

/////////////////////

const ingredients = ["flour", "eggs", "sugar", '/', 'rocks'];

const newMethod = (x, breakpoint) => {
  return x === breakpoint;
};

const breakpoint = '/';

const takeUntil = function(newIngredients, returnCall) {
  let goodArray = [];
  for (const ingredient of newIngredients) {
    if (!returnCall(ingredient, breakpoint)) {
      goodArray.push(ingredient);                          /// if it is not the break point ( eg '/') push to goodArray
    } else {
     
      return goodArray;                                      ///  if it is the break point - return whats in goodArray
    }
  }
};

const results = takeUntil(ingredients, newMethod);
console.log(results);

// tests ///

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);



///earlier version before refactoring///

// const callback1 = function (x, breakpoint){
//   if (x === breakpoint){
//     return true
//   } else {
//     return false
//   }
// };