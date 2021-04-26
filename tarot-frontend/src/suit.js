// js classes like backend classes (replication)
class Suit {
    static all = []
    constructor({id, name}) {
       
            this.id = id;
            this.name = name;
            this.suitCards = document.getElementById('suit-div');
            this.suitDiv = document.createElement('div');
            this.suitDiv.id = `suit-${id}`;

        Suit.all.push(this);
    }
    

    cards() {
        return Card.all.filter((card) => card.suit_id == this.id);
    }

    static findById(id){       
        return Suit.all.find((suit) => suit.id == id);
    }


    attachToDom(){

        this.suitCards.append(this.suitRender());
        this.addEventListeners();
    }


    addEventListeners(){
        this.suitDiv.addEventListener('click', this.showCards);
    }


    suitRender() {

        this.suitDiv.innerHTML = `
        <h3>Suit: ${this.name.charAt(0).toUpperCase() + this.name.slice(1)}</h3>
        `
        return this.suitDiv
    }

        
    showCards = () => {

        let showAllBtn = document.getElementById("btn");
        if (!showAllBtn){
            showAllBtn = document.createElement('button');
            showAllBtn.id = "btn";
            showAllBtn.innerText = "SHOW ALL CARDS";
            this.suitCards.append(showAllBtn);
        }else{
            showAllBtn = document.getElementById("btn");
        }
        showAllBtn.addEventListener("click", this.reset);


        const cardForm = document.getElementById('card-form');
        cardForm.innerHTML = ""
        return this.cards().forEach(card => {
            card.attachToDom();
        })

    }
    
    reset = () => {
            let suitElement = document.getElementById(`suit-${this.id}`);
            suitElement.children[0].style.color = "pink"
            Card.resetAllCards()
    }






    
}