
var message = {
	"content":"",
	"duration":0,
	"tick":0
};

function setMessage(content,duration) {
	message.content = content;
	message.duration = duration * framerate;
	message.tick = 0;
}

function messageTick() {
	if (message.content == "") {
		return;
	}
	if (message.tick == message.duration) {
		message.content = "";
	} else {
		message.tick++;
	}
	document.getElementById("message").innerHTML = message.content;
}

