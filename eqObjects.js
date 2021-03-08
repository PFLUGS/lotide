
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');


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

module.exports = eqObjects