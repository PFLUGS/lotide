let middle = function (array) {
  // find the middle number
  let middleIndex = Math.floor(array.length / 2)
  let middleNumber = [array[middleIndex]]
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

module.exports = middle;

