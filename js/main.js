var currentCategory;
currentCategory = conor;


function load() {
	console.log("load called");
	document.getElementById('quote').innerHTML = conor.quote;
	document.getElementById('author').innerHTML = conor.author;
	document.getElementById('image-behind').src = conor.authorImg;
}

function conorQuotes () {
	console.log("conor clicked");
}

function changeDis() {
	console.log("kanye clicked");
}