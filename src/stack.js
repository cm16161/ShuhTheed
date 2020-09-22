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

module.exports = Stack
