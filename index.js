class Game {
  constructor(props) {

  }

  initialize() {
    this.rowOne = document.getElementById("row1").children;
    this.rowTwo = document.getElementById("row2").children;
    this.rowThree = document.getElementById("row3").children;
    this.clearBoard(this.rowOne);
    this.clearBoard(this.rowTwo);
    this.clearBoard(this.rowThree);
  }

  clearBoard(row) {
    [...row].forEach(el => {
      el.innerHTML = '';
    })
  }

  checkWin() {
    //check for diagonal victory
    //check for col victory
    //check for row victory
  }

  diagonalVictory() {
    //traverse the board
      //for left diagnoal
        //check all cells where index difference is 0
      //for all right diagnoals
        //check center and where row is 2/0 and col is 0/2
  }

  colVictory() {
    //traverse the rows
      //check if a single row has all of x or o
  }

  rowVictory() {
    //traverse the col
      //check if a single col has all of x or o
  }
  
}


var game = new Game();

game.initialize();