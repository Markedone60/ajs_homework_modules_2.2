class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {

}

function readGameSaving() {

}

function writeGameSaving() {

}

const character = require('./domain');

module.exports = {
  Game,
  GameSavingData,
  readGameSaving,
  writeGameSaving
};
