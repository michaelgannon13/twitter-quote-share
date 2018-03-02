function load() {
	console.log("load called");
	document.getElementById('quote').innerHTML = conor.quote;
	document.getElementById('author').innerHTML = conor.author;
	document.getElementById('image-behind').src = conor.authorImg;
}

function conorQuotes() {
	console.log("conor clicked");
}

function changeDis() {
	console.log("kanye clicked");
}

function loadCon() {
	for (i = 0; i < conor.length; i++) {
		console.log(i);
		document.getElementById('quote').innerHTML = conor[i].quote[i];
		document.getElementById('author').innerHTML = conor[i].author[i];
		document.getElementById('image-behind').src = conor[i].authorImg[i];
	}
}