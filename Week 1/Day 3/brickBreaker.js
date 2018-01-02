var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height / 2;

var paddleWidth = 80;
var paddleHeight = 20;
var paddleX = canvas.width/2 - paddleWidth/2;

var radius = 10;

var rightPressed = false;
var leftPressed = false;

var brickHeight = 20;
var brickWidth = 80;
var brickGapX = 15;
var brickGapY = 10;
var bricks = []

var numRows = 3;
var numCols = 5;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
document.addEventListener("mousemove", mouseMovementHandler);

xDir = 1;
yDir = 1;

function brick(x, y, width, height, outerColor, innerColor, status) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.outerColor = outerColor;
    this.innerColor = innerColor;
    this.status = status;

    this.draw = function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.innerColor;
        ctx.fill();
        ctx.strokeStyle = this.outerColor;
        ctx.stroke();
        ctx.closePath();
    }
}

function createBricks() { //creates brick arrays
    var brickX = 45,
        brickY = 80;
    
    for (var col = 0; col < numCols; col++) {
        bricks[col] = [];
        for (var row = 0; row < numRows; row++) {
            bricks[col][row] = new brick(col * (brickWidth + brickGapX) + brickX, row * (brickHeight + brickGapY) + brickY, brickWidth, brickHeight, 'red', 'green', 1);
        }
    }  
}

function drawBricks() {
    for (col = 0; col < numCols; col++) {
        for (row = 0; row < numRows; row++) {
            if (bricks[col][row].status != 0) {
                bricks[col][row].draw();
            }
        }
    }
}

function mouseMovementHandler(e) {

}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } 
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius , 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function newLife() {
    x = canvas.width / 2;
    y = canvas.height / 2;
    paddleX = canvas.width / 2 - paddleWidth / 2;
    rightPressed = leftPressed = false;
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
    drawPaddle();
    drawBricks();

    y += yDir;
    x += xDir;

    if (y >= canvas.height) {
        newLife();
    } 
    else if (y + radius + paddleHeight >= canvas.height) {
        if (x >= paddleX &&  x <= paddleX + paddleWidth) {
            yDir = -yDir;
        }
    } 
    else if (y - radius <= 0) {
        yDir = -yDir;
    } 
    else if (x + radius >= canvas.width) {
        xDir = -xDir;
    } 
    else if (x - radius <= 0) {
        xDir = -xDir;
    }

    if (rightPressed == true && paddleX + paddleWidth < canvas.width) {
        paddleX += 2;
    } 
    else if (leftPressed == true && paddleX > 0) {
        paddleX -= 2;
    }
}

createBricks();
var myGame = setInterval(render, 15);