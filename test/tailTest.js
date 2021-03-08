// assertArraysEqual(tail([5, 6, 7]), [6,7]);
// assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// assertArraysEqual(tail(["Hello", "Lighthouse"]), "Lighthouse");

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns everything except the first index [5, 6, 7], [6,7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6,7]);
  });
});