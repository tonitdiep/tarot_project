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

            }))
    }

    deleteCard(id){
       debugger
        // remove from db
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
    
        fetch(this.cardsUrl + `/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
        //remove from front end array
        Card.all = Card.all.filter(c => c.id != id)

        // remove from dom
        let card = document.getElementById(`card-${id}`)
        card.remove()
    }

}
// forEach
// appendToDom is that setting the let varialbe when appending 
// convert array into JS object on DOM