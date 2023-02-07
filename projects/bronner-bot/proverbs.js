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
