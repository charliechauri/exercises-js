const allowedOpenBrackets = ['{', '[', '('];
const allowedCloseBrackets = ['}', ']', ')'];

/**
 * @name isStringOfBracketsBalanced
 * @description Given a string input of brackets, it should say return if it's balanced
 * and makes sense
 * @param {string} input
 * @return {boolean}
 */
const isStringOfBracketsBalanced = (input) => {
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

module.exports = isStringOfBracketsBalanced;
