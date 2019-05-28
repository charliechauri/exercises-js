/**
 * @description
  Using the following pattern:
  [1]
  [1, 1]
  [2, 1]
  [1, 2, 1, 1]
  [1, 1, 1, 2, 2, 1]
  [3, 1, 2, 2, 1, 1]
  [1, 3, 1, 1, 2, 2, 2, 1]

  Implement a function called `hearsay` to return the nth row
  hearsay(1) = [1]
  hearsay(2) = [1, 1]
  hearsay(4) = [1, 2, 1, 1]
 * @param {number} inputLevel
 * @return {Array} Representation of the level to get
 */
const firstLevel = [1];

function hearsay(inputLevel) {
  const levels = [firstLevel];
  const realIndexLevelToCreate = inputLevel - 1;

  if (!inputLevel || inputLevel === 0) {
    throw new Error('Level should be a number greater than 0');
  }

  if (inputLevel === 1) {
    return firstLevel;
  }

  let levelIndex = 0;
  while (levelIndex < realIndexLevelToCreate) {
    const currentLevel = levels[levelIndex];
    const newLevel = [];
    let counter = 0;
    let countedItem;

    currentLevel.forEach((item) => {
      if (!countedItem || countedItem !== item) {
        counter = 1;
        countedItem = item;
        newLevel.push(counter);
        newLevel.push(countedItem);
      } else if (countedItem === item) {
        const valueToUpdate = newLevel.length - 2;
        newLevel[valueToUpdate] += 1;
      }
    });

    levels.push(newLevel);
    levelIndex += 1;
  }

  return levels[inputLevel - 1];
}

console.log('hearsay(1)', hearsay(1));
console.log('hearsay(2)', hearsay(2));
console.log('hearsay(3)', hearsay(3));
console.log('hearsay(4)', hearsay(4));
console.log('hearsay(5)', hearsay(5));
console.log('hearsay(6)', hearsay(6));
console.log('hearsay(7)', hearsay(7));
