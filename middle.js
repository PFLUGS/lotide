let eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

let middle = function (array) {
  // find the middle number
  let middleIndex = Math.floor(array.length / 2)
  let middleNumber = array[middleIndex]
  // if array is 0 , 1 or 2 numbers we need to output an empty array
  if (array.length <= 2) {
    return [];
    // is array is an even number of elements, an array containing the two elements in the middle should be returned
  } else if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]]
  } else {
    // if array is an odd number an array containing a single middle element should be returned.
    return middleNumber;
  }

};

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([]), []);
