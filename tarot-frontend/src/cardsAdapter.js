class CardsAdapter {
    constructor() {
        this.cardsUrl = 'http://localhost:3000/cards'
    }

    fetchCards() {
        fetch(this.cardsUrl)
            .then(res => res.json())
            .then(data => data.data.forEach
                (element => {
                // debugger
                let card = new Card(element.attributes)
     
                card.attachToDom(element)

            })
            )

        
    }

}
// forEach
// appendToDom is that setting the let varialbe when appending 
// convert array into JS object on DOM