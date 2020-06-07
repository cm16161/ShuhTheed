var [{Card, Deck},CARD_STATE] = require("./deck.js")
var Hand = require("./hand.js")
var Stack = require("./stack.js")
var {Player, BottomCards} = require("./player.js")


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
	card.see = CARD_STATE.PUBLIC
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

    get top_card(){
	return this.pile.data[this.pile.top-1]
    }
}


function deal(deck, players){
	for(var i = 0; i < 3;i++){
	    for (let p in players){
		players[p].bottom_cards.give(deck.pop,true)
		players[p].bottom_cards.give(deck.pop,false)
	    	players[p].hand.pick_up(deck.pop)
		players[p].hand.look()
	    }
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
    var players = [ellie, harry]
    deal(deck,players)
    game_pile.pile.print

    players[0].print
    console.log(players[0].hand.can_play(game_pile.top_card))

    players[0].hand.hand[2] = players[0].bottom_cards.swap(0,players[0].hand.hand[2])

    players[0].print
    
    // for(var player in players){
    // 	// console.log(players[player].name)
    // 	// players[player].print_hand();
    // 	players[player].print
    // 	console.log(players[player].hand.can_play(game_pile.top_card))
    // }
    
    if(ellie.hand.can_play(game_pile.top_card) === false){
	game_pile.claim(ellie.hand)
    }



//     console.log("ELLIE:")
//     ellie.print_hand();
//     console.log("HARRY:")
//     harry.print_hand();
}

////////////////////////////////////////////////////////////

main()
