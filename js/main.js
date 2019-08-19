let cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png" 
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png" 
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png" 
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png" 
}
];

// shuffle cards
cards.sort(function(a, b){return 0.5 - Math.random()});
// out
// console.log(cards);

let cardsInPlay =[];
let cardsInPlayId =[];

function checkForMatch(cardId){
 if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
	}

alert("Click OK to play again.");
window.location.reload();
}

function flipCard (){
	let cardId = this.getAttribute('data-id');
// check if same card has been picked already
if (cardsInPlayId[0] === cards[cardId]){
alert("You need to pick a new card.");
return;
}
	cardsInPlayId.push(cards[cardId]);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped" + cards[cardId].rank);
	console.log("User flipped" + cards[cardId].suit);
	console.log("User flipped" + cards[cardId].cardImage);
if (cardsInPlay.length > 1) {
checkForMatch(cardId);
}

}

let createBoard = function (){
for (let i = 0; i < cards.length; i++) {
	let cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();
