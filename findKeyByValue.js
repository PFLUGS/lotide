const { builtinModules } = require('node:module');
const assertEqual = require('./assertEqual');


const findKeyByValue = function (object, value) {
  const objectKeys = Object.keys(object)
  for (let key of objectKeys) {
    if (object[key] === value) {
        return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

module.exports = findKeyByValue
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);