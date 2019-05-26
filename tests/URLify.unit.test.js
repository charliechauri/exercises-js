const URLify = require('../src/URLify');

describe(`${URLify.name}}()`, () => {
  const message = 'Mr John Smith';
  const URLifiedMessage = 'Mr%20John%20Smith';
  it(`Given "${message}", URLified message is: "${URLifiedMessage}"`, () => {
    expect(URLify(message)).toBe(URLifiedMessage);
  });
});
