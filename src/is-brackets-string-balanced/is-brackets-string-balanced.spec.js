const { isBracketsStringBalanced } = require('./is-brackets-string-balanced');

describe('isBracketsStringBalanced', () => {
  it('should be a balanced string', () => {
    expect(isBracketsStringBalanced('{{{([])}}}{([])}')).toBe(true);
  });

  it('should not be a balanced string', () => {
    expect(isBracketsStringBalanced('{{([])}}}{()}')).toBe(false);
  });
});
