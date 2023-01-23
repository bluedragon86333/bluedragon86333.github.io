const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
document.getElementById("output").innerHTML = "booted JavaScript successfully";

function generatePossibilities(original) {
	let encrypted = original;
	let decrypted = "";
	for (let offset = 0; offset < 25; offset++) {
		for (let i = 0; i < encrypted.length;i++) {
			decrypted += alphabet[alphabet.indexOf(encrypted[i]) + offset];	
		}
	}
	document.getElementById("output").innerHTML = decrypted;
}
