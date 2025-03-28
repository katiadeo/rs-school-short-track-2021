/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // convert number into an array of single digits
  const arr = Array.from(String(n), Number);
  // sum the digits once
  const sum = arr.reduce((acc, current) => acc + current, 0);
  // as 9 is the biggest number with 1 digit -> check if the sum is more than 9
  // use recursion
  return (sum >= 10) ? getSumOfDigits(sum) : sum;
}

module.exports = getSumOfDigits;
