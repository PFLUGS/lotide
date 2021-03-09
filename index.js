const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqArrays,
  without,
  takeUntil,
  map,
  letterPositions,
  findKeyByValue,
  findKey,
  eqObjects,
  countOnly,
  countLetters,
};