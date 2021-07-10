/**
 * Identify if given a string all characters are unique
 * @param {string} input String to evaluate
 * @return {boolean}
 */
const areUniqueCharactersInString = (input) => {
  const characters = input.split('');

  return !characters.some(char => characters.filter(c => c === char).length > 1);
};

module.exports = { areUniqueCharactersInString };
