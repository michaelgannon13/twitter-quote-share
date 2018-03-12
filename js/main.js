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

function fadeIn() {
	$('#image-behind').fadeTo('slow', 0.2);
}

function fadeOut() {
	$('#image-behind').css('opacity', 0);
}

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
		fadeOut();		
		document.getElementById('author').innerHTML = currentPerson[counter].author;
		document.getElementById('quote').innerHTML = currentPerson[counter].quote;
		document.getElementById('image-behind').src = currentPerson[counter].authorImg;
		fadeIn();
		counter++;
	} else {
		counter = 0;
		nextQuote();
	}
}