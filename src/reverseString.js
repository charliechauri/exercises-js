/**
 * Given a string returns the reverse string
 * @param {String} string
 * @return {Boolean}
 */
function reverseString(string) {
  let result = '';

  for (let index = string.length - 1; index >= 0; index -= 1) {
    result += string[index];
  }

  return result;
}

module.exports = reverseString;
