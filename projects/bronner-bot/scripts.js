const celebs = ["Gerard Way","Cristine Rotenberg","Joe Biden","Millie Bobby Brown","RuPaul","Paul McCartney","Billie Joe Armstrong","Chris Pratt","Scott Wozniak","Charles Martinet","Freddie Mercury","Frank Iero","Scott Fitzgerald","Shigeru Miyamoto","my mother","SmallAnt","Trevor Noah","John Oliver","Jungkook","Johnny Depp","Jack Black","Obama","Huey Newton","Bob Bryar","Kate McKinnon","your mom","Taylor Swift","Katy Perry","Eiji Aonuma","Samantha Kelly","Finn Wolfhard","Jay Baruchel","Stephen Colbert","Lena Raine","Christopher Larkin","Angie Thomas","Bob Dylan","Rick Riordan","Cressida Cowell","Eric Burdon","Dr. Seuss","Jack White","Jacob Tobia","Big Ben"];
const gexVerbs = ["surfing the web","Halloween","hunting rabbits","fighting rhinos","Easter","Passover","Christmas","eating chips","playing Minecraft","sex","ice hockey","Jumanji","darts","date night","fishing","bathing","organizing the Tupperware","torture","drilling holes","home demolition","watching Pinocchio","filling holes","fixing the drain","doing laundry","breaking dishes","blowing glass","dispensing Tabasco","getting dressed","plucking eyebrows","vaccuming the garage","watering the plants","using the restroom","fermenting honey","fermenting cereal","drinking Jamba Juice","plugging in the fridge","standing on the fridge","petting the dogs","watching paint dry","brushing the horses","getting canceled on Twitter","binge watching Netflix while crying into a tub of ice cream","playing foosball","buying Gerard Way Funko Pops","watching American Idol","doing pilates"];
const gexFeelings = ["depressed","elated","happy","triggered","angry","bored","irritated","proud","scared","worried","satisfied","awful","tired","disappointed","flaccid","accomplished","short","contemplative","just the worst","sedated","synthesized"];
const locationPrefs = ["at","on","in"];
const gexCommands = ["ferment cereal","water the plants","drink tap water","use the restroom","dispense Tabasco sauce","plug in the fridge","fight rhinos","eat chips","get dressed","pluck eyebrows"];
const houses = ["bungalow","place","house","cottage","apartment","condominium","mansion","bedroom","luau","sauna","bar","kitchen","brothel","basement","rumpus room","porch","yacht","clock tower","castle","palace","dirt hole","cave"];
const gexBeginnings = ["I haven't felt this ","I haven't felt this ","This reminds me of ","Reminds me of ","This reminds me of ","Reminds me of ","Note to self: ","And remember, kids: ","It's tail time!","Captain, they are a bizzare alien race that find "];
const banned = ['sex','torture','have sex with','hungover','pregnant','STD','semen'];
const comedians = ["Trevor Noah","Jerry Seinfeld","John Oliver","Chris Rock","Jordan Peele","Keegan Michael Key","Amy Poehler","Tina Fe","Kate McKinnon","Colin Jost","Michael Che","Eddy Murphy","Steve Martin","Melissa McCarthy","Conan O'Brien","Jimmy Fallon","John Stewart","Jimmy Kimmel","James Corden","Pete Davidson"];

const includePairs = [["choo","bless you"],["jesus","What about him?"],["cool","Cool?! Don\'t you mean FIERY HOT PEPPER SAUCE????:fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: "],["hk","I like Hollow Knight, but I think Full Knight is better"],["hollow knight","Full Knight better"],["good bot","aww thanks! *sharpens sex knives*"],["bad bot","who asked you?"],["lol","Ain't it fun?"],["burn","oh-oh-oh-oh, my love is on fire (whoo)"],["frog","TOAD"]];
const dmPairs = [["","I'm so sorry. So, so, so, so, so, so, sorry."],["lol","do you think this is fucking funny?"],["lmao","I wish you hadn't done that."],["cool","https://i.pinimg.com/originals/22/0c/88/220c88254e6f1371d68ee70d6a265bad.jpg"],["why","WHY FUCKING NOT HAHAHAHAHAHA"],["ok","WHAT WILL IT TAKE TO SHOW YOU THAT IT'S NOT THE LIFE IT SEEMS?"],["your mom","YOUR MOM"],["omg","See what you've done?"]];

const provBeginnings = ["If you ","If you ","When in doubt, use ","When in doubt, consult a ","Feeling ","When in doubt, consult a "];
const provPassives = ["burned","highly bred","bitten","scorned","eaten","buried","married","killed","succeeded","preceded","elected","demoted","promoted","synthesized","ogged"];
const provVerbs = ["burn","cut","have sex with","fumigate","watch","drive","walk on","stare at","flambe","refrigerate","wear","stab","beat up","laugh at","sing about","dance around","accept","flash"];
const provEvents = ["apocalypse","hangover","STD"];
const provNouns = ["cow","pig","living room","handsome elderly bachelor","sock","face mask","log","tree","metal band mascot","seventh son of a seventh son","Homecoming Queen","marriage proposal"];
const provSubstances = ["ketchup","baking soda","olive oil","semen","grass","soil","string","yarn","paint","paper","cardboard","chunks","lubricant","gunpowder"];

	
	//const channel = client.channels.cache.get('id');
	const channels = ["991375239151894649","841296555188289556"];
	let channel = client.channels.cache.get('id');// //set channel
	let toSend = "placeholder text";
	const fs = require('fs')
	
	function sendMessage(content) {
    
    }
	
	
	
	
	
	
	
	function printGex(recipient,rating) {
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
		return sendThis;
	}
	
	function printProverb(rating) {
		let sendThis = "";
		let currentStructure = Math.floor(Math.random() * provBeginnings.length);
		let currentStart = provBeginnings[currentStructure];
		let currentVerb = provVerbs[Math.floor(Math.random()*provVerbs.length)];
		let currentPassive = provPassives[Math.floor(Math.random()*provPassives.length)];
		let currentNoun = provNouns[Math.floor(Math.random() * provNouns.length)];
		let currentEvent = provEvents[Math.floor(Math.random() * provEvents.length)];
		let currentAmt = "more";
		let isLiving = "";
		let currentSubstance = provSubstances[Math.floor(Math.random() * provSubstances.length)];
		
		
		if (Math.random() > 0.5) {
			currentAmt = "less";
		}
		if (Math.random() > 0.5) {
			isLiving = "live";
		}
		
		//SET RATING
		if (rating=='pg') {
			while (banned.includes(currentVerb)) {
				currentVerb = provVerbs[Math.floor(Math.random()*verbs.length)];
			}
			while (banned.includes(currentPassive)) {
				currentPassive = provPassives[Math.floor(Math.random() * provPassives.length)];
			}
			while (banned.includes(currentSubstance)) {
				currentSubstance = provSubstances[Math.floor(Math.random() * provSubstances.length)];
			}
		}
		
		//SET PROPER ARTICLES
		let vowels = "aeiou";
		if (vowels.includes(currentNoun[0])) {
			currentNoun = " an " + currentNoun;
		} else {
			currentNoun = " a " + currentNoun;
		}
		if (vowels.includes(currentEvent[0])) {
			currentEvent = " an " + currentEvent;
		} else {
			currentEvent = " a " + currentEvent;
		}
		
		
		if (currentStructure == 0) {
			sendThis = currentStart.concat(currentVerb + currentNoun + ", expect to be " + currentPassive);
			if (Math.random() > 0.5) {
				sendThis += " alive";
			}
			sendThis = sendThis + ".";
		} else if (currentStructure == 1) {
			sendThis = currentStart.concat(currentVerb + currentNoun + ", expect" + currentEvent + ".");
			
		} else if (currentStructure == 2) {
			sendThis = currentStart.concat(currentAmt + " " + currentSubstance + ".");
		} else if (currentStructure == 3) {
			let splitted = currentNoun.split(' ');
			currentNoun = splitted[2];
			sendThis = currentStart.concat(isLiving + currentNoun + ".");
		} else if (currentStructure == 4) {
			sendThis = currentStart.concat(gexFeelings[Math.floor(Math.random() * gexFeelings.length)] + "? Try " + gexVerbs[Math.floor(Math.random()*gexVerbs.length)] + "! 	");
		} else if (currentStructure == 5) {
			let splitted = currentNoun.split(' ');
			currentNoun = splitted[2];
			if (splitted.length > 3) {
				currentNoun += " " + splitted[3];
			}
			sendThis = currentStart.concat(isLiving + " " + currentNoun + " who is better " + currentPassive + ".");
		}
		return sendThis;
	}
