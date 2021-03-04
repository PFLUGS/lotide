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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};


const letterPositions = function (sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    let position = i;
    if (letter != ' ') {
      if (results[letter]) {
        results[letter].push(position);
      } else {
        results[letter] = [position];
      }
    }
  }
  return results
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("sarah").a, [1,3]);

