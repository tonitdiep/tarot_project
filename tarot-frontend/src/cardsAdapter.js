class CardsAdapter {
    constructor() {
        this.cardsUrl = 'http://localhost:3000/cards'
    }

    fetchCards() {
        fetch(this.cardsUrl)
            .then(res => res.json())
            .then(data => data.data.forEach
                (element => {
            
                let card = new Card(element.attributes)

                card.attachToDom(element)
       
            }))

    }


    deleteCard(id){
        // id.preventDefault()
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        // id.preventDefault()
        fetch(this.cardsUrl + `/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        });
        // id.preventDefault()
        Card.all = Card.all.filter(c => c.id != id);


        let card = document.getElementById(`card-${id}`);
        console.log(card)
        card.remove();
    }

    //need element 

  

}
