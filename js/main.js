var counter = 0;

window.onkeydown = function (e) {
	if (e.keyCode === 32) {
		e.preventDefault();
		if (counter == currentPerson.length) {
			counter = 0;
		}
		nextQuote();
	}
};


function loadConor() {
	currentPerson = conor;
}

function loadKanye() {
	currentPerson = kanye;
}

function nextQuote() {
	counter++;
	document.getElementById('author').innerHTML = currentPerson[counter].author;
	document.getElementById('quote').innerHTML = currentPerson[counter].quote;
	document.getElementById('image-behind').src = currentPerson[counter].authorImg;
}