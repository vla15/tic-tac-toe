const prompt = require('prompt');

class Game {
  constructor() {
    this.board = [ ['_','_','_'], ['_','_','_'], ['_','_','_'] ];
    this.piece = 'x';
    this.player = 'player 1'
    this.round = 0;
  }

  checkRowWin() {
    if (this.board[0][0] === this.board[0][1] === this.board[0][2]) {
      return true;
    } else if (this.board[1][0] === this.board[1][1] === this.board[1][2]) {
      return true;
    } else if (this.board[2][0] === this.board[2][1] === this.board[2][2]) {
      return true;
    } else {
      return false;
    }
  }

  checkColWin() {
    if (this.board[0][0] === this.board[1][0] === this.board[2][0]) {
      return true;
    } else if (this.board[0][1] === this.board[1][1] === this.board[1][1]) {
      return true;
    } else if (this.board[0][2] === this.board[2][2] === this.board[2][2]) {
      return true;
    } else {
      return false;
    }
  }

  checkDiagWin() {
    if (this.board[0][0] === this.board[1][1] === this.board[2][2]) {
      return true;
    } else if (this.board[0][2] === this.board[1][1] === this.board[2][0]) {
      return true;
    } else {
      return false;
    }
  }

  changePlayer() {
      this.player === 'player 1' ? this.player = 'player 2' : this.player = 'player 1';
  }

  changePiece() {
      this.piece === 'x' ? this.piece = 'o' : this.piece = 'x';
  }

  displayBoard() {
      console.log('  ', '  1  ', ' 2  ', ' 3')
      console.log(1, this.board[0].slice(0));
      console.log(2, this.board[1].slice(0));
      console.log(3, this.board[2].slice(0));
  }

  askForInput() {
    var row = {
      name: 'row',
      message: `${this.player} please enter a row number 0 - 2`
    }
    var col = {
      name: 'col',
      message: `${this.player} please enter a col number 0 - 2`
    }
    prompt.get(['row', 'col'], (err, results) => {
      this.board[0][results.row][results.col] = this.piece;
      this.displayBoard();
    })
  }

  playGame() {
    //take row input
    //take col input
    this.askForInput();
    this.changePlayer();
    this.changePiece();
    this.round++;
    this.playRound();
  }

  playRound() {
    while (this.round < 9) {
      this.displayBoard();
      this.playGame();
    }
  }

}

var game = new Game();
prompt.start();
game.playGame();
