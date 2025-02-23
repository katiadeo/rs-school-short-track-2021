/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;

  // while loop will repeat the process until it ends
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (value === array[middle]) {
      return middle;
    }
    if (value > array[middle]) {
      start = middle + 1;
    }
    if (value < array[middle]) {
      end = middle - 1;
    }
  }

  return null;
}
module.exports = findIndex;
