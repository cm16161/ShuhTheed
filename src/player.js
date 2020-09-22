var Hand = require("./hand.js")
var [{},CARD_STATE] = require("./deck.js")

const PLAY_OPTIONS = Object.freeze({"PICKUP":0, "PLAY_CARD":1})

class BottomCards{
    constructor(){
	this.face_up = []
	this.face_down = []
    }

    flip_bottom(index){
		this.face_down[index].see = CARD_STATE.PRIVATE
		var ret = this.face_down[index];
		this.face_down.splice(index,1);
		return ret
    }

    give(card, tb){
		if (tb === true){
			this.face_down.push(card)
		}
		else{
			card.see = CARD_STATE.PUBLIC
			this.face_up.push(card)
		}
    }

    swap(index,card){
		var ret = this.face_up[index]
		ret.see = CARD_STATE.PRIVATE
		this.face_up[index]=card
		this.face_up[index].see = CARD_STATE.PUBLIC
		return ret;
    }

    print(){
		console.log("FACE_UP")
		console.log(this.face_up)

		console.log("FACE_DOWN")
		console.log(this.face_down)
    }

    get_face_up(){
		for (let i in this.face_up){
			this.face_up[i].see = CARD_STATE.PRIVATE
		}
		var ret = this.face_up

		this.face_up = []
		return ret
    }
    
}

class Player{
    constructor(name){
	this.name = name;
	this.hand = new Hand();
	this.bottom_cards = new BottomCards()
    }

    get get_name(){
		return this.name
    }

    get get_hand(){
		return this.hand
    }

    print_hand(){
		console.log(this.hand.hand);
    }

    get print(){
		console.log(this.name)
		console.log(this.hand)
		console.log(this.bottom_cards)
    }

    // Allow the user to "make a play"
    // This can be picking up the game pile (tactical pickup)
    // Or Placing a card from their hand onto the game pile
    play(){
	// TODO
		console.log("//TODO - Play Card Function")
	
    }
    
}

module.exports = {Player, BottomCards}
