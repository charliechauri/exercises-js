const getMostRepeatedElements = require('../src/getMostRepeatedElements');

describe(`${getMostRepeatedElements.name}()`, () => {
  const values = ['a', 'b', 'c', 'a', 'b', 'c', 'c', 'b'];
  const expectedValue = 'c';
  test(`Given [${values}] the most repeated must be: ${expectedValue}`, () => {
    const result = getMostRepeatedElements(values);
    expect(result).toBe(expectedValue);
  });
});
