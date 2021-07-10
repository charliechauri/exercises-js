const { areUniqueCharactersInString } = require('./unique-characters-in-string');

describe('areUniqueCharactersInString', () => {
  it('should have unique characters', () => {
    expect(areUniqueCharactersInString('Carlos')).toBe(true);
  });

  it('should have duplicate characters', () => {
    expect(areUniqueCharactersInString('Maria')).toBe(false);
  });
});
