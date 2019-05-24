/**
 * @description Replaces all spaces in a string with '%20'
 * @param {string} message
 * @return {string} Represents a URL
 */

// const URLify = message => message.split(' ').join('%20');

function URLify(message) {
  const characters = message.split('');
  let messageURL = '';

  characters.forEach((char) => {
    messageURL += char === ' ' ? '%20' : char;
  });

  return messageURL;
}

module.exports = URLify;
