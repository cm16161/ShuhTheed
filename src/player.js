var Hand = require("./hand.js")

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
    }
    
}

module.exports = Player
