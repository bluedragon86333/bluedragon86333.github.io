//set up the canvas and context
//var canvas = document.getElementById("game-canvas");

//report the mouse position on click
canvas.addEventListener("mousedown", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    document.getElementById("mouseCoords").innerHTML = mousePos.x + ',' + mousePos.y;
}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}