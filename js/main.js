var counter = 0;

function loadConor() {
	if (counter !== conor.length) {
		counter++;
		document.getElementById('author').innerHTML = conor[counter].author;
		document.getElementById('quote').innerHTML = conor[counter].quote;
		document.getElementById('image-behind').src = conor[counter].authorImg;
	} else {
		counter = 0;
	}
}