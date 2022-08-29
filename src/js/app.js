const game = new Game();
game.start();

const gameExported = require('./game');
const { readGameSaving: loadGame, writeGameSaving: saveGame } = require('./game');
