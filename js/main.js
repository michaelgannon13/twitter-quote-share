var counter = 0;

function loadConor() {	
	currentPerson = conor;
}

function loadKanye() {	
	currentPerson = kanye;
}

function nextQuote() {
	if (counter !== currentPerson.length) {
		counter++;
		document.getElementById('author').innerHTML = currentPerson[counter].author;
		document.getElementById('quote').innerHTML = currentPerson[counter].quote;
		document.getElementById('image-behind').src = currentPerson[counter].authorImg;
	} else {
		counter = 0;
	}
}