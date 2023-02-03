document.getElementById("output").innerHTML = "booted JavaScript successfully";

function addItems(content,contentList) { //prints results
	document.getElementById("output").innerHTML = content;
	//document.getElementById("output2").innerHTML = contentList;
	/*
	for (let i=0;i<contentList.length,i++) {
		const row = document.createElement("tr");
		const node = document.createTextNode(content);
		row.appendChild(node);
		const element = document.getElementById("div1");
	}
	*/
}


function generatePossibilities(original) {
	const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let encrypted = original.inputbox.value;
	
	let decrypted = "";
	let decryptedList = [];
	for (let offset = 0; offset < 26; offset++) {
		decrypted += offset + ": ";
		//decryptedList.append("");
		for (let i = 0; i < encrypted.length;i++) {
			decrypted += alphabet[alphabet.indexOf(encrypted[i]) + offset];
			//decryptedList[decryptedList.length - 1] += alphabet[alphabet.indexOf(encrypted[i]) + offset];
		}
		decrypted += " ";
	}
	addItems(decrypted,decryptedList);
	
}
