//build Card class
//remembering all the cards
//model
//the html we want to put on the dom for each card
//attach event listeners particular to each card
//consider cardsAdapter.js for things that makes calls to the api
class Card {
    static all = []    
    // ^all array: Update to store all cards on the frontend end
    constructor({id, name, meaning_upright, meaning_reverse, suit_id}) {
           //setting the properites of each item
        this.name = name
        this.meaning_upright = meaning_upright
        this.meaning_reverse = meaning_reverse
        this.id = id
        this.suit_id = suit_id 
        // this.suitDiv = document.createElement('div')
        // this.suitDiv.id = `card-${this.id}`
        
        // this.cardList = document.getElementById('card-list') //line23 SAME
        this.element = document.getElementById('card-form')  //line39

        Card.all.push(this)
    }

    get cardList(){
        // debugger
        return document.getElementById('card-list')

    }
    static findById(id){
        // debugger
        return Card.all.find(card => card.id == id)
    }
    attachToDom(){
        // debugger
        this.cardList.append(this.cardRender())
    
    }
// what we want to display: 
    cardRender(){ 
        this.element.innerHTML += `
    
        <h3 style="text-align: left">
        Name: <span class="name">${this.name}</span><br>
        </h3>    
            <li class="meaning">    
            Meaning Upright: <span class="meaning_upright">${this.meaning_upright}</span><br>
            </li>
            <li class="meaning"> 
            Meaning Reverse: <span class="meaning_reverse">${this.meaning_reverse}</span>
            </li>
                       
            <input type="submit" value="Delete">?
            <input type="submit" value="Update">?
        `
        return this.element
    }
    
    
}
