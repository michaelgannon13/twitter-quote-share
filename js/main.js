var currentCategory;
currentCategory = conor;

$(document).ready(function() {
	$(document).keydown(function(e) {
	  if (e.keyCode == '32') {
		alert('space');
	  }
	});
  });
  
function load() {
	console.log("load called");
	document.getElementById('quote').innerHTML = conor.quote;
	document.getElementById('author').innerHTML = conor.author;
	document.getElementById('image-behind').src = conor.authorImg;
}