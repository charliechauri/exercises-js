/**
 * Check whether one string is the permutation of another
 * @param {String} baseString
 * @param {String} stringToCheck
 * @return {Boolean}
 */
const isPermutation = (baseString, stringToCheck) => stringToCheck.split('').every(
  char => baseString.includes(char),
);

module.exports = { isPermutation };
