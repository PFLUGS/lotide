const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};




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


countLetters("lighthouse in the house");

///test

const string = "hello my name is";

const result = countLetters(string);

assertEqual(result["l"], 2);

assertEqual(result["1"], undefined);