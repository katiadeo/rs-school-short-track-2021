/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const object1 = {};
  const object2 = {};
  let result = 0;
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();

  // count similar chars in arr1 by creating an object
  arr1.forEach((key1) => {
    if (object1[key1]) object1[key1]++;
    else object1[key1] = 1;
  });

  // count similar chars in arr2 by creating an object
  arr2.forEach((key2) => {
    if (object2[key2]) object2[key2]++;
    else object2[key2] = 1;
  });

  // compare two objects values:
  // interate through 'keys1' to check for the same chars in 'object2'
  Object.keys(object1).forEach((char) => {
    // check if 'object2' has the same key as 'object1'
    if (char in object2) {
      // find the min value comparing both objects values of the same keys
      result += Math.min(object1[char], object2[char]);
    }
  });

  return result;
}

module.exports = getCommonCharacterCount;
