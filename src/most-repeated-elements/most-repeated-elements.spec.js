const { getMostRepeatedElements } = require('./most-repeated-elements');

describe('getMostRepeatedElements', () => {
  it('should return the most repeated value', () => {
    const values = ['a', 'c', 'b', 'a'];

    expect(getMostRepeatedElements(values)).toBe('a');
  });

  it('should return the last most repeated value', () => {
    const values = ['a', 'b', 'c', 'a', 'b', 'c', 'c', 'b', 'a'];

    expect(getMostRepeatedElements(values)).toBe('c');
  });
});
