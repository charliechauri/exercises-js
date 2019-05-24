const permutationCheck = require('../src/permutationCheck');

describe(`${permutationCheck.name}()`, () => {
  const stringA = 'ABC';
  const stringB = 'BA';
  it(`Given "${stringB}" and "${stringA}", "${stringB}" is a permutation of "${stringA}"`, () => {
    expect(permutationCheck(stringA, stringB)).toBe(true);
  });

  const stringC = 'VC';
  it(`Given "${stringC}" and "${stringA}", "${stringC}" is not a permutation of "${stringA}"`, () => {
    expect(permutationCheck(stringA, stringC)).toBe(false);
  });
});
