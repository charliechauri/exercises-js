const { URLify } = require('./urlify');

describe('URLify', () => {
  it('should replace spaces with %20', () => {
    expect(URLify('Mr John Smith')).toBe('Mr%20John%20Smith');
  });
});
