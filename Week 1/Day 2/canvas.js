var canvas, context; 
function setup() {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    console.log(canvas.height);

    document.addEventListener('click', handleClick); //or canvas.addEventListener
}

function handleClick(e) {
    console.log(canvas.getBoundingClientRect().left);
    console.log(canvas.getBoundingClientRect().right);

    var rectLeft = canvas.getBoundingClientRect().left + 10, rectRight = rectLeft + 300, rectTop = canvas.getBoundingClientRect().top + 20, rectBottom = rectTop + 200;

    if (e.x > rectLeft && e.x < rectRight && e.y > rectTop && e.y < rectBottom) {
        alert("clicked");
    } else {
        console.log("no rect");
    }
}
/* function drawRectangle() {
    context.fillStyle = "#FFF000";
    context.fillRect(10, 20, 300, 200);
} */

function drawLine() {
    context.beginPath();
    context.moveTo(233, 0);
    context.lineTo(233, 650);
    context.stroke();
}

function drawCircle() {
    context.beginPath();
    context.arc(450, 450, 30, 0, 2 * Math.PI);
    context.stroke();
} 

window.onload = function() {
    setup();
    //drawRectangle();
    drawLine();
    //drawCircle();
}

