const { reverseString, optimizedReverseString } = require('./reverse-string');

describe('reverseString', () => {
  it('should reverse string', () => {
    expect(reverseString('youtube')).toBe('ebutuoy');
  });
});

describe('optimizedReverseString', () => {
  it('should reverse string', () => {
    expect(optimizedReverseString('hola')).toBe('aloh');
  });
});
