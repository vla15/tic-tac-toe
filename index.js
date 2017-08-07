class Game {
  constructor(props) {

  }

  initialize() {
    this.rowOne = document.getElementById("row1").children;
    this.rowTwo = document.getElementById("row2").children;
    this.rowThree = document.getElementById("row3").children;
  }

  
}


var game = new Game();

game.initialize();