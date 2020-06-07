var Hand = require("./hand.js")
var [{},CARD_STATE] = require("./deck.js")

class BottomCards{
    constructor(){
	this.face_down = []
	this.face_up = []
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
	console.log("FACE_DOWN")
	console.log(this.face_down)

	console.log("FACE_UP")
	console.log(this.face_up)
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
	this.bottom_cards.print()
    }
    
}

module.exports = {Player, BottomCards}
