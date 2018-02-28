window.twttr = (function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
		t = window.twttr || {};
	if (d.getElementById(id)) return t;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js, fjs);

	t._e = [];
	t.ready = function (f) {
		t._e.push(f);
	};

	return t;
}(document, "script", "twitter-wjs"));

var quotes = [
	"'Doubt is removed by action'",
	"'My Success isn’t the result of arrogance, it’s the result of belief'",
	"'Talent does not exist, we are all equal as human beings'",
	"'The more you seek the uncomfortable, the more you will become comfortable'",
	"'What you think you become'"
];

var authors = ["Conor McGregor", "Conor McGregor", "Conor McGregor", "Conor McGregor", "Buddha"];
var pics = ["conor.jpg", "conor2.jpeg", "conor3.jpg", "conor.jpg", "buddha.jpg"];

var mot = ["'There's only one thing that's impossible, and that's to beat a man who doesn't give up'", "'It's OK to be the greatest you'", "'The main thing people are controlled by is their perceptions of themselves'", "'Believe in your flyness, conquer your shyness'", "'Shoot for the stars, so if you fall you land on a cloud'"];
var motAuthors = ["Conor McGregor", "Kanye West", "Kanye West", "Kanye West", "Kanye West"];
var motPics = ["conor.jpg", "kanye1.png", "kanye2.png", "kanye3.jpg", "kanye4.jpg"];

var dis = ["'Discipline is the bridge between goals and accomplishment'", "'It's ok to be the greatest you'", "'The main thing people are controlled by is their perceptions of themselves'", "'Believe in your flyness, conquer your shyness'", "'Shoot for the stars, so if you fall you land on a cloud'"];
var disAuthors = ["Jim Rohn", "Kanye West", "Kanye West", "Kanye West", "Kanye West"];
var disPics = ["conor.jpg", "kanye1.png", "kanye2.png", "kanye3.jpg", "kanye4.jpg"];


var counter = 0;
var check = 0;

function fade() {
	// set opacity to 0
	// slowly fade in
}

window.onkeydown = function (e) {

	if (e.keyCode === 32) {
		fade();
		e.preventDefault();
		counter++;

		if (counter == quotes.length || counter == authors.length || counter == pics.length || counter == mot.length) {
			counter = 0;
		}
		load();

	}
};

function load() {
	if (check == 1) {
		document.getElementById('quote').innerHTML = mot[counter];
		document.getElementById('author').innerHTML = motAuthors[counter];
		document.getElementById('image-behind').src = "img/" + motPics[counter];

	} else if (check == 2) {
		document.getElementById('quote').innerHTML = dis[counter];
		document.getElementById('author').innerHTML = disAuthors[counter];
		document.getElementById('image-behind').src = "img/" + disPics[counter];

	} else {
		document.getElementById('quote').innerHTML = quotes[counter];
		document.getElementById('author').innerHTML = authors[counter];
		document.getElementById('image-behind').src = "img/" + pics[counter];
	}

};

function changeMot() {
	check = 1;
	load();
};

function changeDis() {
	check = 2;
	load();
};

function reset() {
	check = 0;
	load();
};