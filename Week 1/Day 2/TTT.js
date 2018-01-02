var board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
board.toString();
first_player = 'x';
second_player = 'o';
var toggle = true;
var endToggle = true;

function lol(x) {
    var y = '';
    for(var i = 0; i < x.length; i++) {
        if (i == 2 || i == 5) {
            y += x[i] + "\n";
        } else {
            y += x[i] + " ";
        }
    } console.log(y);
}
lol(board);

function availSpace() {
    if (endToggle == false) {  
        return false;
    } else {
        for (var i = 0; i < board.length; i++) {
            if (board[i] == " ") {
                return true;
            }
        }
    } 
}

function dealWithInput() {
    var success = false;
    while(!success) {
        var user_input = parseInt(prompt("give me a num")); //use a toggle to switch players
        if (board[user_input] == " ") {
            if (toggle == true) {
                board[user_input] = first_player;
                toggle = false;
            } else if (toggle == false) {
                board[user_input] = second_player;
                toggle = true;
            }
            success = true;
        } else {
            alert("Cant go here")
        }
    }
}

while (availSpace()) {
    dealWithInput();
    lol(board);
    winCondition(board);
} 

function winCondition(x) {
var a = true;    
    while (a) {
        if (
            x[0] == 'x' &&
            x[3] == 'x' &&
            x[6] == 'x') {
                alert("X wins");
                endToggle = false;
                a = false;
            } 
        else if (
            x[1] == 'x' &&
            x[4] == 'x' &&
            x[7] == 'x') {
                alert("X wins");
                endToggle = false;
                a = false;
            }
        else if (
            x[2] == 'x' &&
            x[5] == 'x' &&
            x[8] == 'x') {
                alert("X wins");
                endToggle = false;
                a = false;
            }
            //Horizontal check
        else if (
            x[0] == 'x' &&
            x[1] == 'x' &&
            x[2] == 'x') {
                alert("X wins");
                endToggle = false;
                a = false;
            } 
        else if (
            x[3] == 'x' &&
            x[4] == 'x' &&
            x[5] == 'x') {
                alert("X wins");
                endToggle = false;
                a = false;
            }
        else if (
            x[6] == 'x' &&
            x[7] == 'x' &&
            x[8] == 'x') {
                alert("X wins");
                endToggle = false;
                a = false;
            } 
        //check for o
        if (
            x[0] == 'o' &&
            x[3] == 'o' &&
            x[6] == 'o') {
                alert("O wins");
                endToggle = false;
                a = false;
            } 
        else if (
            x[1] == 'o' &&
            x[4] == 'o' &&
            x[7] == 'o') {
                alert("O wins");
                endToggle = false;
                a = false;
            }
        else if (
            x[2] == 'o' &&
            x[5] == 'o' &&
            x[8] == 'o') {
                alert("O wins");
                endToggle = false;
                a = false;
            } 
            //Horizontal check
        else if (
            x[0] == 'o' &&
            x[1] == 'o' &&
            x[2] == 'o') {
                alert("O wins");
                endToggle = false;
                a = false;
            } 
        else if (
            x[3] == 'o' &&
            x[4] == 'o' &&
            x[5] == 'o') {
                alert("O wins");
                endToggle = false;
                a = false;
            }
        else if (
            x[6] == 'o' &&
            x[7] == 'o' &&
            x[8] == 'o') {
                alert("O wins");
                endToggle = false;
                a = false;
            } 
        //check diagonally o
        else if (
            x[0] == 'o' &&
            x[4] == 'o' &&
            x[8] == 'o') {
                alert("O wins");
                endToggle = false;
                a = false;
            } 
        else if (
            x[2] == 'o' &&
            x[4] == 'o' &&
            x[6] == 'o') {
                alert("O wins");
                endToggle = false;
                a = false;
            } 
        //check diagonally x
        else if (
            x[0] == 'x' &&
            x[4] == 'x' &&
            x[8] == 'x') {
                alert("X wins");
                endToggle = false;
                a = false;
            } 
        else if (
            x[2] == 'x' &&
            x[4] == 'x' &&
            x[6] == 'x') {
                alert("X wins");
                endToggle = false;
                a = false;
            } 
        else {
            break;
        }
    }
}