const { isPermutation } = require('./is-permutation');

describe('isPermutation', () => {
  it('should be a permutation', () => {
    expect(isPermutation('ABC', 'BA')).toBe(true);
  });

  it('should not be a permutation', () => {
    expect(isPermutation('ABC', 'VC')).toBe(false);
  });
});
