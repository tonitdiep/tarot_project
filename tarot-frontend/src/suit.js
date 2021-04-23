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
        console.log(this)
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
    debugger
        const cardList = document.getElementById('card-list')
        this.suitDiv.innerHTML = ""
        // const suitDiv = document.getElementById("suit-div") on the constructor

        this.cards.forEach(card => {
            card.attachToDom()
        })
        debugger
  

        // cardList.innerHTML = `

                    
        //             <h3 style="text-align: left">
        //             Suit Data ID: <span class="name">${this.id}</span><br>
        //             </h3>    
        //           Suit Type -Attributes Name: <span class="name">${this.name}</span><br>
        //                            <li class="meaning_upright">    
        //                            Cards Meaning Upright: <span id="meaning_upright">${this.attributes}</span><br>
        //                            </li>
        //                            <li class="meaning_reverse"> 
        //                           Cards Meaning Reverse: <span id="meaning_reverse">${this.cards}</span>
        //                   </li>
        //             `
        //             return this.cardList
        this.suitDiv.innerHTML += `
        
                                
        <h3 style="text-align: left">
        Suit Data ID: <span class="name">${this.id}</span><br>
        </h3>    
      Suit Type -Attributes Name: <span class="name">${this.name}</span><br>
                       <li class="meaning">    
                       Cards Meaning Upright: <span id="meaning_upright">${this.cards}</span><br>
                       </li>
                       <li class="meaning"> 
                      Cards Meaning Reverse: <span id="meaning_reverse">${this.attributes}</span>
              </li>
        `
         return this.suitDiv
     }


    
}