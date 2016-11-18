var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

/*
if (cardOne == cardThree) {
	console.log("You found a match!");
}
else {
	console.log("Sorry, try again.");
}
*/

var cardElement;

var gameBoard = document.getElementById('game-board');

var createEverything = function() {
	for (var i = 0; i < 4; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);

		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
}

var isMatch = function(cardsInPlay) {

	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("You have made a match!");
	}
	else if (cardsInPlay[0] != cardsInPlay[1]) {
		alert("Sorry try again.");
	}

	cardsInPlay = [];
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') == "king") {
		console.log("it's a king");
		this.innerHTML = '<img src="king1.png"/>';
	}
	else if (this.getAttribute('data-card') == "queen") {
		console.log("it's a queen");
		this.innerHTML = '<img src="queen1.png"/>';
	}
	else {
		console.log("idk");
	}

	
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		
	}
}

createEverything();

