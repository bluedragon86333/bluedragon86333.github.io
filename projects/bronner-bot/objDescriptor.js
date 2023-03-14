let jsontext = '{{"name":"goose","plural":"geese","parentNouns":["living thing","animal","bird","waterfowl"],"physAdjectives":["large","brown","white"],"behaviorAdjectives":["aggressive","loud","obnoxious"],"has":["feathers","wings","feet"],"other":{"":"","":""}}}';
//const objarray = JSON.parse(jsontext);

function sayAdj(plural) {
	let index = 0;
	//return objarray[index].name + " is " + objarray[index].physAdjectives[0];
	return "json was parsed successfully";
}

function returnToHTML() {
	document.getElementById("output").innerHTML = sayAdj(Math.random() > 0.5);	
}
