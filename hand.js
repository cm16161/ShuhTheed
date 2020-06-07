class Hand{

    
    
    sort_hand(){
    	let len = this.hand.length;
    	for (let i = 0; i < len; i++) {
            for (let j = 0; j < len-1; j++) {
    		if (this.hand[j].value > this.hand[j + 1].value) {
    		    this.swap(j)
    		}
            }
    	}
    }

    swap(j){
	let tmp = this.hand[j];
        this.hand[j] = this.hand[j + 1];
        this.hand[j + 1] = tmp;
    }

    
    constructor(){
	this.hand = []
    }

    get sort(){
	this.sort_hand();
    }

    pick_up(card){
	this.hand.push(card);
    }

    print(){
	console.log(this.hand)
    }
}


module.exports = Hand
