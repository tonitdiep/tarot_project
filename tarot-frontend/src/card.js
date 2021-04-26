class Card {
    static all = []    
  
    constructor({id, name, meaning_upright, meaning_reverse, suit_id}) {
          
        this.name = name;
        this.meaning_upright = meaning_upright;
        this.meaning_reverse = meaning_reverse;
        this.id = id;
        this.suit_id = suit_id; 
        this.el = document.createElement('div');
        this.el.id = `card-${this.id}`;
        
        this.element = document.getElementById('card-form') ;

        Card.all.push(this);
    }

    get cardList(){      
        return document.getElementById('card-list');
    }

    static findById(id){
        return Card.all.find((card) => card.id == id);
    }

    static resetAllCards(){
        Card.all.forEach((e) => e.attachToDom());
        document.getElementById("btn").remove();
    }
    addEventListeners(){
        this.element.addEventListener("click", this.handleCardClick)

    }
    attachToDom(){
        this.cardList.append(this.cardRender());
        this.addEventListeners();    
    }

    cardRender = () => { 

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
        `
        return this.element
    }
    
    handleCardClick (c) {
        this.constructor.all 
        let id = c.target.dataset.id;
        if (c.target.className === "delete"){
                cardsAdapter.deleteCard(id)
            };
    }

}
