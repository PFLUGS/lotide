const assertEqual = require('./assertEqual');


const countOnly = function (allItems, itemsToCount) {

  const results = {};
  for (const word of allItems) {
    if (itemsToCount[word]) {
      if (results[word] === undefined) {
        results[word] = 1;
      } else {
        results[word] += 1 ;
      }
    }
    
  }
  console.log(results);
    return results;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { 
// "Jason": true, 
// "Karima": true, 
// "Fang": true, 
// "Agouhanna": false 
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly