
function processLooseItems() {
	var toDelete = [];
	for (let i = 0; i < looseItems.length; i++) {
		if (selectedLooseItem == i) { //selected item follows mouse cursor
			const itemSpeed = 10;
			if (looseItems[i].x < mouseX) {
				if (Math.abs(looseItems[i].x - mouseX) < itemSpeed) {
					looseItems[i].x = mouseX;
				} else {
					looseItems[i].x += itemSpeed;
				}
			} else if (looseItems[i].x > mouseX) {
				if (Math.abs(looseItems[i].x - mouseX) < itemSpeed) {
					looseItems[i].x = mouseX;
				} else {
					looseItems[i].x -= itemSpeed;
				}
			}
			if (looseItems[i].y < mouseY) {
				if (Math.abs(looseItems[i].x - mouseY) < itemSpeed) {
					looseItems[i].y = mouseY;
				} else {
					looseItems[i].y += itemSpeed;
				}
			} else if (looseItems[i].y > mouseY) {
				if (Math.abs(looseItems[i].y - mouseY) < itemSpeed) {
					looseItems[i].y = mouseY;
				} else {
					looseItems[i].y -= itemSpeed;
				}
			}
			//looseItems[i].x = parseInt(mouseX);
			//looseItems[i].y = parseInt(mouseY);
		}
		else if (looseItems[i].targetY == -1) { //first frame?
			if (looseItems[i].y < counter.maxY) { //on or above counter?
				if (looseItems[i].y < counter.minY) { //above counter
					console.log("above counter");
					looseItems[i].targetY = Math.floor(Math.random() * (counter.maxY - counter.minY)) + counter.minY - 16;
				} else { //on counter
					console.log("on counter");
					looseItems[i].targetY = looseItems[i].y;
					
				}
			} else { //below counter
				console.log("below counter");
				looseItems[i].targetY = 300;
			}
		} else { //processing post-drop
			if (looseItems[i].y < looseItems[i].targetY && looseItems[i].y < scrn.height) {
				//console.log("y < targetY; " + looseItems[i].y + " < " + looseItems[i].targetY);
				looseItems[i].y = parseInt(looseItems[i].y) + maxVel;//looseItems[i].yv;
			}
			
			if (looseItems[i].yv < maxVel) { //still accelerating
				//console.log("yv is under maxVel");

				looseItems[i].yv = looseItems[i].yv * gravityMod;
			} else {
				looseItems[i].yv = maxVel;
			}
			
		}
	}
	for (let i = 0; i < toDelete.length; i++) {
		//delete looseItems[i];
	}
	if (looseItems.length > 0) {
		let lastLoose = looseItems[looseItems.length - 1];
		document.getElementById("lastLoose").innerHTML = "position:(" + lastLoose.x + "," + lastLoose.y + ")<br>targetY:" + lastLoose.targetY + "<br>yv:" + lastLoose.yv;
	}
}



function drawLooseItems() {
	//let mouseX = parseInt(document.getElementById("mouseX").innerHTML);
	//let mouseY = document.getElementById("mouseY").innerHTML.toString();
	for (let i = 0;i < looseItems.length; i++) {
		if (looseItems[i].y < counter.maxY) {
			width = (looseItems[i].targetY - looseItems[i].y) / 10;
			if (looseItems[i].y < looseItems[i].targetY) {
				drawEllipse(looseItems[i].x + width / 2,looseItems[i].targetY + 20,32 - width,16);
			} else {
				drawEllipse(looseItems[i].x + width / 2,looseItems[i].y + 20,32,16);
			}
		}
		if (getLooseHover() == i) {
			drawIcon(looseItems[i].name,looseItems[i].x,looseItems[i].y,34,34);
		} else {
			drawIcon(looseItems[i].name,looseItems[i].x,looseItems[i].y,32,32);
		}
		
	}
}


function getLooseHover() { //finds which loose item is being hovered over
	for (let i = 0; i < looseItems.length; i++) {
		let tlx = looseItems[i].x;
		let tly = looseItems[i].y;
		if (tlx < mouseX && mouseX < tlx + 32) {
			//console.log("x range is correct when i = " + i);
			if (tly < mouseY && mouseY < tly + 32) {
				return i;
				if (mouseJustDown) {
					selectedItem = i;
					mouseJustDown = false;
				}
				
			}
		}
	}
	
	
	return -1;
}
