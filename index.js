const prompt = require('prompt');

class Game {
  constructor() {
    this.board = [ ['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_'] ];
    this.piece = 'x';
    this.player = 'Player 1'
    this.round = 0;
  }

  checkWin() {
    this.checkRowWin();
    this.checkColWin();
    this.checkDiagWin();
  }

  checkRowWin() {
    if (this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2]) {
      return true;
    } else if (this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2]) {
      return true;
    } else if (this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2]) {
      return true;
    } else {
      return false;
    }
  }

  checkColWin() {
    if (this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0]) {
      return true;
    } else if (this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[1][1]) {
      return true;
    } else if (this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2]) {
      return true;
    } else {
      return false;
    }
  }

  checkDiagWin() {
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      return true;
    } else if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      return true;
    } else {
      return false;
    }
  }

  changePlayer() {
      this.player === 'Player 1' ? this.player = 'Player 2' : this.player = 'Player 1';
  }

  changePiece() {
      this.piece === 'x' ? this.piece = 'o' : this.piece = 'x';
  }

  displayBoard() {
      console.log('     1    2    3')
      console.log(1, this.board[0].slice(0));
      console.log(2, this.board[1].slice(0));
      console.log(3, this.board[2].slice(0));
  }

  askForInput() {
    var row = {
      name: 'row',
      message: `${this.player} please enter a row number 1 - 3`
    }
    var col = {
      name: 'col',
      message: `${this.player} please enter a col number 1 - 3`
    }
    prompt.get(['row', 'col'], (err, results) => {
      if (this.board[results.row - 1][results.col - 1] !== 'x' || this.board[results.row - 1][results.col - 1] !== 'o' && results.row > 0 && results.col > 0) {
        this.board[results.row - 1][results.col - 1] = this.piece;
        this.displayBoard();
        this.changePlayer();
        this.changePiece();
        this.round++;
        this.playRound();        
      } else {
        console.log('invalid placement');
        this.playGame();
      }
    })
  }

  playGame() {
    this.askForInput();
  }

  playRound() {
    if (this.checkWin()) {
      this.round = 9;
      console.log(`${this.player} wins!`);
    }

    if (this.round < 9) {
      this.playGame();
    }
  }

}

var game = new Game();
prompt.start();
game.displayBoard();
game.playGame();
