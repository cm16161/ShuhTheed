var Stack = require("./stack.js")
    
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A","Joker"]
const CARD_STATE = Object.freeze({"PUBLIC":0, "PRIVATE":1,"HIDDEN":2});



class Card{

    constructor(suit,value){
	this.value=value;
	this.suit=suit;
	this.see = CARD_STATE.HIDDEN;

    }

    get card(){
		return this.whoami()
    }

    get getValue(){
    	return this.value;
    }

    get getSuit(){
		return this.suit;
    }

    
    whoami(){
		console.log(this.card_value+" of " + this.card_suit) 
    }


}


class Deck{

    shuffle_deck(){
	for (var i = 0; i < 10000; i++){
	    var fst = Math.floor((Math.random() * this.deck.length));
	    var scd = Math.floor((Math.random() * this.deck.length));
	    while (scd == fst){
			scd = Math.floor((Math.random() * this.deck.length));
	    }
	    var tmp = this.deck.data[fst];
	    this.deck.data[fst] = this.deck.data[scd];
	    this.deck.data[scd] = tmp;
	}
	
    }
    
    constructor(n_decks = 1){
	this.deck = new Stack()
	for (var d = 0; d < n_decks; d++){
	    for (var i = 0; i < suits.length; i++){
			for (var j = 0; j< values.length-1; j++){
		    	this.deck.push((new Card(suits[i],values[j])));
			}
	    }
	    this.deck.push((new Card("Red","Joker")));
	    this.deck.push((new Card("Black","Joker")));
	}
	this.shuffle_deck();
    }

    get print(){
		for(var i in this.deck.data){
			this.deck.data[i].card;
		}
    }

    get shuffle(){
		this.shuffle_deck();
    }

    get length(){
		return this.deck.length
    }

    get pop(){
		return this.deck.pop
    }

}


module.exports = [{Card, Deck},CARD_STATE]

