var [{Card, Deck},CARD_STATE] = require("./deck.js")
var Hand = require("./hand.js")
var Stack = require("./stack.js")
var {Player, BottomCards} = require("./player.js")
var GamePile = require("./gamepile.js")

const NERDS = ["Harry", "Ellie", "Karen", "Eilidh", "Niall", "Ollie","Chet"]


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

function create_players(){
    ret = [] 
    for (var i = 0; i < NERDS.length; i++){
	ret.push(new Player(NERDS[i]));
    }
    return ret
}

function create_deck(players){
    return new Deck(Math.ceil(players.length*9/54))
}

function main(){
    
    var players = create_players();
    var deck = create_deck(players)
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

    deal(deck,players)

    console.log(game_pile.top_card)

    

}

////////////////////////////////////////////////////////////

main()
