var prompt = require('prompt');
var board = [];
var winner = false;


var turn = 'x' || turn;
var board = ['_', '_', '_', '_', '_', '_', '_', '_', '_']
var player = 'player one' || player;

console.log(
  `    A B C 
  0|${board[0]}|${board[3]}|${board[6]}|
  1|${board[1]}|${board[4]}|${board[7]}|
  2|${board[2]}|${board[5]}|${board[8]}|`);
prompt.start();


var row = {
  name: 'row',
  message:`Please input your row ${player}: `
}

var col = {
  name: 'col',
  message: `Please input your col ${player}: ` 
}


prompt.get([row, col], (err, results) => {
  if (err) {
    return onErr(err);
  }
  var colResult
  if (results.col.toLowerCase() === 'a') {
    colResult = 0;
  } else if (results.col.toLowerCase() === 'b') {
    colResult = 1;
  } else if (results.col.toLowerCase() === 'c') {
    colResult = 2;
  }
  console.log(colResult);
})