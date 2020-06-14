var Stack = require("./stack.js")
var [{},CARD_STATE] = require("./deck.js")
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

    get isEmpty(){
	return this.pile.isEmpty
    }
}


module.exports = GamePile
