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
  
}


var game = new Game();

game.initialize();