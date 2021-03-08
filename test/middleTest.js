const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns empty array [] if array is less than, or 2 [1, 2,] = []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("if array is an odd number an array containing a single middle element should be returned", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("if array is an even number of elements, an array containing the two elements in the middle should be returned", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);;
  });
});