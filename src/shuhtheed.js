var {Card, Deck} = require("./deck.js")
var Hand = require("./hand.js")
var Stack = require("./stack.js")

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
    game_pile.play(new Card("Diamond","9"))
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
