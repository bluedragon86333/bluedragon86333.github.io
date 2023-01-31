document.getElementById("output").innerHTML = "booted JavaScript successfully";

function generatePossibilities(original) {
	const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let encrypted = original.inputbox.value;
	let decrypted = "";
	for (let offset = 0; offset < 26; offset++) {
		decrypted += offset + ": ";
		for (let i = 0; i < encrypted.length;i++) {
			decrypted += alphabet[alphabet.indexOf(encrypted[i]) + offset];	
		}
		decrypted += " ";
	}
	document.getElementById("output").innerHTML = decrypted;
}
