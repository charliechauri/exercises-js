/**
 * @description Replaces all spaces in a given string with '%20'
 * @param {string} message
 * @return {string} Represents a URL
 */
const URLify = message => message.split(' ').join('%20');

module.exports = { URLify };
