let eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

const without = function(source, itemsToRemove){
  let result = [];
  for (let i = 0; i < source.length; i++){
    if (itemsToRemove.indexOf(source[i]) == -1){
      result.push(source[i])
    }
  } 
  console.log(result)
  return result
}
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);












// const without = function(source, itemsToRemove){
//   let result = [];
//   for (let i = 0; i < source.length; i++){
//     if (itemsToRemove.indexOf(source[i]) == -1){
//       result.push(source[i])
//     }
//   }
//   console.log(result)
//   return result
// }
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]