var player_card1 = document.getElementById('card1');
var player_card2 = document.getElementById('card2');
var dealer_card1 = document.getElementById('dealer1');
var dealer_card2 = document.getElementById('dealer2');
var total_score;
var total_dealer_score;

function randomNum() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

function beginButton() {
    player_card1.innerHTML = randomNum();
    player_card2.innerHTML = randomNum();
    dealer_card1.innerHTML = randomNum();
    dealer_card2.innerHTML = randomNum();
    totalPlayerScore();
}

function totalPlayerScore() {
    var total = Number(player_card1.innerHTML) + Number(player_card2.innerHTML);
    document.getElementById('total').innerHTML = total; 
    total_score = total;

    var dealer_total = Number(dealer_card1.innerHTML) + Number(dealer_card2.innerHTML);
    document.getElementById('dealerTotal').innerHTML = dealer_total; 
    total_dealer_score = dealer_total;
    while (total_dealer_score < 17) {
        var i = randomNum();
        total_dealer_score += i;
    }
}

function hitMe() {
    var hitNum = Math.floor(Math.random() * 10) + 1;
    total_score += hitNum;
    document.getElementById('total').innerHTML = total_score;
    checkPlayerScore(total_score);
}

function checkPlayerScore(x) {
    if (x > 21) {
        alert("Sorry you lose.");
    } 
}

function stayButton() {
    if (total_score > total_dealer_score) {
        alert("you WIN");
    } else if (total_dealer_score > total_score && total_dealer_score <= 21) {
        alert("you LOSE");
    } else {
        alert("you DREW");
    }
    console.log(total_dealer_score);
}