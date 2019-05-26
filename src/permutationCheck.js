/**
 * Check if one string is the permutation of another
 * @param {String} a
 * @param {String} b
 * @return {Boolean}
 */
const permutationCheck = (a, b) => {
  const charactersInA = a.split('');
  const charactersInB = b.split('');

  return charactersInB.every(charInB => charactersInA.includes(charInB));
};

module.exports = permutationCheck;
