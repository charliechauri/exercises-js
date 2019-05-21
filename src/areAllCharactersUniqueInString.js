const areAllCharactersUniqueInString = (input) => {
  const characters = input.split('');
  return !characters.some(char => characters.filter(c => c === char).length > 1);
};

module.exports = areAllCharactersUniqueInString;
