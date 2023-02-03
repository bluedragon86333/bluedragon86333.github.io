const celebs = ["Gerard Way","Cristine Rotenberg","Joe Biden","Millie Bobby Brown","RuPaul","Paul McCartney","Billie Joe Armstrong","Chris Pratt","Scott Wozniak","Charles Martinet","Freddie Mercury","Frank Iero","Scott Fitzgerald","Shigeru Miyamoto","my mother","SmallAnt","Trevor Noah","John Oliver","Jungkook","Johnny Depp","Jack Black","Obama","Huey Newton","Bob Bryar","Kate McKinnon","your mom","Taylor Swift","Katy Perry","Eiji Aonuma","Samantha Kelly","Finn Wolfhard","Jay Baruchel","Stephen Colbert","Lena Raine","Christopher Larkin","Angie Thomas","Bob Dylan","Rick Riordan","Cressida Cowell","Eric Burdon","Dr. Seuss","Jack White","Jacob Tobia","Big Ben"];
const gexVerbs = ["surfing the web","Halloween","hunting rabbits","fighting rhinos","Easter","Passover","Christmas","eating chips","playing Minecraft","sex","ice hockey","Jumanji","darts","date night","fishing","bathing","organizing the Tupperware","torture","drilling holes","home demolition","watching Pinocchio","filling holes","fixing the drain","doing laundry","breaking dishes","blowing glass","dispensing Tabasco","getting dressed","plucking eyebrows","vaccuming the garage","watering the plants","using the restroom","fermenting honey","fermenting cereal","drinking Jamba Juice","plugging in the fridge","standing on the fridge","petting the dogs","watching paint dry","brushing the horses","getting canceled on Twitter","binge watching Netflix while crying into a tub of ice cream","playing foosball","buying Gerard Way Funko Pops","watching American Idol","doing pilates"];
const gexFeelings = ["depressed","elated","happy","triggered","angry","bored","irritated","proud","scared","worried","satisfied","awful","tired","disappointed","flaccid","accomplished","short","contemplative","just the worst","sedated","synthesized"];
const locationPrefs = ["at","on","in"];
const gexCommands = ["ferment cereal","water the plants","drink tap water","use the restroom","dispense Tabasco sauce","plug in the fridge","fight rhinos","eat chips","get dressed","pluck eyebrows"];
const houses = ["bungalow","place","house","cottage","apartment","condominium","mansion","bedroom","luau","sauna","bar","kitchen","brothel","basement","rumpus room","porch","yacht","clock tower","castle","palace","dirt hole","cave"];
const gexBeginnings = ["I haven't felt this ","I haven't felt this ","This reminds me of ","Reminds me of ","This reminds me of ","Reminds me of ","Note to self: ","And remember, kids: ","It's tail time!","Captain, they are a bizzare alien race that find "];
const banned = ['sex','torture','have sex with','hungover','pregnant','STD','semen'];
const comedians = ["Trevor Noah","Jerry Seinfeld","John Oliver","Chris Rock","Jordan Peele","Keegan Michael Key","Amy Poehler","Tina Fe","Kate McKinnon","Colin Jost","Michael Che","Eddy Murphy","Steve Martin","Melissa McCarthy","Conan O'Brien","Jimmy Fallon","John Stewart","Jimmy Kimmel","James Corden","Pete Davidson"];

function printGex() {
		let rating = "r";
		let sendThis = "";
		let currentStructure = Math.floor(Math.random()*gexBeginnings.length);
		let currentStart = gexBeginnings[currentStructure];
		let currentVerb = gexVerbs[Math.floor(Math.random()*gexVerbs.length)];
		if (rating=='pg') {
			while (banned.includes(currentVerb)) {
				currentVerb = gexVerbs[Math.floor(Math.random()*gexVerbs.length)];
			}
		}
		if (currentStructure < 2) { //i haven't felt this...
			sendThis = currentStart.concat(gexFeelings[Math.floor(Math.random()*gexFeelings.length)] + " since " + currentVerb + " at " + celebs[Math.floor(Math.random()*celebs.length)] + "'s " + houses[Math.floor(Math.random() * houses.length)] + "!");
		} else if (currentStructure < 6) { //reminds me of...
			sendThis = currentStart.concat(gexVerbs[Math.floor(Math.random()*gexVerbs.length)] + " at " + celebs[Math.floor(Math.random()*celebs.length)] + "'s " + houses[Math.floor(Math.random() * houses.length)] + "!");
		} else if (currentStructure==6 || currentStructure==7) {
			if (Math.floor(Math.random()*3) == 0) {
				sendThis = currentStart.concat(gexCommands[Math.floor(Math.random()*gexCommands.length)] + " at " + celebs[Math.floor(Math.random()*celebs.length)] + "'s!");
			} else {
				sendThis = currentStart.concat("don't " + gexCommands[Math.floor(Math.random()*gexCommands.length)] + " at " + celebs[Math.floor(Math.random()*celebs.length)] + "'s!");
			}
		} else if (currentStructure == 8) {
			if (Math.floor(Math.random()*3) == 0) {
				sendThis = "Now *that's* what I call gettin' some tail!";
			} else {
				sendThis = currentStart;
			}
		} else if (currentStructure == 9) {
			sendThis = currentStart.concat(comedians[Math.floor(Math.random()*comedians.length)]+" funny.");
		}
		document.getElementById("output").innerHTML = sendThis;
	}
