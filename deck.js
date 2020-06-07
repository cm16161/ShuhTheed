var Hand = require("./hand.js")

const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A","Joker"]


class Stack{
    constructor(){
	this.data = [];
	this.top = 0;
    }

    get length(){
	return this.top;
    }

    get peek(){
	return this.data[this.top-1];
    }

    get isEmpty(){
	return this.top === 0;
    }

    get pop(){
	if (this.isEmpty === false){
	    this.top = this.top -1;
	    return this.data.pop();	    
	}
    }


    get print(){
	for(var i = this.top-1; i >= 0;i--){
	    console.log(this.data[i]);
	}
    }

    push(element){
	this.data[this.top] = element;
	this.top = this.top+1;
    }
    
}

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

class GamePile{
    constructor(){
	this.pile = new Stack()
    }
    get burn(){
	while ( this.pile.isEmpty === false){
	    this.pile.pop
	}
    }

    play(card){
	this.pile.push(card);
    }

    claim(hand){
	while (this.pile.isEmpty === false){
	    hand.pick_up(this.pile.pop)
	}
    }

    get length(){
	return this.pile.length;
    }
}



function main(){
    var deck = new Deck();
    var game_pile = new GamePile();
    game_pile.play(new Card("Diamond","2"))
    game_pile.play(new Card("Diamond","J"))
    game_pile.play(new Card("Diamond","Q"))
    game_pile.play(new Card("Diamond","K"))
    game_pile.play(new Card("Diamond","Joker"))
    game_pile.play(new Card("Diamond","10"))
    game_pile.play(new Card("Diamond","3"))
    game_pile.play(new Card("Diamond","4"))
    game_pile.play(new Card("Diamond","5"))

    var ellie = new Hand();
    game_pile.claim(ellie);
    ellie.sort
    ellie.print()
}

////////////////////////////////////////////////////////////

main()
