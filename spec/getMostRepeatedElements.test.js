const getMostRepeatedElements = require('../src/getMostRepeatedElements');

const values = ['a', 'b', 'c', 'a', 'b', 'c', 'c', 'b'];
const expectedValue = 'c';
test(`Given a collection of items ${values} the most repeated one is: ${expectedValue}`, () => {
  const result = getMostRepeatedElements(values);
  expect(result).toBe(expectedValue);
});
