//set up the canvas and context
//var canvas = document.getElementById("game-canvas");
var mouseDown = false;
//report the mouse position on click
canvas.addEventListener("mousedown", function (evt) {
    var mousePos = getMousePos(canvas, evt);
	mouseDown = true;
    document.getElementById("mouseCoords").innerHTML = mousePos.x + ',' + mousePos.y;
	
}, false);

canvas.addEventListener("mouseup", function (evt) {
	mouseDown = false;
}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((evt.clientX - rect.left) / 2),
        y: Math.round((evt.clientY - rect.top) / 2)
    };
}

var updatemouse = setInterval(function() {
	document.getElementById("mouseDown").innerHTML = "mouseDown = " + mouseDown;
},30);
