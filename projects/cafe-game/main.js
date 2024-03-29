	/*
	{
		"name":"",
		"ingredients":[""], 
		"actions":"",
		"type":"ingredient",
		"further-actions":{
			"cutter":""
		}
	}
	
	
	
	
	*/
	
//

var scrn = {
	"width":512,
	"height":288
};
var framerate = 30;

var selectedItem = -1;
var selectedLooseItem = -1;
var counter = {
	"minY":108,
	"maxY":180
};

//image global vars	
const imgRoot = "./img/";
const canvas = document.getElementById('game-canvas'); 
const context = canvas.getContext('2d');
context.imageSmoothingEnabled= false;
var background = new Image();



function initAppliances() {
	for (let i = 0; i < appliances.length; i++) {
		appliances[i].width = appliances[i].brx - appliances[i].tlx;
		appliances[i].height = appliances[i].bry - appliances[i].tly;
	}
}

function getApplianceIdWithName(name) {
	for (let i = 0; i < appliances.length; i++) {
		if (appliances[i].name == name) {
			return i;
		}
	}
	return -1;
}



function checkValidRecipe(appliance) { //input appliance name
	console.log("checking valid recipe...");
	let applianceId = getApplianceIdWithName(appliance);
	console.log("applianceId: " + applianceId);
	if (applianceId == -1) {
		return;
	}
	let finalFood = "nope";
	let oldIngredients = appliances[applianceId].contents;	
	let selectedIngredients = [];
	for (const i of oldIngredients) { //consolidates duplicate ingredients in appliance
		if (!selectedIngredients.includes(i)) {
			selectedIngredients.push(i);
		}
	}
	console.log("selectedIngredients: " + selectedIngredients);
	for (let i = 0; i < recipes.recipes.length;i++) {
		//console.log("recipes[" + i + "].ingredients: " + recipes.recipes[i].ingredients);
		if (arrayCompare(recipes.recipes[i].ingredients,selectedIngredients)) { //are ingredients the same?
			if (recipes.recipes[i].actions == appliances[applianceId].name) { //is action correct?
				finalFood = recipes.recipes[i].name;
				break;
			}
		}
	}
	if (finalFood == "nope") {
		finalFood = "complete shit";
		setMessage("wow you fucked up",3);
	} else {
		setMessage("you made dough!",3);
		makeLooseItem("dough",appliances[applianceId].tlx,appliances[applianceId].tly);
	}
	
	
	appliances[applianceId].contents = [];
}

function arrayCompare(_arr1, _arr2) {
    if (
      !Array.isArray(_arr1)
      || !Array.isArray(_arr2)
      || _arr1.length !== _arr2.length
      ) {
        return false;
      }
    
    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
         }
    }
    
    return true;
}

function process() {
	//var declaration
	let selectedIngredients = [];
	let rawInputs = document.getElementsByTagName("input");
	let selectedRadio = "";
	//let baseFood = "";
	let finalFood = "";
	
	//iterate through inputs on form
	for (let i = 0; i < rawInputs.length; i++) {
		if (rawInputs[i].type == "checkbox") { //get ingredients
			if (rawInputs[i].checked) {
				
				selectedIngredients.push(rawInputs[i].value);
			}
			
		} else if (rawInputs[i].type == "radio") { //get action
			if (rawInputs[i].checked) {
				selectedRadio = rawInputs[i].value;
			}
		}
	}
	console.log("selectedIngredients: " + selectedIngredients);
	console.log("how many recipes: " + recipes.recipes.length);
	//get finalFood from chosen ingredients
	
	for (let i = 0; i < recipes.recipes.length;i++) {
		//console.log("recipes[" + i + "].ingredients: " + recipes.recipes[i].ingredients);
		if (arrayCompare(recipes.recipes[i].ingredients,selectedIngredients)) { //are ingredients the same?
			if (recipes.recipes[i].actions == selectedRadio) { //is action correct?
				finalFood = recipes.recipes[i].name;
				break;
			}
		}
	}
	if (finalFood == "") {
		finalFood = "complete shit";
	}
	
	//prints results to HTML
	document.getElementById("compilation_check").innerHTML = "Compiled successfully";
	document.getElementById("chosenIngredients").innerHTML = "Ingredients picked: " + selectedIngredients;
	document.getElementById("finalFoodResult").innerHTML = "You made: <b>" + finalFood + "</b> in the " + selectedRadio;
	
}

var looseItems = [];
var maxVel = 6;
var gravityMod = 1.05;

var images = [];

function addImage(name) {
	let temp = new Image();
	temp.src = imgRoot + name + ".png";
	temp.onload = () => {
		let tempArr = [name,temp];
		images.push(tempArr);
	};
}

function loadImages() {
	for (let i = 0; i < recipes.recipes.length;i++) {
		let temp = new Image();
		temp.src = imgRoot + recipes.recipes[i].name + ".png";
		temp.onload = () => {
			let tempArr = [recipes.recipes[i].name,temp];
			images.push(tempArr);
		};
	}
	addImage("mixing_bowl_unmixed");
	addImage("mixing_bowl_finished");
	addImage("mixing_bowl_empty");
}


function drawEllipse(x, y, w, h) {
  var kappa = .5522848,
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle

  context.beginPath();
  context.moveTo(x, ym);
  context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  //ctx.closePath(); // not used correctly, see comments (use to close off open path)
  context.fillStyle = "#00000088";
  context.fill();
}

function drawIcon(foodName,x,y,width,height,shadow) {
	for (let i = 0; i < images.length; i++) {
		if (images[i][0] == foodName) {
			if (arguments.length == 3) {
				context.drawImage(images[i][1], x, y); 
			} else if (arguments.length >= 5) {
				/*if (shadow) {
					context.filter = "brightness(2000%)";
					context.drawImage(images[i][1], x - 2, y - 2,width + 4,height + 4);
					context.filter = "brightness(100%)";
				}*/
				context.drawImage(images[i][1], x, y,width,height); 
			} else if (arguments.length == 5) {
				context.drawImage(images[i][1], x, y,width,height); 
			}
			return;
		}
	}

	const img = new Image();        
	img.src = imgRoot + foodName + ".png";        
	img.onload = () => {
		if (arguments.length == 3) {
			context.drawImage(img, x, y); 
		} else if (arguments.length == 5) {
			context.drawImage(img, x, y,width,height); 
		}
	};
}


function drawStatusBar() { //draws the status bar, obviously
	let tlx = 120;
	let tly = 212;
	let spacing = 6;
	let hotbarWidth = 7;
	if (mouseJustDown) {
		//console.log("mouse at " + mouseX + "," + mouseY);
	}
	for (let i = 0; i < hotbarWidth; i++) {
		//console.log("at " + i + ", mouse needs to be between (" + (tlx + i * (32 + spacing)) + "," + tly + ") and (" + (tlx + 32 + i * (32 + spacing)) + "," + (tly + 32) + ")");
		
		
		
		if (i > inventory.inventory.length - 1) {
			break;
		}
		let hover = false;
		if (tlx + i * (32 + spacing) < mouseX && mouseX < tlx + 32 + i * (32 + spacing)) {
			//console.log("x range is correct when i = " + i);
			if (tly < mouseY && mouseY < tly + 32) {
				hover = true;
				if (mouseJustDown) {
					selectedItem = i;
					console.log("selectedItem: " + inventory.inventory[i].name);
					makeLooseItem(inventory.inventory[i].name,mouseX - 5,mouseY - 5);
					selectedLooseItem = looseItems.length - 1;
				}
				
			}
		}
			
		if (hover) {
			drawIcon(inventory.inventory[i].name,tlx + i * (32 + spacing),tly,34,34);
		} else {
			drawIcon(inventory.inventory[i].name,tlx + i * (32 + spacing),tly);
		}
		
		if (selectedItem == i && mouseDown) {
			//drawIcon(inventory.inventory[i].name,mouseX,mouseY);
		}
		
		
	}
	if (selectedItem != -1) {
		mouseJustDown = false;
	}
	
}

function drawAppliances() {
	let curr = appliances[getApplianceIdWithName("mixer")];
	if (getAppliance() == getApplianceIdWithName("mixer")) {
		curr.width += 4;
		curr.height += 4;
		curr.tlx -= 2;
		curr.tly -= 2;
	}
	if (curr.contents.length == 0) {
		
		drawIcon("mixing_bowl_empty",curr.tlx,curr.tly,curr.width,curr.height);
	} else {
		drawIcon("mixing_bowl_unmixed",curr.tlx,curr.tly,curr.width,curr.height);
	}
	if (getAppliance() == getApplianceIdWithName("mixer")) {
		curr.width -= 4;
		curr.height -= 4;
		curr.tlx += 2;
		curr.tly += 2;
	}
}

function drawAll() {
	//context.drawImage(background,0,0,256,144);     
	drawAppliances();
	drawLooseItems();
	drawButtons();
	

	//drawStatusBar();
}

function init() {
	console.log("init() loaded!");
	loadImages();
	makeButton("spawnDough",90,4,40,20,"Dough Spawner");
	initAppliances();
}

function processes() {
	processButtonClick();
	if (mouseJustUp && selectedItem != -1) {
		//makeLooseItem(inventory.inventory[selectedItem].name,mouseX,mouseY);
		mouseJustUp = false;
	}
	if (mouseJustUp && selectedLooseItem != -1) {
		let currAppliance = getAppliance();
		if (currAppliance != -1) {
			console.log("put " + looseItems[selectedLooseItem].name + " in " + appliances[currAppliance].name);
			
			appliances[currAppliance].contents.push(looseItems[selectedLooseItem].name);
			let tempLoose = looseItems[selectedLooseItem];
			looseItems.splice(selectedLooseItem);
			selectedLooseItem = -1;
			
			setMessage(appliances[currAppliance].contents + " is in " + appliances[currAppliance].name,3);
			makeButton(appliances[currAppliance].name + "Action",360,226,40,20,"Mix!");
			/*
			if (appliances[currAppliance].contents.includes(looseItems[selectedLooseItem].name)) {
			
			} else {
				appliances[currAppliance].contents.push(looseItems[selectedLooseItem].name);
			}
			*/
			
		}
		mouseJustUp = false;
	}
	drawStatusBar();
	if (mouseJustDown && selectedItem == -1) {
		selectedLooseItem = getLooseHover();
		mouseJustDown = false;
	}
	if (!mouseDown) {
		selectedItem = -1;
		selectedLooseItem = -1;
	}
	messageTick();
	processLooseItems();
	
	let hoverAppliance = -1;
	for (const i of appliances) {
		if (i.tlx < mouseX && mouseX < i.brx) {
			if (i.tly < mouseY && mouseY < i.bry) {
				hoverAppliance = i;
			}
		}
	}
	if (hoverAppliance == -1) {
		document.getElementById("currentApplianceHover").innerHTML = "You are hovering over: nothing";
	} else {
		document.getElementById("currentApplianceHover").innerHTML = "You are hovering over: " + hoverAppliance.name;
	}
	
}

var mainloop = setInterval(function() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawAll();
	processes();
	
	if (1 == 0) {
		clearInterval(mainloop);
	}
},framerate);
