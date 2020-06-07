var Stack = require("./stack.js")
    
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A","Joker"]




class Card{

    constructor(suit,value){
	this.card_suit=suit;
	this.card_value=value;
    }

    get card(){
	return this.whoami()
    }

    get value(){
    	return this.card_value;
    }

    get suit(){
	return this.card_suit;
    }

    
    whoami(){
	console.log(this.card_value+" of " + this.card_suit) 
    }


}


class Deck{
    constructor(){
	this.deck = new Stack()
	for (var i = 0; i < suits.length;i++){
	    for (var j = 0 ; j<values.length-1;j++){
		this.deck.push((new Card(suits[i],values[j])));
	    }
	}
	this.deck.push((new Card("Red","Joker")));
	this.deck.push((new Card("Black","Joker")));
	this.shuffle;
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

    shuffle_deck(){
	for (var i = 0; i < 10000; i++){
	    var fst = Math.floor((Math.random() * 54));
	    var scd = Math.floor((Math.random() * 54));
	    while (scd == fst){
		scd = Math.floor((Math.random() * 54));
	    }
	    var tmp = this.deck.data[fst];
	    this.deck.data[fst] = this.deck.data[scd];
	    this.deck.data[scd] = tmp;
	}
	
    }
}


module.exports = {Card, Deck}
