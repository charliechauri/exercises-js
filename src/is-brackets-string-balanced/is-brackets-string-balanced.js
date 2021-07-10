const allowedOpenBrackets = ['{', '[', '('];
const allowedCloseBrackets = ['}', ']', ')'];

/**
 * Given a string of brackets, it should determine if it's balanced
 * and has matching pair of brackets
 * @param {string} input
 * @return {boolean}
 */
const isBracketsStringBalanced = (input) => {
  let isBalanced = true;
  const inputBrackets = input.split('');
  const openBracketsStack = [];

  for (let index = 0, { length } = inputBrackets; index < length; index += 1) {
    const currentBracket = inputBrackets[index];

    if (allowedOpenBrackets.includes(currentBracket)) {
      openBracketsStack.push(currentBracket);
    } else {
      const currentClosingIndex = allowedCloseBrackets.indexOf(currentBracket);
      const lastOpenBracketInStackOnAllowedOpenBracketsIndex = allowedOpenBrackets
        .indexOf(openBracketsStack.pop());

      if (
        currentClosingIndex === -1
        || currentClosingIndex !== lastOpenBracketInStackOnAllowedOpenBracketsIndex
      ) {
        isBalanced = false;
        break;
      }
    }
  }

  return isBalanced;
};

module.exports = { isBracketsStringBalanced };
