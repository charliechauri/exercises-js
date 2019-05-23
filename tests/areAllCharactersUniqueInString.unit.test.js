const areAllCharactersUniqueInString = require('../src/areAllCharactersUniqueInString');

describe(`${areAllCharactersUniqueInString.name}()`, () => {
  const testInput = 'Carlos';
  const expectedResult = true;

  test(`Given "${testInput}", all characters must be unique`, () => {
    const result = areAllCharactersUniqueInString(testInput);

    expect(result).toBe(expectedResult);
  });

  const testInput2 = 'Maria';
  const expectedResult2 = false;
  test(`Given "${testInput2}", there must be duplicates`, () => {
    const result = areAllCharactersUniqueInString(testInput2);

    expect(result).toBe(expectedResult2);
  });
});
