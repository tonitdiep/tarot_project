// js classes like backend classes (replication)
class Suit {
    static all = []
    constructor({id, name}) {
           //setting the properites of each item
            this.id = id
            this.name = name
            this.suitCards = document.getElementById('suit-div')
            this.suitDiv = document.createElement('div')
            this.suitDiv.id = `suit-${id}`
            // this.sorted = false
        Suit.all.push(this)
    }
    

    cards() {
    debugger
        return Card.all.filter((card) => card.suit_id == this.id);
    }
    static findById(id){       
        return Suit.all.find((suit) => suit.id == id)
    }

    // sortedCards(){
    //     debugger
    //     return this.cards.sort((a,b,c) => a.name - b.meaning_upright - c.meaning_reverse)
    // }

    attachToDom(){

        this.suitCards.append(this.suitRender())
        this.addEventListeners()
    }


    addEventListeners(){
        this.suitDiv.addEventListener('click', this.showCards)
        // listening click event, no () not to execute 
        // automatically, only on a click event aka a callback
    }


    suitRender() {

        this.suitDiv.innerHTML = `
        <h3>Suit: ${this.name.charAt(0).toUpperCase() + this.name.slice(1)}</h3>
        `
        return this.suitDiv
    }

        

    showCards = (e) => {
        console.log(this)
        
        const cardForm = document.getElementById('card-form')

        cardForm.innerHTML = ""
  
        return this.cards().forEach(card => {
           return card.attachToDom
           
        })  

    
    
    
    }


    
}