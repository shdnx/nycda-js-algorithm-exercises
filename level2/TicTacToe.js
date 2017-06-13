class TicTacToeGameOverCheck {
  constructor(player, counter) {
    this.player = player || null;
    this.counter = counter || 0;
  }

  reset() {
    this.player = null;
    this.counter = 0;
  }

  visitCell(cell) {
    if (!cell) {
      this.reset();
      return 0;
    }

    if (!this.player) {
      this.player = cell;
    }

    if (this.player === cell) {
      this.counter++;
    }
    else {
      this.counter = 1;
      this.player = cell;
    }

    return this.counter;
  }
}

class TicTacToeGame {
  constructor(options) {
    this.numWinningCells = options.numWinningCells || 3;
    this.numRows = options.numRows || 3;
    this.numCols = options.numCols || 3;

    this.board = new Array(this.numRows);
    for (let i = 0; i < this.numCols; i++) {
      this.board[i] = new Array(this.numCols);
    }

    this.currentPlayer = 'X';
    this.turnNumber = 1;
    this.isGameOver = false;
  }

  nextPlayer() {
    if (this.isGameOver)
      throw new Error("The game is already over, no more moves are allowed!");

    if (this.currentPlayer === 'X')
      this.currentPlayer = 'O';
    else
      this.currentPlayer = 'X';

    this.turnNumber++;
  }

  checkGameOver(firstRow, lastRow, firstCol, lastCol) {
    if (this.isGameOver)
      return true;

    firstRow = firstRow || 0;
    lastRow = lastRow || this.numRows - 1;
    firstCol = firstCol || 0;
    lastCol = lastCol || this.numCols - 1;

    let gameOverCheck = new TicTacToeGameOverCheck();

    // NOTE: we could optimise this. The only part of the board that needs to be checked is the position of the last move and this.numWinningCells - 1 cells around it in every direction. The only player who can possibly win is the one who just made the move, so we can ignore the cells of the other player.

    // check rows
    for (let row = firstRow; row <= lastRow; row++) {
      for (let col = firstCol; col <= lastCol; col++) {
        if (gameOverCheck.visitCell(this.board[row][col]) >= this.numWinningCells) {
          // we have a winner!!!
          // NOTE: we don't need to return which player won; the only one that could have won is this.currentPlayer
          return true;
        }
      }
    }

    gameOverCheck.reset();

    // check columns
    for (let col = firstCol; col <= lastCol; col++) {
      for (let row = firstRow; row <= lastRow; row++) {
        if (gameOverCheck.visitCell(this.board[row][col]) >= this.numWinningCells)
          return true;
      }
    }

    gameOverCheck.reset();

    // check the left diagonal
    for (let row = firstRow, col = firstCol;
         row <= lastRow && col <= lastCol;
         row++, col++) {
      if (gameOverCheck.visitCell(this.board[row][col]) >= this.numWinningCells)
        return true;
    }

    gameOverCheck.reset();

    // check the right diagonal
    for (let row = lastRow, col = firstCol;
         row >= firstRow && col <= lastCol;
         row--, col++) {
      if (gameOverCheck.visitCell(this.board[row][col]) >= this.numWinningCells)
        return true;
    }

    return false;
  }

  makeMove(x, y) {
    if (this.isGameOver)
      throw new Error("The game is already over, no more moves are allowed!");

    if (x < 1 || this.numRows < x || y < 1 || this.numCols < y)
      throw new RangeError("Specified cell is outside of the bounds of the board!");

    // translate to 0-based index
    x--;
    y--;

    this.board[x][y] = this.currentPlayer;

    // As an optimisation, it's sufficient to check the cells on the board around (x, y) for this.numWinningCells - 1 cells. I.e. the part of the board we're checking is the rectangle between the points (max(0, x - (this.numWinningCells - 1)), max(0, y - (this.numWinningCells - 1))) to (min(this.board.length - 1, x + (this.numWinningCells - 1)), min(this.board[0].length - 1, y + (this.numWinningCells - 1))).
    const checkFirstRow = Math.max(0, x - (this.numWinningCells - 1));
    const checkFirstCol = Math.max(0, y - (this.numWinningCells - 1));
    const checkLastRow = Math.min(this.numRows - 1, x + (this.numWinningCells - 1));
    const checkLastCol = Math.min(this.numCols - 1, y + (this.numWinningCells - 1));
    if (this.checkGameOver(checkFirstRow, checkLastRow, checkFirstCol, checkLastCol)) {
      this.isGameOver = true;
      return true;
    }

    this.nextPlayer();
    return false;
  }

  printBoard() {
    const leftMargin = this.numRows.toString().length + 2;

    let line = " ".repeat(leftMargin);
    for (let col = 0; col < this.numCols; col++) {
      line += " " + (col + 1).toString();
    }

    console.log(line);
    console.log("-".repeat(line.length));

    for (let row = 0; row < this.numRows; row++) {
      let line = (row + 1).toString() + " |";
      for (let col = 0; col < this.numCols; col++) {
        const cell = this.board[row][col];

        line += " ";
        if (cell) line += cell;
        else line += " ";
      }

      console.log(line);
    }
  }

  print() {
    this.printBoard();

    console.log("Turn " + this.turnNumber);
    console.log("Cells needed to win: " + this.numWinningCells);

    if (this.isGameOver) {
      console.log("Winner: " + this.currentPlayer);
    } else {
      console.log("Player making a move: " + this.currentPlayer);
    }
  }
}

let game = new TicTacToeGame({
  numRows: 5,
  numCols: 5,
  numWinningCells: 3
});

const moves = [
  { x: 3, y: 3 }, // X
  { x: 2, y: 2 }, // O
  { x: 4, y: 4 }, // X
  { x: 2, y: 3 }, // O
  { x: 5, y: 5 } // X wins
];

for (let move of moves) {
  game.makeMove(move.x, move.y);
  game.print();

  if (game.isGameOver) {
    break;
  }
}