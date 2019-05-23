const isStringOfBracketsBalanced = require('../src/isStringOfBracketsBalanced');

describe(`${isStringOfBracketsBalanced.name}()`, () => {
  const firstCaseInput = '{{{([])}}}{([])}';
  const firstExpectedResult = true;
  const firstResult = isStringOfBracketsBalanced(firstCaseInput);
  test(`Given "${firstCaseInput}", it must be a balanced bracket string`, () => {
    expect(firstResult).toBe(firstExpectedResult);
  });


  const secondCaseInput = '{{([])}}}{()}';
  const secondExpectedResult = false;
  const secondResult = isStringOfBracketsBalanced(secondCaseInput);
  test(`Given "${secondCaseInput}", it must be an unbalanced bracket string`, () => {
    expect(secondResult).toBe(secondExpectedResult);
  });
});
