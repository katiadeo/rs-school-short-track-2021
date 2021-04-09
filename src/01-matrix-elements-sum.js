/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // sum up all digits of the zero array in matrix as there are no zeros above it
      if (i === 0) {
        result = matrix[i].reduce((acc, current) => acc + current, 0);
        // if the characer of uppper array in matrix is not zezo, sum up this character
      } else if (matrix[i - 1][j] !== 0) {
        result += matrix[i][j];
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
