var board;
var gridSize = 20;

function setup() {
    createCanvas(600, 600);
    frameRate(10);
    board = new Grid(5, 5);
    player = new line();
}

function draw() {
    background('red');
    //board.grid(numCol, numRow);
    //board.update();
    board.show();
    board.create();
    player.playerTurn();
}