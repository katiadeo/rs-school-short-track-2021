/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  const arr = str.split('');
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      counter++;
    } else if (counter === 1) {
      result.push(arr[i]);
    } else {
      result.push(counter + arr[i]);
      counter = 1;
    }
  }

  return result.join('');
}

module.exports = encodeLine;

// create an object with counts {a: 1, b: 3 ... }
// const counts = arr.reduce((acc, curr) => {
//   acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//   return acc;
// }, {});

// Object.entries(counts).forEach(([key, value]) => {
//   if (value === 1) result.push(`${key}`);
//   else result.push(`${value}${key}`);
// });

// return result.join('');
