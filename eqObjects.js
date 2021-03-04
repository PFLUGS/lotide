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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));// => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

// const eqArrays = function(actual, expected) {

//   return JSON.stringify(actual) === JSON.stringify(expected);
// };

// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   } else {
//     for (let ourkeys in object1) {
//       // console.log("ourkeys>>>", ourkeys)
//       // console.log("object1 ourkeys",object1[ourkeys])
//       if (Array.isArray(object1[ourkeys])) {
//         // console.log("yes")
//         if (!eqArrays(object1[ourkeys], object2[ourkeys])) {
//           return false;
//         }
//       } else {
//         if (object1[ourkeys] !== object2[ourkeys]) {
//           return false;

//         }
//       }
//     }
//   } return true;
// };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
