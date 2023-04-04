//set up the canvas and context
//var canvas = document.getElementById("game-canvas");
var mouseDown = false;
var mouseJustDown = false;
var mouseJustUp = false;
var mouseX,mouseY;
//report the mouse position on click


canvas.addEventListener("mousedown", function (evt) {
    var mousePos = getMousePos(canvas, evt);
	mouseDown = true;
    //document.getElementById("mouseCoords").innerHTML = mousePos.x + ',' + mousePos.y;
	mouseJustDown = true;
}, false);


canvas.addEventListener("mousemove", getPosition, false);

canvas.addEventListener("mouseup", function (evt) {
	mouseDown = false;
	mouseJustUp = true;
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


function getPosition(event){
    var x = new Number();
    var y = new Number();
    
    var canvas = document.getElementById("game-canvas");
    
    if(event.x != undefined && event.y != undefined){
        x = event.x;
        y = event.y;
    }
    
    else // Firefox method to get the position
    {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
    }
    
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
	x = Math.round(x / 2);
	y = Math.round(y / 2);
	
	mouseX = x.toString();
	mouseY = y.toString();
    document.getElementById("mouseCoords").innerHTML = "Mouse at (" + x.toString() + "," + y.toString() + ")";
	//document.getElementById("mouseX").innerHTML = x;
	//document.getElementById("mouseY").innerHTML = y;
    
}
