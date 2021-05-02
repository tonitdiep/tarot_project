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

        Card.all.push(this);
    }

    get cardList(){      
        return document.getElementById('card-list');
    }

    static findById(id){
        console.log(Card)
        return Card.all.find((card) => card.id == id);
        
    }

    static resetAllCards(){
        Card.all.forEach((e) => e.attachToDom());
        document.getElementById("btn").remove();
    }
    addEventListeners(){
        this.el.addEventListener("click", this.handleCardClick)

        const filterInput = document.getElementById("filterSubmit")
        filterInput.addEventListener("click", this.filteredKings)       

     
    }

    filteredKings = (e) => {
  
        const filteredKings = Card.all.filter(name => name.name.includes('King of'))
 
        cardList.innerHTML = ""
        return filteredKings.forEach(card => {
            card.attachToDom();

        return cardList
    })

    }


    attachToDom(){
        this.cardList.append(this.cardRender());
        this.addEventListeners();    

    }

    cardRender = () => { 
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
        let id = c.target.dataset.id;

        if (c.target.className === "delete"){
                cardsAdapter.deleteCard(id)
            };
    }

}
