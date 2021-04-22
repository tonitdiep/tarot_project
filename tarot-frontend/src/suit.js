// js classes like backend classes (replication)
class Suit {
    static all = []
    constructor({id, name}) {
           //setting the properites of each item
            this.id = id
            this.name = name
            this.suitDiv = document.createElement('div')
            this.suitDiv.id = `suit-${this.id}`
                // this.suitDisplay = document.getElementById('suit-display')
            // this.element = document.getElementById('suit-display')
        Suit.all.push(this)
    }
    
    //selectedSuit() 
    // I want to grab the cards belonging to eachh suit 
    // to display its cards from a drop down menu
    selectedSuit(suitCards) {
    
        this.selectedSuit = document.getElementById('suit')
        this.selectedSuit.innerHTML += `

        `

        return this.selectedSuit

    }


    get suitAnchor(){
        return document.getElementById('suit-div')
    }

    get selectedSuit() {
        return document.getElementById('suit')
    }

    static findById(id){
        // debugger
        return Suit.all.find(suit => suit.id == id)
    }

    attachToDom(){
        debugger
        this.suitAnchor.append(this.suitRender())
        this.selectedSuit.append(this.selectedSuit())
        this.addEventListeners()
    }

    suitRender(){
        this.suitDiv.innerHTML += `        
            Suit Name: <span id="name">${this.name}</span><br>
        `   
        return this.suitDiv
    }

    
}