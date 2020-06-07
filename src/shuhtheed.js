var {Card, Deck} = require("./deck.js")
var Hand = require("./hand.js")
var Stack = require("./stack.js")
var Player = require("./player.js")


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


function deal(deck, players){
	for(var i = 0; i < 3;i++){
	    for (let p in players){
	    	players[p].hand.pick_up(deck.pop)
	    }
	}
    for (let p in players){
	players[p].hand.look()
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

    var ellie = new Player("Ellie");
    var harry = new Player("Harry");
    deal(deck,[ellie,harry])
    ellie.print_hand();
}

////////////////////////////////////////////////////////////

main()
