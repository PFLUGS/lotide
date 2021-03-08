const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail')



 const words = ["Yo Yo", "Lighthouse", "Labs"];
 tail(words); // no need to capture the return value since we are not checking it
 assertEqual(words.length, 3);

assertArraysEqual(tail([5, 6, 7]), [6,7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail(["Hello", "Lighthouse"]), "Lighthouse");