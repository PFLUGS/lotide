const assertEqual = require('./assertEqual');


const findKey = function(object, callBack) {
  let objectKeys = Object.keys(object);
  for (let key of objectKeys) {
    if (callBack(object[key])) {
      return key;
    }
  }
  return undefined;
};

assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2), 'noma'
);


assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2), 'frank'


);

assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 3), 'Akaleri'


);

module.exports = findKey