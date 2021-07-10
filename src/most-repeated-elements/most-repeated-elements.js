/**
 * Given an array of string, it retrieves the name of the most repeated element,
 * if there are multiple elements with the same number of repetitions (maximum),
 * they're sort alphabetically and then returns the last element of them
 * @param {Array[string]} elements
 * @return {string} Most repeated string
 */
function getMostRepeatedElements(elements) {
  const elementsCountMap = elements.reduce((map, element) => {
    const currentCount = map.get(element);
    const hasValue = !!currentCount;

    map.set(element, hasValue ? currentCount + 1 : 1);

    return map;
  }, new Map());

  const mostRepeatedElementsKeys = Array.from(elementsCountMap.keys()).reduce((keys, key) => {
    const firstMostRepeatedValue = elementsCountMap.get(keys[0]);
    const isThereValueToCompare = !!firstMostRepeatedValue;

    if (!isThereValueToCompare) {
      return [key];
    }

    const currentValue = elementsCountMap.get(key);
    const currentValueIsGreater = firstMostRepeatedValue < currentValue;
    const currentValueIsLess = firstMostRepeatedValue > currentValue;

    if (currentValueIsGreater) {
      return [key];
    }

    if (currentValueIsLess) {
      return keys;
    }

    // current value is equals than first most repeated value
    return [...keys, key];
  }, []);

  return mostRepeatedElementsKeys.sort()[mostRepeatedElementsKeys.length - 1];
}

module.exports = { getMostRepeatedElements };
