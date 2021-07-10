/**
 * Given a string returns the reverse string
 * @param {String} string
 * @return {Boolean}
 */
const reverseString = string => string.split('').reverse().join('');

/**
 * @todo Implement without using string functions
 * Given a string returns the reverse string
 * @param {String} string
 * @return {Boolean}
 */
const optimizedReverseString = (string) => {
  let newString = '';
  const lastCharIndex = string.length - 1;

  for (let index = lastCharIndex; index >= 0; index -= 1) {
    newString = `${newString}${string[index]}`;
  }

  return newString;
};

module.exports = { reverseString, optimizedReverseString };
