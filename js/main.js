var counter;
var authorImage = $('#image-behind');
var authorQuote = $('#quote');
var authorName = $('#author');
var testString = "it works";
var quoteHolder;
var authorHolder;

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
	authorImage.fadeTo('slow', 0.2);
	authorQuote.fadeTo('slow', 1);
	authorName.fadeTo('slow', 1);
}

function fadeOut() {
	authorImage.css('opacity', 0);
	authorQuote.css('opacity', 0);
	authorName.css('opacity', 0);
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
		authorName.text(currentPerson[counter].author);
		authorQuote.text(currentPerson[counter].quote);
		authorImage.attr("src", currentPerson[counter].authorImg);

		authorHolder = currentPerson[counter].author;
		quoteHolder = currentPerson[counter].quote;

		console.log("authorHolder = " + authorHolder);
		console.log("quoteHolder = " + quoteHolder);

		var a = document.createElement('a');
		var linkText = document.createTextNode("Tweet");
		a.appendChild(linkText);
		a.class = "twitter-share-button";
		a.href = "https://twitter.com/intent/tweet?text=" + quoteHolder + " - " + authorHolder;
		document.body.appendChild(a);

		fadeIn();
		counter++;
	} else {
		counter = 0;
		nextQuote();
	}
}



