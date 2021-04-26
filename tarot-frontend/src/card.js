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
        this.el = document.createElement('div')
        this.el.id = `card-${this.id}`
        
        this.element = document.getElementById('card-form')  //line39

        Card.all.push(this)
    }

    get cardList(){      
        // debugger
        return document.getElementById('card-list')

    }
    static findById(id){

        return Card.all.find(card => card.id == id)
    }

    static resetAllCards(){
        Card.all.forEach(e => e.attachToDom())
        document.getElementById("all-btn").remove()
    }
    addEventListeners(){
        this.element.addEventListener("click", this.handleCardClick)
    }
    attachToDom(){
        this.cardList.append(this.cardRender())
        this.addEventListeners()
    
    }
// what we want to display: 
    cardRender(){ 

        this.element.innerHTML += `
    
        <h3 style="text-align: left">
        Name: <span class="name">${this.name}</span><br>

        </h3>    
            <li class="meaning_upright">    
            Meaning Upright: <span class="meaning-upright">${this.meaning_upright}</span><br>
            </li>
            <li class="meaning_reverse"> 
            Meaning Reverse: <span class="meaning-reverse">${this.meaning_reverse}</span>
            </li>
                       
            <button class="delete" data-id="${this.id}">Delete</button>
            <button class="update" data-id="${this.id}">Update</button>
        `
        return this.element
    }

    updateCardOnDom({name, meaning_upright, meaning_reverse}){
        debugger
        this.name = name
        this.meaning_upright = meaning_upright
        this.meaning_reverse = meaning_reverse
        this.cardRender()
        this.addEventListeners()

    }
    addUpdateCardInfo(cardId){
        console.log(this)
        let card = document.querySelector(`#card-${cardId} li`)
        let updateCardForm = `
        <input type="text" name="name" value="${this.name}" id="update-name-${cardId}">
        <input type="text" name="meaning-upright" value="${this.meaning_upright}" id="update-meaning-upright-${cardId}">
        <input type="text" name="meaning-reverse" value="${this.meaning_reverse}" id="update-meaning-reverse-${cardId}">
        `
        let cardFormDiv = document.createElement('div')
        cardFormDiv.id = `update-form-${cardId}`
        cardFormDiv.innerHTML = updateCardForm
        card.append(cardFormDiv)
    }
    
    
    handleCardClick(c){
        let id = c.target.dataset.id
        if (c.target.className === "delete"){
                cardsAdapter.deleteCard(id)
        } else if(c.target.className === 'update'){
                c.target.className = "save"
                c.target.innerText = "Save"
                debugger
                this.addUpdateCardInfo(id)
                debugger
        } else if(c.target.className === 'save'){
                c.target.className = "update"
                c.target.innerText = "Update"
                cardsAdapter.sendPatchRequest(cardId)
            }
    }

}
