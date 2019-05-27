const reverseString = require('../src/reverseString');

describe(`${reverseString.name}`, () => {
  const testString = 'youtube';
  const expectedResult = 'ebutuoy';

  it(`Given ${testString}, reverse string is: ${expectedResult}`, () => {
    expect(reverseString(testString)).toBe(expectedResult);
  });
});
