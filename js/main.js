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

function fade() {
	$('#image-behind').css("opacity", "0");
	$('#image-behind').css('opacity', .2).fadeIn("slow");
}

function nextQuote() {
	if (counter !== currentPerson.length) {
		fade();
		counter++;
		document.getElementById('author').innerHTML = currentPerson[counter].author;
		document.getElementById('quote').innerHTML = currentPerson[counter].quote;
		document.getElementById('image-behind').src = currentPerson[counter].authorImg;
	} else {
		counter = 0;
	}
}