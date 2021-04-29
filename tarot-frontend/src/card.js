class Card {
    static all = []    
  
    constructor({id, name, meaning_upright, meaning_reverse, suit_id}) {
        console.log(this)
        this.name = name;
        this.meaning_upright = meaning_upright;
        this.meaning_reverse = meaning_reverse;
        this.id = id;
        this.suit_id = suit_id; 
        this.el = document.createElement('div');
        this.el.id = `card-${this.id}`;
        
        // this.element = document.getElementById('card-form') ;

        Card.all.push(this);
    }

    get cardList(){      
        return document.getElementById('card-list');
    }

    static findById(id){
        // console.log(this)
        console.log(Card)
        return Card.all.find((card) => card.id == id);
        
    }

    // static search () {
    //     console.log(this)
    //     return document.getElementById('search-cards')
    //     addEventListener('click', this.search)
    // }

    static resetAllCards(){
        Card.all.forEach((e) => e.attachToDom());
        document.getElementById("btn").remove();
    }
    addEventListeners(){

        this.el.addEventListener("click", this.handleCardClick)
 
    }
    attachToDom(){
        this.cardList.append(this.cardRender());
        this.addEventListeners();    
    }

    cardRender = () => { 
        console.log(this)
        this.el.innerHTML = `
    
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
        return this.el
    }
    
    handleCardClick (c) {
        console.log(this)

        let id = c.target.dataset.id;
        if (c.target.className === "delete"){
                cardsAdapter.deleteCard(id)
            };
    }

}
