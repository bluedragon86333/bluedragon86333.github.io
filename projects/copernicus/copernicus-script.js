var letters = [];


function swapLetters(index1,index2) {
	let i1 = letters[index1];
	let i2 = letters[index2];
	letters[index1] = i2;
	letters[index2] = i1;
}

function scramble(content) {
	letters = [];
	for (let i=0;i<content.length;i++) {
		letters.push(content.charAt(i));
	}
	for (let i<0;i<content.length;i++) {
	
	}
}
