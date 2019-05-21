/**
 * @name getMostRepeatedElements
 * @description Given an array of string, it retrieves the name of the most repeated element,
 * if there are multiple elements with the same number of repetitions (maximum), they're sort alphabetically
 * and then returns the last element of them
 * @param {Array[string]} elements
 * @return Winner of voting
 */
function getMostRepeatedElements(elements) {
  const elementsCount = {};
  let mostRepeatedElementsKeys = [];

  elements.forEach(element => {
      elementsCount[element] = elementsCount[element] ? elementsCount[element] + 1 : 1;
  });

  for (let key in elementsCount) {
    const firstMostRepeatedValue = elementsCount[mostRepeatedElementsKeys[0]];
    const currentValue = elementsCount[key];

    if(firstMostRepeatedValue && firstMostRepeatedValue < currentValue) {
      mostRepeatedElementsKeys = [];
      mostRepeatedElementsKeys.push(key);
    } else if(!firstMostRepeatedValue || firstMostRepeatedValue === currentValue) {
      mostRepeatedElementsKeys.push(key);
    }
  }

  return mostRepeatedElementsKeys.sort()[mostRepeatedElementsKeys.length - 1];
}

module.exports = getMostRepeatedElements;