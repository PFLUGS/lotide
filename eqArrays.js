const eqArrays = function(arr1, arr2) {
  // check to see if they inputs are indeed arrays using .isArray because [a, b, c] and string 'abc'
  // AND that the array lengths are equal
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      //if the lengths do not match return false
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    // loop will only keep running if all elements match
    return true;
  } else {
    return false; // because the length is not equal
  }
};
 module.exports = eqArrays;

