var buttons = [
	
];
var buttonHover = -1;

function makeButton(id,tlx,tly,width,height,text) {
	for (let i = 0; i < buttons.length; i++) { //if button already exists, just makes it visible
		if (buttons[i].id == id) {
			buttons[i].visible = true;
			return;
		}
	}
	let temp = {
		"id":"",
		"tlx":0,
		"tly":0,
		"width":32,
		"height":16,
		"text":"",
		"visible":false
	};
	
	
	temp.id = id;
	temp.tlx = tlx;
	temp.tly = tly;
	temp.text = text;
	temp.visible = true;
	temp.width = width;
	temp.height = height;
	buttons.push(temp);
}
function processButtonClick() { //checks if button was clicked
	if (getButtonHover() != -1) {
		if (mouseJustDown) {
			switch(buttons[buttonHover].id) {
				case "clearScrn":
					looseItems = [];
					hideButton("clearScrn");
				break;
				case "mixerAction":
					console.log("mixerAction button clicked");
					checkValidRecipe("mixer");
					hideButton("mixerAction");
				break;
				case "spawnDough":
					makeLooseItem("dough",90,4);
					//hideButton("spawnDough");
				break;
			}
		}
	}
}

function getButtonHover() {
	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].tlx < mouseX && mouseX < buttons[i].tlx + buttons[i].width && buttons[i].tly < mouseY && mouseY < buttons[i].tly + buttons[i].height) {
			buttonHover = i;
			return i;
		}
	}
	buttonHover = -1;
	return -1;
}

function hideButton(id) {
	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].id == id) {
			buttons[i].visible = false;
			return;
		}
	}
}

function drawButtons() {
	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].visible) {
			//console.log(buttons[i]);
			context.beginPath();
			
			if (buttonHover == i) {
				context.fillStyle = "#00dfdf";
			} else {
				context.fillStyle = "#00ffff";
			}
			context.rect(buttons[i].tlx,buttons[i].tly,buttons[i].width,buttons[i].height);
			context.fill();
			context.fillStyle = "#000";
			context.fillText(buttons[i].text,buttons[i].tlx + 2,buttons[i].tly + 2 + 12);
		}
	}
}