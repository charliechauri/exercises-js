const areAllCharactersUniqueInString = require('../src/areAllCharactersUniqueInString');

const testInput = 'Carlos';
const expectedResult = true;

test(`All characters in "${testInput}" are unique`, () => {
  const result = areAllCharactersUniqueInString(testInput);

  expect(result).toBe(expectedResult);
});

const testInput2 = 'Maria';
const expectedResult2 = false;
test(`There are repeated characters in "${testInput2}"`, () => {
  const result = areAllCharactersUniqueInString(testInput2);

  expect(result).toBe(expectedResult2);
});
