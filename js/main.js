var counter;
var authorImage = $('#image-behind');
var authorQuote = $('#quote');
var authorName = $('#author');
var quoteHolder;
var authorHolder;
var createTweetBtn = document.createElement('a');
var tweetIcon = document.createElement('i');
var linkText = document.createTextNode("Tweet");

function onload() {
	counter = 0;
	currentPerson = motivation;
	nextQuote();
	createTweetBtn.className = "twitter-share-button";
	createTweetBtn.appendChild(linkText);
	document.getElementById("tweet-button-container").appendChild(createTweetBtn);
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



function checkQuote(category) {
	switch (category) {
		case 'motivation':
		currentPerson = [];
		currentPerson.push(motivation);
		console.log(currentPerson);
		break;
		case 'serenity':
		currentPerson = [];		
		currentPerson.push(serenity);		
		console.log(currentPerson);		
		break;	
		case 'courage':
		currentPerson = [];		
		currentPerson.push(courage);	
		console.log(currentPerson);				
		break;	
		case 'inspiration':
		currentPerson = [];		
		currentPerson.push(inspiration);
		console.log(currentPerson);				
		break;	
	}
	nextQuote();
}

function updateURL() {
	createTweetBtn.href = "https://twitter.com/intent/tweet?text=" + quoteHolder + " - " + authorHolder;
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

		updateURL();

		fadeIn();
		counter++;
	} else {
		counter = 0;
		nextQuote();
	}
}



