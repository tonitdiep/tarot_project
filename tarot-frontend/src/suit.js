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
        
            // this.suitCards = document.querySelector("#suit-div")
            // this.suitCards = document.querySelectorAll("#suit-dropdown")

        Suit.all.push(this)
    }
    

    // get suitAnchor(){
    //     // return document.getElementById('suit-div')
    //     return document.getElementById('suit-dropdown')
    // }

    get cards() {
        debugger
        return Card.all.filter((card) => card.suit_id == this.id);
    }
    static findById(id){       
        return Suit.all.find(suit => suit.id == id)
    }
    
    // mappedCards(e){
    //     console.log(e)
    //     return this.cards().map((card) => {card.attachToDom()})
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
        this.suitDiv.innerHTML +=`
        <h3>${this.name}</h3>
        `
        return this.suitDiv
    }

        

    showCards = () => {
    
        const cardList = document.getElementById('card-list')
        // const suitCards = document.getElementById("suit-div")
        // this.suitCards 
        let selectedSuit = document.querySelector("#suit-dropdown")
        this.cards
        cardList.innerHTML = ""

        // cardList.innerHTML = `

                    
        //             <h3 style="text-align: left">
        //             Name: <span class="name">${this.name}</span><br>
        //             </h3>    
        //                 <li class="meaning">    
        //                 Meaning Upright: <span class="meaning_upright">${this.meaning_upright}</span><br>
        //                 </li>
        //                 <li class="meaning"> 
        //                 Meaning Reverse: <span class="meaning_reverse">${this.meaning_reverse}</span>
        //                 </li>
        //             `
        //             return this.cardList
        // this.suitDiv.innerHTML += ``
        //  return this.suitDiv
     }


    
}