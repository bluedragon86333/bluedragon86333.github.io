
function getJoke() {
					const jokeSubjects = ["fish","snake","dog","vase","bird","yew tree","flash drive","wine glass","cereal box","streamer","bird seed","singer","Russian Oligarch","foot","wig","microphone","pencil","grandmother","1980's metal band","noodle bowl"];
					const jokePartB = ["feet","fins","livers","gelatin","hair","dishwasher","banjo","money","good conscience","parents","gills","bulgogi","pants","hats","birdseed","ice cream","job","flash drive","vocal cords","skin","plates","pilates","neurons"];
					const punchlines = ["Footless","A flowerpot","Bald","A millionaire","Scared","Orphaned","Mosquito","German","An archer","Pork","A marshmallow","Markiplier","J.K. Rowling","A Russian Oligarch","Cap'n Crunch","Four-footed","Three-footed","A sea slug","Rasputin","A Rubik's Cube","A diesel tank","7 GRAND DAD","FLEENSTONES","Sanitary","Magnesium Citrate","Cyanide"];
					let jokeTxt = "What do you call a ";
					let partBVal = "";
					if (Math.random() < 0.5) {
						partBVal = "no ";
					}
					jokeTxt = jokeTxt.concat(jokeSubjects[Math.floor(Math.random() * jokeSubjects.length)]+" with "+partBVal+jokePartB[Math.floor(Math.random() * jokePartB.length)]+"?");
					jokeTxt = jokeTxt.concat("\n"+punchlines[Math.floor(Math.random() * punchlines.length)])
					document.getElementById("output").innerHTML = jokeTxt;
}
