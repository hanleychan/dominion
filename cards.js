// Dominion base set cards
var cardList=["Adventurer", 
	"Black Market",
	"Bureaucrat", 
	"Cellar",
	"Chancellor", 
	"Chapel", 
	"Council Room",
	"Envoy",
	"Feast", 
	"Festival",
	"Gardens",
	"Laboratory",
	"Library",
	"Market",
	"Militia",
	"Mine",
	"Moat",
	"Moneylender",
	"Remodel",
	"Smithy",
	"Spy",
	"Thief",
	"Throne Room",
	"Village",
	"Witch",
	"Woodcutter",
	"Workshop"];

var cardCost=new Array();
cardCost["Adventurer"]=6;
cardCost["Black Market"]=3;
cardCost["Bureaucrat"]=4;
cardCost["Cellar"]=2;
cardCost["Chancellor"]=3;
cardCost["Chapel"]=2;
cardCost["Council Room"]=5;
cardCost["Envoy"]=4;
cardCost["Feast"]=4;
cardCost["Festival"]=5;
cardCost["Gardens"]=4;
cardCost["Laboratory"]=5;
cardCost["Library"]=5;
cardCost["Market"]=5;
cardCost["Militia"]=4;
cardCost["Mine"]=5;
cardCost["Moat"]=2;
cardCost["Moneylender"]=4;
cardCost["Remodel"]=4;
cardCost["Smithy"]=4;
cardCost["Spy"]=4;
cardCost["Thief"]=4;
cardCost["Throne Room"]=4;
cardCost["Village"]=3;
cardCost["Witch"]=5;
cardCost["Woodcutter"]=3;
cardCost["Workshop"]=3;

var cardDescription=new Array();
cardDescription["Adventurer"]="Reveal cards from your deck until you reveal 2 Treasure cards.  Put those Treasure cards into your hand and discard the other revealed cards.";
cardDescription["Black Market"]="+2 Coins<br /><br />Reveal the top 3 cards of the Black Market deck.  You may buy one of them immediately.  Put the unbought cards on the bottom of the Black Market deck in any order.<br /><br />(Before the game, make a Black Market deck out of one copy of each Kingdom card not in the supply.)";
cardDescription["Bureaucrat"]="Gain a Silver card; put it on top of your deck.  Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards).";
cardDescription["Cellar"]="+1 Action<br /><br />Discard any number of cards.  +1 Card per card discarded.";
cardDescription["Chancellor"]="+2 Coins<br /><br />You may immediately put your deck into your discard pile.";
cardDescription["Chapel"]="Trash up to 4 cards from your hand.";
cardDescription["Council Room"]="+4 Cards<br />+1 Buy<br /><br />Each other player draws a card.";
cardDescription["Envoy"]="Reveal the top 5 cards of your deck.  The player to your left chooses one for you to discard.  Draw the rest.";
cardDescription["Feast"]="Trash this card.  Gain a card costing up to 5 Coins.";
cardDescription["Festival"]="+2 Actions<br />+1 Buy<br />+2 Coins.";
cardDescription["Gardens"]="Worth 1 Victory Point for every 10 cards in your deck (rounded down).";
cardDescription["Laboratory"]="+2 Cards<br />+1 Action";
cardDescription["Library"]="Draw until you have 7 cards in hand.  You may set aside any Action cards drawn this way, as you draw them; discard the set aside cards after you finish drawing.";
cardDescription["Market"]="+1 Card<br />+1 Action<br />+1 Buy<br />+1 Coin";
cardDescription["Militia"]="+2 Coins<br /><br />Each other player discards down to 3 cards in his hand.";
cardDescription["Mine"]="Trash a Treasure card from your hand.  Gain a Treasure card costing up to 3 Coins more; put it into your hand.";
cardDescription["Moat"]="+2 Cards<br /><br />When another player plays an Attack card, you may reveal this card from your hand.  If you do, you are unaffected by that Attack.";
cardDescription["Moneylender"]="Trash a Copper card from your hand.  If you do, +3 Coins.";
cardDescription["Remodel"]="Trash a card from your hand.  Gain a card costing up to 2 Coins more than the trashed card.";
cardDescription["Smithy"]="+3 Cards";
cardDescription["Spy"]="+1 Card<br />+1 Action<br /><br />Each player (including you) reveals the top card of his deck and either discards it or puts it back, your choice.";
cardDescription["Thief"]="Each other player reveals the top 2 cards of his deck.  If they revealed any Treasure cards, they trash one of them that you choose.  You may gain any or all of these trashed cards.  They discard the other revealed cards.";
cardDescription["Throne Room"]="Choose an Action card in your hand.  Play it twice.";
cardDescription["Village"]="+1 Card<br />+2 Actions";
cardDescription["Witch"]="+2 Cards<br /><br />Each other player gains a Curse card.";
cardDescription["Woodcutter"]="+1 Buy<br />+2 Coins";
cardDescription["Workshop"]="Gain a card costing up to 4 Coins.";


// generates numCards random cards
function randomCards(numCards) {
	var drawnCards=new Array();
	for(var ii=0;ii<numCards;ii++) {
		do {
			var randomNumber=Math.floor(Math.random() * (cardList.length-1));
			drawnCards[ii]=cardList[randomNumber];
			
			// check if card was already drawn
			var validCard=true;
			for(var jj=0;jj<ii;jj++) {
				if(drawnCards[jj]==drawnCards[ii]) {
					validCard=false;
					break;
				}
			}
		} while(validCard==false);
	}

	// sort cards by name
	drawnCards=drawnCards.sort();

	return drawnCards;
}

function displayCards(cardArray) {
	for(var ii=0;ii < cardArray.length;ii++)
		document.write("<span onclick=\"showDetails('" + cardArray[ii] + "')\">" + cardArray[ii] +"</span><br />");
}

function update(numCards) {
	var newDrawnCards=randomCards(numCards);
	document.getElementById('cards').innerHTML="";
	for(var ii=0;ii < numCards;ii++)
		document.getElementById('cards').innerHTML=document.getElementById('cards').innerHTML + "<span onclick=\"showDetails('" + newDrawnCards[ii] + "')\">" + newDrawnCards[ii] + "</span><br />";
}


function showDetails(cardName) {
	document.getElementById('cardDescription').innerHTML=cardName + "<br />";
	document.getElementById('cardDescription').innerHTML=document.getElementById('cardDescription').innerHTML + "Cost: " + cardCost[cardName] + "<br /><br />";
	document.getElementById('cardDescription').innerHTML=document.getElementById('cardDescription').innerHTML + cardDescription[cardName];
}
