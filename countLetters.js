const assertEqual = require('./assertEqual');

let countLetters = function (sentance) {

  let results = {};
  // results['hello'] = 'test';
  let array = sentance.split("");
  for (let letter of array) {
    if (letter !== ' ') {

      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
}

module.exports = countLetters


countLetters("lighthouse in the house");

///test

// const string = "hello my name is";

// const result = countLetters(string);

// assertEqual(result["l"], 2);

// assertEqual(result["1"], undefined);