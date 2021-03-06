var counter;
var authorImage = $('#image-behind');
var authorQuote = $('#quote');
var authorName = $('#author');
var quoteHolder;
var authorHolder;
var createTweetBtn = document.createElement('a');
var tweetIcon = document.createElement('i');
var linkText = document.createTextNode(" Tweet");

function onload() {
	counter = 0;
	currentPerson = motivation;
	nextQuote();
	createTweetBtn.className = "twitter-share-button";
	tweetIcon.className = "fa fa-twitter";
	createTweetBtn.appendChild(linkText);
	createTweetBtn.prepend(tweetIcon);    
	document.getElementById("tweet-button-container").appendChild(createTweetBtn);
}

window.onkeydown = function (e) {
	if (e.keyCode === 32) {
		e.preventDefault();
		nextQuote();
	}
};

function resetCounter() {
	counter = 0;
}

function loadMotivation() {
	currentPerson = motivation;
	resetCounter();
	nextQuote();
}

function loadSerenity() {
	currentPerson = serenity;
	resetCounter();	
	nextQuote();
}

function loadCourage() {
	currentPerson = courage;
	resetCounter();	
	nextQuote();
}

function loadInspiration() {
	currentPerson = inspiration;
	resetCounter();	
	nextQuote();
}

function loadCompassion() {
	currentPerson = compassion;
	resetCounter();	
	nextQuote();
}

function loadJoy() {
	currentPerson = joy;
	resetCounter();
	nextQuote();
}


function updateURL() { 
	createTweetBtn.href = "https://twitter.com/intent/tweet?text=" + quoteHolder + " - " + authorHolder;
}

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

function nextQuote() {
	if (counter !== currentPerson.length) {
		fadeOut();
		authorName.text(currentPerson[counter].author);
		authorQuote.text(currentPerson[counter].quote);
		authorImage.attr("src", currentPerson[counter].authorImg);
		fadeIn();
		
		authorHolder = currentPerson[counter].author;
		quoteHolder = currentPerson[counter].quote;
		updateURL();

		counter++;
	} else {
		counter = 0;
		nextQuote();
	}
}



