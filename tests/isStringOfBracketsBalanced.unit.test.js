const isStringOfBracketsBalanced = require('../src/isStringOfBracketsBalanced');


const firstCaseInput = '{{{([])}}}{([])}';
const firstExpectedResult = true;
const firstResult = isStringOfBracketsBalanced(firstCaseInput);
test(`The followed string ${firstCaseInput} must be balanced brackets`, () => {
  expect(firstResult).toBe(firstExpectedResult);
});


const secondCaseInput = '{{([])}}}{()}';
const secondExpectedResult = false;
const secondResult = isStringOfBracketsBalanced(secondCaseInput);
test(`The followed string ${secondCaseInput} must be unbalanced brackets`, () => {
  expect(secondResult).toBe(secondExpectedResult);
});
