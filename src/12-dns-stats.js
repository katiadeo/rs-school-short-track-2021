/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  let joined = '';

  domains.forEach((el) => {
    const subdomains = el.split('.');
    subdomains.reduceRight((acc, curr) => {
      joined = `${acc}.${curr}`;
      if (!obj[joined]) {
        obj[joined] = 1;
      } else {
        obj[joined]++;
      }
      return joined;
    }, '');
  });

  return obj;
}

module.exports = getDNSStats;
