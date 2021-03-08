const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = letterPositions
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("sarah").a, [1,3]);

