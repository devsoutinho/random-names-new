const names = require('../names.json');

function getFirst() {
  return names[0];
}

function getLast() {
  return names[names.length - 1];
}

module.exports = {
  getFirst,
  getLast,
  logger: () => {
    console.log(`Hi i'm logging!`);
    console.log(`And I'm logging too!`);
  },
}