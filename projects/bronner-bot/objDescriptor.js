let objarray = {{
	"name":"goose",
	"plural":"geese",
	"parentNouns":["living thing","animal","bird","waterfowl"],
	"physAdjectives":["large","brown","white"],
	"behaviorAdjectives":["aggressive","loud","obnoxious"],
	"has":["feathers","wings","feet"],
	"other":{"":"","":""},
},
{
	"name":"moose",
	"plural":"moose",
	"parentNouns":["living thing","animal","mammal","deer"],
	"physAdjectives":["large","brown"],
	"behaviorAdjectives":["dangerous","aggressive","herbivorous"],
	"has":["antlers","fur"],
	"other":{"":"","":""},
},};

function sayAdj(plural) {
	return objarray[0].name;
}

function returnToHTML() {
	document.getElementById("output").innerHTML = sayAdj(Math.random() > 0.5);	
}
