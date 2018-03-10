var counter;

function onload() {
	counter = 0;
	currentPerson = conor;
	nextQuote();
}

window.onkeydown = function (e) {
	if (e.keyCode === 32) {
		e.preventDefault();
		nextQuote();
	}
};


function loadConor() {
	currentPerson = conor;
	nextQuote();
}

function loadKanye() {
	currentPerson = kanye;
	nextQuote();	
}

function nextQuote() {
	if (counter !== currentPerson.length) {
		console.log("counter is = " + counter + " currentPerson length is " + currentPerson.length);
		document.getElementById('author').innerHTML = currentPerson[counter].author;
		document.getElementById('quote').innerHTML = currentPerson[counter].quote;
		document.getElementById('image-behind').src = currentPerson[counter].authorImg;
		counter++;
	} else {
		counter = 0;
		nextQuote();
	}
}