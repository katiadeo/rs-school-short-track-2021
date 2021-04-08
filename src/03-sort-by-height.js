/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indices = [];
  // sort arr with no -1  => [150, 160, 170, 180, 190]
  const noMinus = arr.filter((char) => char !== -1).sort((a, b) => a - b);

  // store indices of -1   =>  indices = [0, 4, 5]
  arr.filter((char, i) => char === -1 && indices.push(i));

  // put -1 on their initial places in the sorted arr
  indices.forEach((index) => {
    noMinus.splice(index, -1, -1);
  });

  return noMinus;
}
module.exports = sortByHeight;
